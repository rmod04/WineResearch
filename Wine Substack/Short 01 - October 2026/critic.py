import csv, statistics as st
# Wine Enthusiast published ratings, retrieved 9 Oct 2026
beaujolais=[("Chateau Bonnet 2024 Beaujolais-Villages Blanc",91,25),("Chateau des Jacques 2023 Beaujolais Blanc",92,26),
("Chateau Moulin Favre 2023 Cuvee Alexis Blanc",92,26),("Pierre-Marie Chermette 2024 Collonges Chardonnay",91,25),
("Trenel 2022 Beaujolais Blanc",92,20),("Georges Duboeuf 2024 Beaujolais Nouveau",90,11),
("Georges Duboeuf 2024 Nouveau Beaujolais-Villages",91,14),("Chateau de Pizay 2023 Gamay Noir",90,13),
("Louis Jadot 2023 Beaujolais",91,14),("Pierre-Marie Chermette 2023 Origine Vieilles Vignes",92,18),
("Alexandre Burgaud 2022 Lantignie",90,24),("Jean Loron 2022 La Vauxonne Gamay Noir",91,20),
("Cave du Chateau de Chenas 2023 Terres Burgondes Fleurie",93,15),("Gilles Coperet 2023 Les Roches Fleurie",93,23),
("Mommessin 2023 Grandes Mises Gamay Fleurie",93,29),("Pierre-Marie Chermette 2023 Les Garants Fleurie",92,34),
("Chateau des Jacques 2022 Cote du Py Morgon",94,29),("Domaine Gaget 2023 Cote du Py Morgon",94,25),
("Joseph Jacome 2023 Morgon",92,15),("Laurent Perrachon et Fils 2023 Corcelette Morgon",93,23),
("Maison Remy Passot et Fils 2023 Les Rampaux Morgon",92,16),("Chateau du Moulin-a-Vent 2022 La Rochelle",96,97),
("Domaine Fond Moiroux 2023 Gros Vosges Moulin-a-Vent",93,26),("Domaine Manoir du Carra 2021 Les Burdelines",92,28),
("Georges Duboeuf 2022 Moulin-a-Vent",93,16),("Mont Bessay 2022 Les Vieux Bourg Moulin-a-Vent",92,55)]
pinot=[("Klee 2023 Pinot Noir",91,20,"Willamette Valley"),("Kudos 2023 Pinot Noir",90,13,"Willamette Valley"),
("Maidenhair 2023 Pinot Noir",90,20,"Willamette Valley"),("Yering Station 2022 Little Yering",93,20,"Victoria"),
("Le Charmel 2023 Pinot Noir",90,16,"Pays d'Oc"),("Paul Mas 2023 Reserve Single Vineyard",90,18,"Pays d'Oc"),
("Bishop's Peak 2023 Pinot Noir",93,20,"San Luis Obispo Coast"),("Carmel Road 2022 Pinot Noir",92,11,"Monterey County"),
("The Introvert 2023 Reserve Pinot Noir",92,10,"California"),("Butternut 2022 Pinot Noir",92,13,"California")]
with open('critic_scores_wine_enthusiast.csv','w',newline='') as f:
    w=csv.writer(f); w.writerow(['list','wine','points','price_usd','region'])
    for n,p,pr in beaujolais: w.writerow(['Beaujolais ratings',n,p,pr,'Beaujolais'])
    for n,p,pr,r in pinot: w.writerow(['Best Pinot Noir value list',n,p,pr,r])
bp=[pr for _,_,pr in beaujolais]
pp=[pr for _,_,pr,_ in pinot]
print('Beaujolais 90+ : n=%d  median $%.0f  range $%d-$%d  points %d-%d'%(len(bp),st.median(bp),min(bp),max(bp),
      min(p for _,p,_ in beaujolais),max(p for _,p,_ in beaujolais)))
print('  excluding the one $97 outlier: median $%.0f'%st.median([x for x in bp if x<90]))
print('  at or under $30: %d of %d'%(sum(1 for x in bp if x<=30),len(bp)))
print('Pinot value list: n=%d  median $%.0f  range $%d-$%d  points %d-%d'%(len(pp),st.median(pp),min(pp),max(pp),
      min(p for _,p,_,_ in pinot),max(p for _,p,_,_ in pinot)))
print('  Burgundy entries on the Pinot value list: %d'%sum(1 for _,_,_,r in pinot if 'Bourgogne' in r or 'Burgundy' in r))
