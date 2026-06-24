import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "Greece's Emergence as a Winemaking Powerhouse — Cork To Table",
  description:
    'Over 300 indigenous grape varieties and 4,000 years of winemaking history. Greece is staging a quiet comeback — and the wider wine world is only just beginning to notice.',
}

export default function GreeceArticlePage() {
  return (
    <>
      {/* ── Article header ───────────────────────────────────────── */}
      <section className="bg-burgundy pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
            Wine Regions
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-cream leading-tight mb-6">
            Greece&apos;s Emergence as a Winemaking Powerhouse
          </h1>
          <div className="w-12 h-px bg-gold mb-6" />
          <p className="font-montserrat text-[11px] tracking-widest uppercase text-cream/60">
            November 2025
          </p>
        </div>
      </section>

      {/* ── Featured image ───────────────────────────────────────── */}
      <div className="relative h-[50vh] min-h-[320px]">
        <Image
          src="/images/photo-greece-hero.jpg"
          alt="Palivos Estate vineyard train, Greece"
          fill
          className="object-cover"
          priority
        />
        {/* TODO: replace with Palivou estate train image once available */}
      </div>

      {/* ── Body ─────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="font-montserrat text-sm text-charcoal leading-loose space-y-6">
            <p>
              There is a never-ending dialogue about the evolving standards of various wine regions around the world. With the addition of colloquial terms such as &lsquo;old world&rsquo; and &lsquo;new world&rsquo;, a potential for endless debate amongst professionals, aficionados, and enthusiasts alike. The issue lies in the definition, or rather the lack of a clear one. The terms are inherently associated with geographical regions. A fair chunk of winemakers may define &lsquo;old world&rsquo; as the majority of western Europe linked with planting of vines under the ancient Roman Empire. Subsequently, any other region ends up getting classified as &lsquo;new world&rsquo;. Differentiation between the two terms can also be based on the styles associated with the wines that emerge from these regions, where wines with more elegance and restraint, higher acidity, and more earthy or mineral notes (think Burgundy) are being compared to full-bodied, high alcohol wines with big fruity flavours (think Napa Cabernet or Barossa Shiraz). Logically, this has a lot to do with differences in terroir, and hence forms a direct link with the geography.
            </p>
            <p>
              The fuzzier the definitions get, the less cut and dried an approach to such a discussion can be. A geographical region, such as the ones mentioned previously, is hardly sufficient by itself to make a concrete conclusion about the styles of wine that emerge from it. Other factors such as microclimates induced by altitude, slopes, water bodies, or even different winemaking techniques, can play a key role.
            </p>
            <p>
              A case in point here is Greece. Situated in the south-east corner of the Mediterranean belt, the lines start to blur when classifying this region. Many an enthusiast might be tempted to even call it &lsquo;new world&rsquo;, keeping in mind the traditional parameters of geography and taste. The irony here lies in the fact that winemaking in Greece dates to around 4,000 years ago. The apprehension at presenting a clear classification to this region is well justified, with over 300 indigenous grape varieties, and drastic changes in climate from one region to another due to mountains, sea breezes, and wet conditions.
            </p>
            <p>
              Once classified as an unremarkable wine region, Greece marked the entry of a wave of passionate, young oenologists in the 1980s. Along with evolving preferences and a desire for novelty amongst consumers of wine around the world, this led to a revival of wine production in the country, which now produces quality that could potentially be paralleled with the best amongst either of the &lsquo;worlds&rsquo;.
            </p>
            <p>
              Assyrtiko, an indigenous white grape grown on the volcanic soils of the tiny yet extremely popular island of Santorini, is well known for its refined bone-dry wines with crisp acidity and minerality, and a kick of citrus that almost takes you by surprise. What is no surprise, however, is its very convenient pairing with the local seafood, which is simply nature&apos;s way of working things out.
            </p>
            <p>
              By no means is this the only style of white wine emerging from the country, with other varieties such as Moschofilero, known for its floral and aromatic characteristics, and Malagousia, known for producing a full-bodied white that is almost comparable to the Viognier grape, leaving an indelible mark on the palette and the ever-so-curious mind of the wine drinker.
            </p>
            <p>
              The contrast in styles remains when we switch to red wines. At times, we do not even need to venture outside the domain of a single region or grape variety. A key indigenous black grape variety grown in the country, Agiorgitiko, is known for its versatility, and can produce a wide range of styles: from fresh rosés, to light-bodied fruity reds, to full-bodied and complex reds with prominent berry and spice flavour notes, and massive ageing potential. As such, to compare the wines on a singular scale with a Bordeaux blend or a Chianti Classico would do the grape a fair injustice. The large red wine-producing region of Nemea is where Agiorgitiko is most common, and it certainly holds its own, as wines from here attract attention in the international export market, as well as with local visitors.
            </p>
            <p>
              Another important local variety grows famously in the serene mountainous region of Naoussa in northern Greece: Xinomavro. Informally coined as &lsquo;The Barolo of Greece&rsquo;, the grape shares its characteristic pale colour, high acidity, and firm tannin structure with its Italian counterpart, Nebbiolo. Just like Agiorgitiko, this northern variety also produces a range of styles, ranging from bold and robust, to restrained and elegant.
            </p>
            <p>
              And so we witness the steady rebirth of one of Europe&apos;s almost forgotten viticultural institutions. An ancient society that celebrated a god solely dedicated to wine, faded into obscurity with its separation from the political and economic uprising of its western counterparts, now makes a late comeback in the context of winemaking history. A country with vineyard regions scattered across a range of terroirs and indigenous grape varieties so eclectic in nature, that it&apos;s practically impossible to isolate a bottle and label it as a &lsquo;typical wine of that region&rsquo;. To that extent, the jury may remain out on &lsquo;old world&rsquo; vs &lsquo;new world&rsquo;, but it&apos;s safe to say that Greece very much stays relevant to the larger wine world.
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
