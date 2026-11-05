import csv, statistics as st
rows=[]
for line in open('panel_raw.txt'):
    line=line.strip()
    if not line: continue
    name,region,tier,price,vins=line.split('|')
    for v in vins.split(';'):
        y,r,c=v.split(':')
        rows.append(dict(wine=name,region=region,tier=tier,price_usd=float(price),
                         vintage=int(y),rating=(None if r=='none' else float(r)),ratings_count=int(c)))
with open('vivino_burgundy_vintage_panel.csv','w',newline='') as f:
    w=csv.DictWriter(f,fieldnames=['wine','region','tier','price_usd','vintage','rating','ratings_count'])
    w.writeheader(); w.writerows(rows)
print('rows',len(rows),'wines',len({r["wine"] for r in rows}))
print('rated rows',sum(1 for r in rows if r['rating']))

# AGE GRADIENT TEST: within each wine, compare mean rating of 2015-2017 vs 2020-2023
old_new=[]
for wine in sorted({r['wine'] for r in rows}):
    rs=[r for r in rows if r['wine']==wine and r['rating']]
    old=[r['rating'] for r in rs if r['vintage']<=2017]
    new=[r['rating'] for r in rs if r['vintage']>=2020]
    if len(old)>=2 and len(new)>=2:
        old_new.append((wine,round(st.mean(old),3),round(st.mean(new),3),round(st.mean(old)-st.mean(new),3)))
print('\nWITHIN-WINE AGE GRADIENT  (2015-17 mean vs 2020-23 mean), n=%d wines'%len(old_new))
for w,o,n,d in old_new: print(f'  {d:+.2f}  old {o:.2f} / new {n:.2f}  {w[:52]}')
diffs=[d for _,_,_,d in old_new]
print('\nmean diff (older minus newer): %+.3f'%st.mean(diffs))
print('median diff: %+.3f'%st.median(diffs))
print('wines where older rates HIGHER: %d / %d'%(sum(1 for d in diffs if d>0),len(diffs)))
print('wines where older rates LOWER : %d / %d'%(sum(1 for d in diffs if d<0),len(diffs)))
print('wines tied (within 0.05)      : %d / %d'%(sum(1 for d in diffs if abs(d)<=0.05),len(diffs)))

# 2016-only cross-section by tier, using one price per wine
print('\n2016 VINTAGE CROSS-SECTION (matured ~10 years)')
for tier in ['regional','village','premier']:
    s=[r for r in rows if r['tier']==tier and r['vintage']==2016 and r['rating']]
    if s:
        print(f'  {tier:9s} n={len(s):2d}  median rating {st.median([x["rating"] for x in s]):.2f}  median price ${st.median([x["price_usd"] for x in s]):.0f}')
# price check
print('\nPRICE-INVARIANCE CHECK: distinct prices per wine')
bad=0
for wine in {r['wine'] for r in rows}:
    ps={r['price_usd'] for r in rows if r['wine']==wine}
    if len(ps)>1: bad+=1
print('  wines with more than one price across vintages:',bad,'of',len({r['wine'] for r in rows}))
