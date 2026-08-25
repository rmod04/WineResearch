// ─────────────────────────────────────────────────────────────
// WINE TOURISM PARTNERS — edit this file to add/update partners
// ─────────────────────────────────────────────────────────────

export interface Partner {
  slug: string
  name: string
  region: string
  country: string
  tagline: string
  shortDescription: string
  fullDescription: string
  quirkLine?: string // Rendered as a separate closing paragraph on the partner page
  experiences: { title: string; description: string }[]
  image: string
  mapEmbed?: string // Google Maps embed URL (no API key needed)
  comingSoon: boolean
}

export const partners: Partner[] = [
  {
    slug: 'nuala',
    name: 'Nuala Wines',
    region: 'Marlborough & Central Otago',
    country: 'New Zealand',
    tagline: 'France meets New Zealand, one bottle at a time.',
    shortDescription:
      'A New Zealand winery with a French soul, Nuala is one of the most awarded labels in the country and the kind of discovery that stays with you long after the glass is empty.',
    fullDescription:
      'Nuala was born in 2010 in Marlborough, New Zealand\'s most celebrated wine region, when a group of French founders set out to bring the craft and discipline of their homeland to the zingy, sun-drenched south. The result is a range that feels both unmistakably New Zealand and unmistakably French. Winemaker Paul Martung grew up in Bordeaux, and that heritage shows: there\'s always balance, always precision, always something to think about. The Sauvignon Blancs come from Marlborough\'s Wairau Valley, where long sunny days and cool nights produce the kind of flavour that makes the grape famous. Head south to Central Otago, one of the world\'s most dramatic and remote wine regions, and you find the Pinot Noirs and Rieslings: certified organic, deeply expressive, and the kind of wine that rewards a little patience.',
    quirkLine:
      'Named after an Irish character, planted by French hands, grown in New Zealand soil. Diversity at its best.',
    experiences: [
      {
        title: 'Marlborough Tasting',
        description:
          'A tasting of Nuala\'s Marlborough range, from the iconic Sauvignon Blanc to the Reserve, exploring what makes the Wairau Valley one of the world\'s great wine regions. Expect lively aromatics, generous fruit, and a lot of brilliant sunshine in the glass.',
      },
      {
        title: 'Central Otago Tasting',
        description:
          'A focused look at Nuala\'s Central Otago expressions: the certified organic Riesling, Pinot Noir, and Reserve Pinot Noir, from one of the world\'s most spectacular and remote wine regions. Dramatic landscapes make for dramatic wines.',
      },
      {
        title: 'Portfolio Tasting with Paul Martung',
        description:
          'A sit-down tasting of the full Nuala range with winemaker Paul Martung himself, the man who brings a Bordeaux sensibility to the vineyards of New Zealand. A rare chance to hear about a wine directly from the person who made it.',
      },
    ],
    image: '/images/photo-partner-nuala.jpg',
    comingSoon: false,
  },
  {
    slug: 'arbo',
    name: 'Vignobles Arbo',
    region: 'Francs Côtes de Bordeaux',
    country: 'France',
    tagline: 'Five generations, one hillside.',
    shortDescription:
      'Eight kilometres from Saint-Émilion, a fifth-generation family is quietly crafting some of Bordeaux\'s most honest and thoughtfully farmed wines. A hidden gem that rewards the curious traveller.',
    fullDescription:
      'The Arbo family has been farming in Francs since 1900, long enough to know their 41 hectares of limestone clay inside out, and curious enough to keep reinventing what they do with them. Margaux & Dorian Arbo, the fifth generation, grew up here, went off to New Zealand and the wider wine world, and came back with a clearer sense of what makes this particular corner of Bordeaux special. The estate is farmed to HVE 4 and ISO 14001 environmental standards: 100% grass cover between the vines, agroforestry, and a flock of sheep and goats that roam the vineyard from November to April. The wines are unpretentious and generous.',
    quirkLine:
      'A flock of sheep grazes these vines every winter. It is one of the reasons the soil here is as alive as it is.',
    experiences: [
      {
        title: 'Estate Visit & Cellar Tasting',
        description:
          'A guided walk through the Arbo estate with Margaux & Dorian Arbo, exploring the 35 vineyard plots and the limestone clay terroir that gives these wines their character. Finishes with a seated tasting of the full range.',
      },
      {
        title: 'Vineyard Walk',
        description:
          'An immersive half-day exploring how Arbo farms their land: grass cover between every row, agroforestry, and the sheep and goats that graze through the vineyard all winter. The kind of visit that changes how you think about what\'s in your glass.',
      },
      {
        title: 'Portfolio Tasting',
        description:
          'A structured tasting of the full Arbo collection, from Château Godard Bellevue and L\'Étoile du Château Godard Bellevue to Château Puyanché (red and white), ARBO Malbec, and ARBO Cabernet Sauvignon, exploring how five generations of farming a single estate produces wines this distinct.',
      },
    ],
    image: '/images/photo-partner-arbo.jpg',
    mapEmbed:
      'https://maps.google.com/maps?q=Chateau+Godard+Bellevue+Francs+33570+France&t=&z=15&ie=UTF8&iwloc=&output=embed',
    comingSoon: false,
  },
  {
    slug: 'castiglion-del-bosco',
    name: 'Castiglion del Bosco',
    region: 'Montalcino, Tuscany',
    country: 'Italy',
    tagline: 'Brunello at its most extraordinary.',
    shortDescription:
      'Nestled in the hills above Montalcino, Castiglion del Bosco is one of Tuscany\'s great wine estates and one of Decanter\'s ten wineries you must visit in the region.',
    fullDescription:
      'There are places where wine feels like something more than a drink, and Castiglion del Bosco is one of them. Set against some of the most beautiful landscape in Italy, this Montalcino estate produces Brunello di Montalcino that has earned it a place among the very best in the appellation. Decanter named it one of Tuscany\'s ten essential wineries to visit, and once you\'ve walked through the historic cellars or sat down to a tasting above those rolling hills, it\'s not hard to see why. Every experience here is designed to connect you to the wine as directly as possible: the soil it came from, the barrels it aged in, the food it was always meant to be paired with.',
    quirkLine:
      'Don\'t forget to take part in the blind tasting at the end. Guess wisely!',
    experiences: [
      {
        title: 'Wine Experience',
        description:
          'The signature Castiglion del Bosco visit: a cellar tour followed by a tasting of six wines paired with Tuscan cheeses, cold meats, fresh bread, olive oil, and honey. Ends with a blind wine chosen for your palate. Genuinely one of the great wine experiences in Italy.',
      },
      {
        title: 'Cheese & Wine Pairing',
        description:
          'Six wines, including the very rare Vin Santo, alongside a carefully chosen spread of Italian cheeses: aged Tuscan Pecorino, blue cheese, and more. A session that shows just how much food and wine have to say to each other.',
      },
      {
        title: 'Brunello Vertical',
        description:
          'Six of the most remarkable Brunello di Montalcino vintages from the estate, served in Zalto Universal glasses with local Pecorino, bread and olive oil. A masterclass for the serious wine lover, or anyone who wants to become one.',
      },
    ],
    image: '/images/photo-partner-cdb-2.jpg',
    mapEmbed:
      'https://maps.google.com/maps?q=Castiglion+del+Bosco+1+53024+Montalcino+Siena+Italy&t=&z=15&ie=UTF8&iwloc=&output=embed',
    comingSoon: false,
  },
  {
    slug: 'emilio-moro',
    name: 'Bodegas Emilio Moro',
    region: 'Ribera del Duero & El Bierzo',
    country: 'Spain',
    tagline: 'Tempranillo rooted in family, soil, and time.',
    shortDescription:
      'A family winery in the heart of Ribera del Duero, with some of the most celebrated Tempranillo in Spain and a second estate in the wild, mountainous landscapes of El Bierzo.',
    fullDescription:
      'The Moro family\'s story starts where most great wine stories do: with a deep attachment to a piece of land. Pesquera de Duero, on the banks of the Duero river, is where they built one of Ribera del Duero\'s most respected wineries, built around three things they take seriously: tradition, innovation, and looking after the people and place that make their wines possible. The Malleolus range, drawn from the oldest vines on the estate, has earned serious international recognition, while the Solidarity Vineyard tells a different kind of story about what a winery can stand for. In El Bierzo, further west, higher up, and completely different in character, the wines feel like a discovery: wilder, more mineral, shaped by mountains rather than river plains. Five experiences across two regions; one family behind all of it.',
    quirkLine:
      'Come in September and you can pick the grapes yourself. Remember to pack a pair of gloves.',
    experiences: [
      {
        title: 'Wine Speaks to You',
        description:
          'Begin at the Solidarity Vineyard, where the Moro family story starts, then walk through the winery and cellars before settling in to taste three landmark wines: La Revelía, Emilio Moro and La Felisa, with a courtesy appetizer alongside.',
      },
      {
        title: 'Taste Our Ribera',
        description:
          'A fuller journey from soil to glass to table: vineyard, winery, and a tasting of four wines, La Revelía, El Alba, La Felisa and Malleolus, each paired with a tapa prepared by the house chef to echo the character of the wine.',
      },
      {
        title: 'In Malleolus Veritas',
        description:
          'A premium tasting of the complete Malleolus trilogy: Malleolus, Malleolus de Valderramiro, and Malleolus de Sanchomartín. Three soils, three expressions, one grape variety. A quiet masterclass in what a single hillside can produce.',
      },
      {
        title: 'Discover the Grape Harvest',
        description:
          'Available in September and October only: pick grapes, press them in the traditional way, and taste the season\'s wines, El Zarzal, Emilio Moro and Malleolus, with a picnic in the vineyard. One of the great seasonal wine experiences in Spain.',
      },
      {
        title: 'The Essence of El Bierzo',
        description:
          'A visit to Emilio Moro\'s second estate in the mountains of León, a completely different landscape and character. Guided through the bodega, then a tasting of four wines: El Zarzal, La Revelía and Bestizo from El Bierzo, plus Malleolus from Ribera del Duero, paired with local produce.',
      },
    ],
    image: '/images/photo-partner-emilio-moro.jpg',
    mapEmbed:
      'https://maps.google.com/maps?q=Bodegas+Emilio+Moro+Ctra+Penafiel+Valoria+47315+Pesquera+de+Duero+Valladolid&t=&z=15&ie=UTF8&iwloc=&output=embed',
    comingSoon: false,
  },
  {
    slug: 'vignobles-hermouet',
    name: 'Vignobles Hermouet',
    region: 'Fronsac, Bordeaux',
    country: 'France',
    tagline: 'The Secret Garden of Bordeaux, five generations deep.',
    shortDescription:
      'A fifth-generation family estate in the heart of Fronsac, Bordeaux\'s so-called Secret Garden, producing honest, lively wines from 50 hectares of clay-limestone hillside.',
    fullDescription:
      'There\'s something quietly special about Fronsac. It sits just west of Saint-Émilion, shares much of the same geology, and has been producing wine since the 18th century, yet it remains largely undiscovered by the wider wine world. The Hermouet family has been here since 1911, working the same slopes through five generations. Esther Hermouet is the latest to take over, continuing a project built on careful observation, sustainable farming, and wines that reflect the land they came from. A quarter of the 50-hectare estate is given over to biodiversity: orchids, hedgerows, woods, and streams.',
    quirkLine:
      'They grow orchids between the vines here. How often do you get to see that?',
    experiences: [
      {
        title: 'Hermouet Essentials',
        description:
          'An hour in the barrel room with a glass in hand: a guided visit to the heart of the estate followed by a tasting of the full Vignobles Hermouet range, six wines across the Fronsac and Bordeaux appellations. Add a cheese and charcuterie plate if you\'re feeling peckish.',
      },
      {
        title: 'Hermouet In Depth',
        description:
          'Two hours and the full picture: a walk through the vineyard, a look around the winery, time in the barrel room, and a tasting of the complete range. The version for those who want to understand what makes Fronsac special. Cheese and charcuterie can be added.',
      },
      {
        title: 'Hermouet Immersion',
        description:
          'Three and a half hours, no rush. Vineyard, winery, barrel room, the full tasting, and then a home-made gourmet lunch paired with the wines. The kind of afternoon you\'ll still be talking about on the way home.',
      },
    ],
    image: '/images/photo-partner-hermouet.jpg',
    mapEmbed:
      'https://maps.google.com/maps?q=Clos+du+Roy+33141+Saillans+France&t=&z=15&ie=UTF8&iwloc=&output=embed',
    comingSoon: false,
  },
  {
    slug: 'buerklin-wolf',
    name: 'Dr. Bürklin-Wolf',
    region: 'Pfalz',
    country: 'Germany',
    tagline: 'Four centuries of Riesling, grown in harmony with the land.',
    shortDescription:
      'One of Germany\'s oldest family estates, Dr. Bürklin-Wolf produces biodynamic Riesling from some of the Pfalz\'s finest Grand Cru sites, from a tradition rooted in 1597.',
    fullDescription:
      'There are wine estates with long histories, and then there is Bürklin-Wolf. The family\'s connection to the vineyards of Wachenheim goes back to 1597, making this one of the oldest privately owned wine estates in Germany. Today it is run by Bettina Bürklin-von Guradze, who in 1990 converted the entire estate to biodynamic farming, one of the first in the country to do so, and brought a Burgundian approach to vineyard classification that helped reshape how Germany thinks about its finest sites. The estate farms across four villages: Forst, Wachenheim, Deidesheim, and Ruppertsberg, working Grand Cru sites including Forster Kirchenstück, Jesuitengarten, and Ungeheuer. All biodynamic preparations are made on the estate itself. The result is a collection of dry Rieslings with real energy, precision, and terroir character: wines that shift your understanding of what Riesling can be. The tasting room sits in the English Garden on the estate, a beautiful historic property in Wachenheim, where the current vintage is always open and the warmth is genuine.',
    quirkLine:
      'Ask about the Treasure Chamber. There are bottles in there from before the First World War.',
    experiences: [
      {
        title: 'Stay at the Estate',
        description:
          'A night in one of the estate\'s guest apartments in Wachenheim, followed by a guided tour of the vineyards and cellar and a tasting of the full range from village wines through to the Grand Cru appellations. A rare chance to experience a great German wine estate at your own pace.',
      },
      {
        title: 'Tasting at the Vinothek',
        description:
          'A guided tasting at the Vinothek im Englischen Garten, the estate\'s historic tasting room set in a spacious park, covering the Bürklin-Wolf range from village-level Rieslings through to the Premier Cru and Grand Cru expressions. Also open for a glass at your own pace during opening hours.',
      },
    ],
    image: '/images/photo-partner-buerklin-wolf.jpg',
    mapEmbed:
      'https://maps.google.com/maps?q=Weingut+Dr+Burklin-Wolf+Ringstrasse+4+67157+Wachenheim+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed',
    comingSoon: false,
  },
  {
    slug: 'max-ferd-richter',
    name: 'Weingut Max Ferd. Richter',
    region: 'Mosel',
    country: 'Germany',
    tagline: 'Ten generations on the Mosel, a region steeped in history.',
    shortDescription:
      'A family estate in Mülheim an der Mosel since 1680, producing some of the Mosel\'s most celebrated Rieslings from steep slate vineyards that have belonged to the family for over 300 years.',
    fullDescription:
      'The Max Ferd. Richter estate has been in the same family since 1680, across ten generations farming the steep slate slopes of the Middle Mosel. The estate has a Napoleon story: in 1813, the family ancestor Franz Ludwig Niessen paid a ransom of 3,000 Talers from his own estate to stop Napoleon\'s army from sacking Mülheim. In gratitude, the town gave him a vineyard, the Elisenberg, which the family still farms today. Across 50 acres, 95% Riesling, all hand-harvested and fermented in traditional Fuder oak barrels with indigenous yeast, the estate owns the most extensive oak cask-cellar in the Middle Mosel.',
    quirkLine:
      'Ask them about the wine that once flew on a Zeppelin. That is a story best heard with a glass in hand.',
    experiences: [
      {
        title: 'Estate Tasting',
        description:
          'A guided tasting of 10 to 12 wines, taking you through the Max Ferd. Richter range with the story behind each wine, the vineyard it came from, and the winemaking philosophy that ties them together. About an hour to an hour and a half, and a genuinely great introduction to what the Mosel is all about.',
      },
      {
        title: 'Grand Cru Deep Dive',
        description:
          'A focused and tailored session exploring the estate\'s Grand Cru sites and wines in depth, with older vintages and a theme shaped around your group. Format and duration are arranged in advance with the estate. One of the most rewarding afternoons you can spend in the Mosel valley.',
      },
    ],
    image: '/images/photo-partner-mfr.jpg',
    mapEmbed:
      'https://maps.google.com/maps?q=Weingut+Max+Ferd+Richter+Hauptstrasse+85+54486+Mulheim+Mosel+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed',
    comingSoon: false,
  },
]
