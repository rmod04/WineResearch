import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Wine Travel Diaries: Spain — Cork To Table',
  description:
    'From Ribera del Duero to Rioja and Laguardia — a road journey through Spain\'s greatest wine regions. Three wineries, one grape variety, three completely different stories.',
}

export default function SpainTravelDiariesPage() {
  return (
    <>
      {/* ── Article header ───────────────────────────────────────── */}
      <section className="bg-burgundy pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
            Travel
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-cream leading-tight mb-3">
            Wine Travel Diaries: Spain
          </h1>
          <p className="font-cormorant text-2xl italic text-cream/70 mb-6">
            From the Duero to the Ebro
          </p>
          <div className="w-12 h-px bg-gold mb-6" />
          <p className="font-montserrat text-[11px] tracking-widest uppercase text-cream/60">
            April 2026
          </p>
        </div>
      </section>

      {/* ── Featured image ───────────────────────────────────────── */}
      <div className="relative h-[50vh] min-h-[320px]">
        <Image
          src="/images/photo-spain-hero.jpg"
          alt="Vineyards along a Spanish river valley"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Body ─────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="font-montserrat text-sm text-charcoal leading-loose space-y-6">
            <p className="font-cormorant text-xl italic text-burgundy leading-relaxed">
              A journey to Spain&apos;s famous wine regions is a must-do for any wine professional or enthusiast. Driving out of Madrid, the flat plains of the Meseta Central eventually give way to river valleys and vine-covered slopes.
            </p>
            <p>
              The region of Ribera del Duero approaches, and going further north, the landscape opens into Rioja&apos;s famous subregions situated around the Ebro river, before eventually merging into the Basque countryside. Just like any other wine region of the world, the significance of the story behind the glass remains as important as the aromas and flavours themselves. Reading further on will explain why.
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              Stop 1: Bodegas Emilio Moro, Pesquera del Duero
            </h2>
            <p>
              The first stop on this particular road trail is the winery of Emilio Moro in Ribera del Duero. This sits in Pesquera de Duero at an elevation of 700 metres, overlooking the Duero River; four generations of the Moro family have farmed their estate vineyards at an altitude range between 2,400 and 3,000 feet.
            </p>
            <p>
              The tour begins in the vineyard, walking the land, immersed in the history of the winery and the family origins. After learning about the subtle differences in terroir and altitude, the visit continues into the winemaking area and ageing cellar. The subsequent tasting consists of four wines: La Revelía, El Alba, La Felisa, and Malleolus.
            </p>
            <p>
              Before approaching the reds, a note on La Revelía. Originating from Godello grapes in the Bierzo, this is a wine that surprises. Citrusy and mineral on the nose, then creamy and generous on the palate, with peach, apricot, white flowers and a long, fresh finish. It&apos;s the kind of bottle you open and end up talking about all evening. El Alba is their signature Rosé, and La Felisa is the winery&apos;s first organic wine, made as a tribute to the mother of the third generation.
            </p>
            <p>
              In the reds, the signature Malleolus range is made with 100% Tempranillo grapes from some of the oldest vineyards in the region. The result is a glass of deep dark fruit — black cherry, plum, cassis — layered with tobacco, cedar, dark chocolate, and tannins that are smooth and velvety. A given vintage may need some time, but it is absolutely worth the wait. An added factor of distinctiveness is the variation demonstrated by these rich and elegant wines based on plot choices. The Sanchomartín variant sits higher, with more limestone and slower ripening, producing finer and fresher wines; the Valderramiro variant sits lower, with clay soils, producing wines that are more structured and powerful on the palate.
            </p>
            <p>
              Pairing these wines with some fresh, locally crafted dishes creates a complete experience. For those who are still hungry, there is a plate of the region&apos;s famous suckling pig on offer as well.
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              Stop 2: Logroño
            </h2>
            <p>
              Carrying on to the Rioja region, the capital city of Logroño serves as the ideal spot to halt for the night. This is a city where wine is engrained into the local culture, and isn&apos;t merely a tourist attraction. The most noteworthy area is Calle Laurel; a 300-metre long pedestrian street laced with tapas bars specialising in individual dishes, ranging from classic styles of cooked prawns, octopus, mushrooms, foie gras, chorizo sausage, pork shoulder, and patatas bravas. Try a single dish with the house specialty glass of Crianza, move on to the next bar. This is how the locals do it.
            </p>
            <p>
              While wine and food pairings still remain the central theme, the contrast in style to the winery visits is the breath of fresh air that every traveller cherishes: no tasting notes, no terroir talk, just wine and food, a buzzing neighbourhood, and an enjoyable evening.
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              Stop 3: Bodegas Roda, Haro
            </h2>
            <p>
              Haro is the traditional birthplace of wines under DOCa Rioja, and home to the Barrio de la Estación, a neighbourhood where several of Rioja&apos;s most celebrated bodegas sit side by side overlooking the Ebro river. Bodegas Roda is a relatively new entrant to this community. Founded in 1987, the objective was to approach wine with a new perspective: energy balance. Roda has received the Sustainable Wineries for Climate Protection certification, with underground cellars built into the rock that use natural humidity and geothermal energy, pipes that perforate into cellar walls which regulate temperature by exploiting the difference in weight between cold and hot air, and disease and pest control carried out using vine design and biological alternatives.
            </p>
            <p>
              The private guided visit is led by a well-informed host who emphasises the criticality of energy efficiency and renewable sources in today&apos;s day and age as they take visitors through the installations. A brief walk through the vast yet picturesque array of red-striped French oak barrels leads to a tasting room, where five of their signature wines are sampled: Sela, Roda, Roda I, Cirsion, and Roda I Blanco, along with two extra virgin olive oils, L&apos;Amo and Aubocassa.
            </p>
            <p>
              The Roda I Blanco is mainly developed from the Viura grape and presents a full-bodied structure with ripe, peachy aromas and oak integration. All the reds are primarily made from Tempranillo, but the differences between them are stark, driven almost entirely by the choice of grape parcels. Sela is the entry-level wine, made from young vines that bring acidity and freshness. Roda is the more approachable of the two flagship reds, with notes of red cherry, raspberry, earthy spice and tobacco. The palate keeps evolving, with the structure to age and the versatility to pair well across the Spanish table. Roda I is its darker, more intense sibling; notes of deep black fruit dominated by plum, underpinned by chocolate, mineral and balsamic notes, with firm tannins that need time to settle. It&apos;s a wine that approaches slowly, but undeniably makes its mark on the palate.
            </p>
            <p>
              The flagship Cirsion label is created from a selection of rare and unique grape parcels, presenting an exceptional level of fullness and flavour intensity, with deep floral and fruity aromas and considerable ageing potential. It is no surprise that the label has previously won titles of the best wine of Spain. A true celebration of the famous Rioja.
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              Stop 4: Laguardia
            </h2>
            <p>
              Visiting a winery (or two or three) at the Barrio de la Estación may be followed by a peaceful ten-minute drive into a quaint hilltop village called Laguardia. Surrounded by a medieval wall, this village is perched well above the valley, and presents a quiet and peaceful interlude from the round-the-clock activity of the large-scale wineries. Part of the Rioja Alavesa region, this area typically produces wines in a more elegant and restrained style compared to the more traditional Rioja Alta.
            </p>
            <p>
              What makes their story unique is the extensive network of tunnel cellars carved into the rock beneath the village, creating natural cooling chambers with automatic temperature and humidity adjustments. Casa Primicia is one such example: it&apos;s the oldest building in Laguardia, founded at the beginning of the 15th century when the Church collected first offerings and taxes from farmers in the form of harvest. A journey through the 15th-century stone wine presses takes the visitor through the fascinating history of the region, and walking through the complex network of underground cellars allows you to feel the temperature drop, the silence, and the age of the stone. All-in-all, a visit here is, simply, one of the most unique wine experiences in Europe.
            </p>
            <p>
              Their &lsquo;Julián Madrid&rsquo; label, named after the family patriarch, carries the weight of that history in the glass. A unique blend of Tempranillo and Cabernet Sauvignon, this is a rich and full-bodied wine. It shares the bold, oaky backbone of many classic Rioja wines, but brings in a subtle elegance via the Cabernet Sauvignon, with notes of black cherry, cassis, blackberry, and eucalyptus. Not to mention a finish that lingers well after the glass is empty.
            </p>
            <p>
              If time permits, a stay in Eguren Ugarte, a boutique hotel near the village, is a must-do experience. Having one&apos;s hotel room partially embedded into a functioning wine cellar and waking up to beautiful views of endless vineyards and valleys is a memory worth taking away, and an appropriate way to celebrate the conclusion of this journey through Spanish wine country.
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              Departure
            </h2>
            <p>
              The departure further north into the Basque country and towards the beautiful coastal city of San Sebastian presents a moment to reflect. One of the main takeaways from visiting these renowned wine regions of Spain is the sheer breadth, even within a single grape variety: three expressions of Tempranillo, three completely different stories about soil, altitude, history, and commitment. And most importantly, the realisation that each wine tells a story that no tasting note can fully capture, thereby allowing itself to claim a distinctive, intangible characteristic; an identity.
            </p>
          </div>

        </div>
      </section>

      {/* ── Back link ────────────────────────────────────────────── */}
      <section className="bg-cream pb-20 px-6">
        <div className="max-w-2xl mx-auto border-t border-gold/20 pt-8">
          <Link
            href="/stories-and-trends"
            className="font-montserrat text-[10px] tracking-widest uppercase text-burgundy hover:text-rose transition-colors"
          >
            ← Back to Stories &amp; Trends
          </Link>
        </div>
      </section>
    </>
  )
}
