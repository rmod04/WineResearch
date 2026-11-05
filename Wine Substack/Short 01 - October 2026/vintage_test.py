import csv, statistics as st
REG = {"Bourgogne":"regional","Cote de Nuits":"regional"}
burg=[]
for r in open('burg110.txt'):
    y,ra,p,reg=r.strip().split(','); reg=reg.strip()
    burg.append(dict(y=int(y),r=float(ra),p=float(p),
                     tier=REG.get(reg,"village+"),region=reg))
bjo=[]
for r in open('bjo150.txt'):
    y,ra,p=r.strip().split(',')
    bjo.append(dict(y=int(y),r=float(ra),p=float(p),tier="beaujolais"))

def med(rows): return st.median([x['p'] for x in rows]) if rows else None
def band(rows,lo,hi): return [x for x in rows if lo<=x['r']<=hi]

print("=== VINTAGE DISTRIBUTION ===")
for name,rows in [("Burgundy (n=%d)"%len(burg),burg),("Beaujolais (n=%d)"%len(bjo),bjo)]:
    ys=[x['y'] for x in rows]
    pre=sum(1 for y in ys if y<2020)
    print(f"  {name:22s} median vintage {st.median(ys):.0f}   pre-2020 rows: {pre} ({100*pre/len(ys):.1f}%)")

print("\n=== PRICE AT 4.0 TO 4.2, ALL VINTAGES vs 2020+ ===")
rows=[("Burgundy village+",[x for x in burg if x['tier']=='village+']),
      ("Bourgogne regional",[x for x in burg if x['tier']=='regional']),
      ("Beaujolais (all)",bjo)]
for label,grp in rows:
    a=band(grp,4.0,4.2); b=[x for x in a if x['y']>=2020]
    ma,mb=med(a),med(b)
    if ma and mb:
        print(f"  {label:20s} all: ${ma:7.2f} (n={len(a):3d})   2020+: ${mb:7.2f} (n={len(b):3d})   change {100*(mb-ma)/ma:+.1f}%")

print("\n=== THE HEADLINE: share under $50 among wines rated 4.0+ ===")
for label,grp in rows:
    for tag,sel in [("all vintages",grp),("2020+",[x for x in grp if x['y']>=2020])]:
        s=[x for x in sel if x['r']>=4.0]
        if s:
            u=sum(1 for x in s if x['p']<50)
            print(f"  {label:20s} {tag:13s} {u:3d}/{len(s):3d} = {100*u/len(s):5.1f}%")
    print()

print("=== PRE-2020 ROWS IN THE BURGUNDY SAMPLE, AND WHAT THEY COST ===")
old=sorted([x for x in burg if x['y']<2020],key=lambda z:-z['p'])
for x in old: print(f"  {x['y']}  rating {x['r']}  ${x['p']:>8.2f}  {x['region']}")
print(f"  median price of these {len(old)} rows: ${med(old):.2f}")
rec=[x for x in burg if x['y']>=2020]
print(f"  median price of the {len(rec)} rows from 2020 on: ${med(rec):.2f}")
