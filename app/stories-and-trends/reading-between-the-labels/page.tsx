import Image from 'next/image'
import Link from 'next/link'
import SubscribeBlock from '@/components/SubscribeBlock'
import VisualEmbed from '@/components/VisualEmbed'
import { VISUALS_BASE } from '@/content/visuals'
import { getArticle } from '@/content/articles'

export const metadata = {
  title: 'Reading Between the Labels | Cork To Table',
  // The Google description is the subtitle shown under the title on the page.
  description: getArticle('reading-between-the-labels')?.subtitle,
}

function DataCallout({ stat, context }: { stat: string; context: string }) {
  return (
    <div className="my-8 flex gap-6 border-l-4 border-gold pl-6 py-2">
      <p className="font-cormorant text-4xl font-light text-burgundy shrink-0">{stat}</p>
      <p className="font-montserrat text-xs text-mid leading-relaxed self-center">{context}</p>
    </div>
  )
}

function Quote({ text, source }: { text: string; source: string }) {
  return (
    <blockquote className="my-8 bg-cream/60 border border-gold/20 px-6 py-5">
      <p className="font-cormorant text-xl italic text-burgundy leading-relaxed mb-2">
        &ldquo;{text}&rdquo;
      </p>
      <p className="font-montserrat text-[10px] tracking-widest uppercase text-mid">{source}</p>
    </blockquote>
  )
}

export default function ReadingBetweenTheLabelsPage() {
  const substackUrl = getArticle('reading-between-the-labels')?.substackUrl

  return (
    <>
      {/* ── Article header ───────────────────────────────────────── */}
      <section className="bg-burgundy pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
            Research · Substack
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-cream leading-tight mb-3">
            Reading Between the Labels
          </h1>
          <p className="font-cormorant text-2xl italic text-cream/70 mb-6">
            What the Burgundy name adds to the price of a Pinot Noir, tested against other regions
          </p>
          <div className="w-12 h-px bg-gold mb-6" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="font-montserrat text-[11px] tracking-widest uppercase text-cream/60">
              November 2026
            </p>
            {substackUrl ? (
              <a
                href={substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-[10px] tracking-widest uppercase text-gold border-b border-gold/50 pb-0.5 hover:border-gold transition-colors w-fit"
              >
                Read on Substack →
              </a>
            ) : (
              <span className="font-montserrat text-[10px] tracking-widest uppercase text-cream/30">
                Substack · Coming Soon
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── Featured image ───────────────────────────────────────── */}
      <div className="relative h-[50vh] min-h-[320px]">
        <Image
          src="/images/photo-short01-cover.jpg"
          alt="Close-up of red Burgundy bottles lined up on a wine shop shelf, labels facing out, the nearest reading Côte de Beaune."
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* ── Body ─────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="font-montserrat text-sm text-charcoal leading-loose space-y-6">

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              The villages that renamed themselves
            </h2>

            <p>
              Bourgogne, or Burgundy in English, is always an intriguing wine region for many. This renowned region in east-central France can hardly be considered straightforward for any wine enthusiast. From one village or vineyard to another, the sheer range in styles and quality levels leaves no stone unturned.
            </p>

            <p>
              But more than that, it’s also known for its ability to command an almost performatively premium price, depending on the label. The reason for choosing the word performatively is the entire basis for this piece: I simply wanted to test the foundation behind it.
            </p>

            <p>
              So let’s begin with a story. In 1847 Gevrey petitioned the king to add the name of its most famous vineyard, Chambertin. Chambolle took Musigny in 1882. Morey took Saint-Denis. Around a dozen Côte d’Or villages did the same. The hyphenated names known to many are hyphenated for a reason. The name premium was built deliberately, long ago.
            </p>

            <figure className="my-10">
              <Image
                src="/images/s1_01_photo_chambertin.jpg"
                alt="A maroon sign reading “Ici commence le Chambertin” stands at the edge of rows of young vines, with a wooded hillside behind, in Gevrey-Chambertin, Burgundy."
                width={1840}
                height={1222}
                sizes="(min-width: 768px) 672px, 100vw"
                className="w-full h-auto border border-gold/20"
              />
              <figcaption className="font-montserrat text-[10px] tracking-wide text-mid/70 mt-2">
                Where the Chambertin vineyard begins. Photo: Michal Osmenda (<a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-burgundy transition-colors">CC BY 2.0</a>).
              </figcaption>
            </figure>

            <p>
              I’m not suggesting deception by any means. This was a strictly commercial (and somewhat legal) decision.
            </p>

            <p>
              Buyers started paying for a name instead of a place or a grape variety; a piece of text printed on parchment. We still see a strong influence of this type today with the later AOC (Appellation d’Origine Contrôlée) system. But I’m not going to go down that rabbit hole right now.
            </p>

            <p>
              The question is, what are these names worth today?
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              What the name costs today
            </h2>

            <p>
              Burgundy labels climb four rungs: plain Bourgogne, a village name, premier cru (a ranked vineyard) and grand cru (the very top vineyards).
            </p>

            <p>
              Of the 122 Burgundy village-and-above wines I analysed that were rated 4.0 or better out of 5 (Vivino data), only 4 cost under €50, or 3.3% (all prices in this piece are in euros, converted from US dollars where needed). For Willamette Valley Pinot Noirs this is 79%; for Beaujolais crus (its ten top villages), 80%.
            </p>

            <p>
              At the same rating level, Burgundy village-and-above wines typically cost about 3.4x a Willamette Pinot Noir. While this seems like a massive difference, we’ve all probably seen it: place the two bottles on one shelf and the tags are unlikely to indicate otherwise.
            </p>

            <p>
              When it comes to Pinot Noirs known for their quality, I considered a third region: Central Otago, New Zealand. Against these wines the multiple narrows to 2.2x, and 46% of its well-rated wines sit under €50. The point remains though, and I would argue it is more significant when I factor that the pricing data is US-based, where Willamette Valley wines are domestically produced, while Burgundy and Central Otago are imported.
            </p>

            <VisualEmbed
              src={`${VISUALS_BASE}/visual_name_premium.html`}
              title="Where the name premium shows up"
              description={"Bar chart of Pinot Noirs rated 4.0 or higher out of 5 on Vivino, showing the share priced under €50: Beaujolais cru 80%, Willamette Valley 79%, Central Otago 46%, Bourgogne 44%, Burgundy village and above 3.3%. Bar chart of the median price of Pinot Noirs rated 4.0 to 4.2 on Vivino: Willamette Valley €31, Beaujolais cru €40, Central Otago €48, Bourgogne €53, Burgundy village and above €107."}
            />

            <p>
              Of course, it’s easy to argue that a higher price point might simply buy a better wine on average. So naturally, I had to test this too.
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              Is it the wine, or the environment around it?
            </h2>

            <p>
              To test whether the premium buys something in the glass, I tried a few things. For starters, I noticed premiums increasing with the age of the wine. But in a test across 31 Burgundies of every vintage from 2015 to 2024, older vintages of the same wine rated no higher; in fact, older beat younger in only 8 of 31 wines.
            </p>

            <VisualEmbed
              src={`${VISUALS_BASE}/visual_older_vintages.html`}
              title="Older vintages do not rate higher"
              description={"Dot plot of 31 Burgundy wines comparing the Vivino rating of their 2015 to 2017 vintages with their 2020 to 2023 vintages. Most dots sit at or below zero: the older vintages rated higher in only 8 of 31 wines."}
            />

            <p>
              I’ll cross-examine my own finding by saying that many young Burgundy wines, especially plain Bourgogne, are often considered crowd-pleasers, which would explain their higher consumer ratings. This led me to seek a more professional lens.
            </p>

            <p>
              The findings go both ways. The average critic score on Wine-Searcher climbs from about 88 for Bourgogne to 91 for village, 93 for premier cru and 94 for grand cru. And at the 2026 Decanter World Wine Awards, Burgundy won more Best in Show medals than any other region, its best result to date.
            </p>

            <p>
              But some of these findings can work in favour of other regions: a 94-point Burgundy grand cru typically costs about €226, against €89 for Felton Road’s 94-point Block 5 from Central Otago, and €65 for Domaine Drouhin Oregon’s 94-point Laurène from the Willamette Valley.
            </p>

            <DataCallout
              stat="€226 vs €65"
              context={"The price of a 94-point critic score: a typical Burgundy grand cru, against Domaine Drouhin Oregon’s Laurène from the Willamette Valley."}
            />

            <p>
              There’s also an interesting notion here, which is the direct impact of price on one’s perception of the wine. It’s a bit of psychology I’d touched upon in a previous post. Price itself is an environmental factor that causes a wine to ‘self-reinforce’ its premiumness.
            </p>

            <Quote text={"Although \"quality\" certainly increases, at some point the marginal increase gets smaller and smaller - while the price function seems to do the opposite. […]"} source="r/wine · ▲ 21" />

            <p>
              So it is safe to say that the glass does not entirely explain the gap. Where does the money sit? We now come back to the point made at the beginning: the name.
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              Every rung of the label
            </h2>

            <p>
              Value sits right on the label itself, rung by rung. Visualising the anatomy of Burgundy’s label system helps us understand how the price climbs with each word of classification.
            </p>

            <VisualEmbed
              src={`${VISUALS_BASE}/visual_price_ladder.html`}
              title="Every rung of the label"
              description={"Chart of Burgundy prices by label rung, 2020 and 2023 vintages, with median prices of €32 for Bourgogne, €71 for village, €128 for premier cru and €226 for grand cru. Below, single producers’ price ranges from entry wine to top wine: Burgundy €25 to €443, Oregon €54 to €65, Central Otago €39 to €89, Germany €28 to €166."}
            />

            <p>
              From a median price of €32 to €226, all from a few words on the label. By no means am I trying to be cynical and imply that there’s not much difference in quality from entry level to top bottle. Nonetheless, the jump is stunning when compared with other regions. Germany comes closest, but then again its top-estate association, the VDP, describes its classification as “analogous to the Burgundian classification with Premier Crus and Grands Crus”.
            </p>

            <Quote text={"At a certain point, you have to realize burgundy has more in common with baseball cards than it does with beer for example. The value of these bottles isn’t really based on their perceived quality so much as their rarity and collectability. […]"} source="r/wine · ▲ 96" />

            <p>
              Seeing an obvious jump in price from label to label, I also thought I’d check the trend over time.
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              What’s driving Burgundian price inflation?
            </h2>

            <p>
              Claiming that time has changed the prices of Burgundy wines would be a fairly educated guess.
            </p>

            <p>
              There are two elements to this:
            </p>

            <ul className="list-disc list-outside ml-4 space-y-2">
              <li>The first compares the same wine’s release price today against its release price years ago. Here, market forces and other external factors are in play.</li>
              <li>The second is the ageing of a premium bottle. Here, we’re determining the premium the market pays for an aged wine.</li>
            </ul>

            <p>
              If we compare a premium Burgundy bought at release against what the exact same bottle costs now, we are combining the two price elements. A sample of Burgundy premier and grand cru wines typically sell at 2.2x their release price over a span of 15 to 30 years, <strong>after adjusting for general economic inflation.</strong>
            </p>

            <p>
              But here’s where it gets interesting. The data shows that most of this price surge is attributed to the first element, with a 1.9x (inflation-adjusted) increase in value of premium Burgundies without bringing age into play, and a measly 1.15x increase attributed to ageing.
            </p>

            <VisualEmbed
              src={`${VISUALS_BASE}/visual_vintage_multiple.html`}
              title="Time in a bottle"
              description={"Illustration of a wine bottle filled in three bands, showing how the price of an older Burgundy premier or grand cru builds up: release prices climbing about 1.9x after inflation, and age adding about 1.15x, for about 2.2x the original release price."}
            />

            <p>
              Is the jump in value on a premium Burgundy over time down more to market factors than the wine’s biology? If so, a few theories could explain it:
            </p>

            <ul className="list-disc list-outside ml-4 space-y-2">
              <li><strong>Social media and status signalling:</strong> Burgundy labels have become a visible status symbol online, widening the pool of buyers who want the name.</li>
              <li><strong>Improved market access:</strong> Online search and global merchants let any buyer anywhere chase an allocation that once went to a few local clients.</li>
              <li><strong>New demand:</strong> Hong Kong halved its wine duty in 2007 and abolished it in 2008, then became one of the world’s largest wine auction centres.</li>
              <li><strong>Wine as an asset:</strong> Top Burgundy trades on Liv-ex, a fine wine trading exchange, like a commodity. Its index of top Burgundy rose 140% from 2010 to 2020, against +20% for Bordeaux.</li>
              <li><strong>Land and succession:</strong> Vineyard land has climbed even faster than the wine it grows. A hectare of Côte d’Or grand cru cost about €1.7 million in 2000 and about €9 million in 2023, roughly 3.6x more (after adjusting for inflation).</li>
            </ul>

            <p>
              So the theory that age only earns part of the price premium, and the market around the name much of the rest, now has a solid foundation. But none of this settles whether the best of it is worth paying for.
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              The value proposition
            </h2>

            <p>
              When we factor in what consumers think, the value placed on the Burgundy name seems to be justified, to a limit. The crème de la crème can earn every cent.
            </p>

            <Quote text={"If you were to buy any random Burgundy from a reputable shop like K&L for $60-100, it'd likely be very good. […]"} source="r/wine · ▲ 18" />

            <Quote text={"Most of the time they are (IMO) overpriced. Occasionally they are transcendent, singular, worth every penny and then some."} source="r/wine · ▲ 28" />

            <p>
              When judged blind by professionals, premium Burgundy wines earn their place at the very top of Pinot Noir. At the 2025 Decanter World Wine Awards, 10 Pinot Noirs reached the top score of 97, and 4 were Burgundy, more than any other region.
            </p>

            <p>
              But pricing is not linear, and price ranges are wide. At that same Decanter score of 97, the four Burgundies ran from about €60 for a Pommard premier cru to about €680 for a Clos de la Roche grand cru. One can make an argument for Burgundy’s undeniable quality, but the prestige label commands a certain unpredictability in pricing.
            </p>

            <DataCallout
              stat="€60 to €680"
              context={"The price range of the four Burgundies that scored 97 at the 2025 Decanter World Wine Awards, from a Pommard premier cru to a Clos de la Roche grand cru."}
            />

            <p>
              To echo the consumer voice, finding that elusive €60 bottle is the hard part. But as many would claim, ‘producer over village’ is always the best guide.
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              Marsannay premier cru: a name in the making?
            </h2>

            <p>
              The Burgundy story doesn’t end here. The process that once built these premiums is still running. Let’s look at Marsannay, a village at the northern end of the Côte de Nuits that’s relatively new to the party. It only carried the plain Bourgogne label until 1987. Growers formally applied for premier cru in 2012. France’s appellation authority (INAO) approved the application in June 2026, and the public consultation on the vineyard map closed on 15 September 2026. No decree has been published yet.
            </p>

            <figure className="my-10">
              <Image
                src="/images/s1_12_photo_marsannay.jpg"
                alt="Rows of vines run down from a dry-stone wall towards the village of Marsannay-la-Côte and its church tower, at the northern end of Burgundy’s Côte de Nuits."
                width={1024}
                height={768}
                sizes="(min-width: 768px) 672px, 100vw"
                className="w-full h-auto border border-gold/20"
              />
              <figcaption className="font-montserrat text-[10px] tracking-wide text-mid/70 mt-2">
                Vineyards above Marsannay-la-Côte. Photo: Arnaud 25 (<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-burgundy transition-colors">CC BY-SA 4.0</a>).
              </figcaption>
            </figure>

            <p>
              Even before any decree, these vineyards sell at a premium. Across our sample of producers, a wine labelled with its climat (a named vineyard plot) costs a median 22% more than the same grower’s village-labelled Marsannay. Some of that may simply reflect better sites. The more telling moment comes after the decree: if prices jump again while the wine stays the same, we may be watching the next name premium being made in Burgundy.
            </p>

            {/* Sources footnote */}
            <p className="mt-12 pt-8 border-t border-gold/20 font-montserrat text-xs italic text-mid leading-relaxed">
              Sources: Wine rating and price data obtained from Vivino, US market, October 2026, converted to euros (analysis conducted for this piece). Critic score and price data obtained from Wine-Searcher, October 2026. Blind competition results obtained from the Decanter World Wine Awards, 2025 and 2026, with 2025 prices as Wine-Searcher average retail reported by Forbes, June 2025. Release prices obtained from the Guide Hachette des Vins, editions 1999 to 2026, current values from iDealwine, October 2026, and inflation data from INSEE. Classification wording from the VDP (Verband Deutscher Prädikatsweingüter). Hong Kong wine duty from the South China Morning Post, 2018. Liv-ex Burgundy index from The Drinks Business, August 2026. Vineyard land prices obtained from Safer, reported by Decanter, May 2026, and from Agreste. Marsannay premier cru status from INAO, 2026. Marsannay prices obtained from Goedhuis, 2023 vintage en primeur offer. Wine community discussion obtained from Reddit r/wine, 2022 to 2025.
            </p>

          </div>
        </div>
      </section>

      {/* ── Subscribe ─────────────────────────────────────────────── */}
      <section className="bg-cream pt-4 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <SubscribeBlock />
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
