import Link from 'next/link'
import VisualEmbed from '@/components/VisualEmbed'
import { VISUALS_BASE } from '@/content/visuals'
import { getArticle } from '@/content/articles'

export const metadata = {
  title: 'The Reward for Curiosity — Cork To Table',
  description:
    'The wine palate grows over time, and better wine doesn\'t have to cost more. A data-led look at how palates evolve, why price is a poor guide, and why curiosity is the most underrated quality in a wine drinker.',
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

export default function TheRewardForCuriosityPage() {
  const substackUrl = getArticle('the-reward-for-curiosity')?.substackUrl

  return (
    <>
      {/* ── Article header ───────────────────────────────────────── */}
      <section className="bg-burgundy pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
            Research · Substack
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-cream leading-tight mb-3">
            The Reward for Curiosity
          </h1>
          <p className="font-cormorant text-2xl italic text-cream/70 mb-6">
            The wine palate grows over time, and better wine doesn&apos;t have to cost more
          </p>
          <div className="w-12 h-px bg-gold mb-6" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="font-montserrat text-[11px] tracking-widest uppercase text-cream/60">
              August 2026
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

      {/* ── Body ─────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="font-montserrat text-sm text-charcoal leading-loose space-y-6">

            <p>
              There is a quiet assumption that evolving preferences in an individual over time means wanting rarer, pricier, and more intimidating bottles of wine. In practice the opposite tends to happen. The more people taste over time, the more nuanced their palates and preferences become, and the less the price tag matters. Someone may seek more tannins, someone may be more at ease with a lighter body, another may show a clear preference for spicy notes, and so on. Whether it&apos;s a fancy label that&apos;s known all across the globe or a wine that simply presents a unique story about the winemaker and their journey, interest can be found in both.
            </p>
            <p>
              So why do many wine drinkers still feel unsure of venturing beyond the territory of what is already known? One could argue that the sheer variety in absolute numbers is daunting, but exposure isn&apos;t likely to be towards more than a few bottles in a single moment or occasion. This is where nerves come into play: &ldquo;I&apos;m not sure, I&apos;ve never heard of it before, I&apos;m worried I may pick the &lsquo;wrong&rsquo; wine in front of others.&rdquo; Here&apos;s the truth: each individual&apos;s palate evolves over time, but this evolution is dictated by choices, and choices are led by psychology. Sometimes, psychology can be a barrier. But can this be changed? Read on if you&apos;re curious.
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              How a Wine Palate Changes Over Time
            </h2>
            <p>
              There&apos;s no one set of rules when tasting wine: preference for tannins or flavour linked to oak barrels can go both ways, as can the desire for fruity character. So we can&apos;t really classify the journey of a palate as a graduation to &lsquo;better&rsquo; taste. It&apos;s simply a journey, and every palate is unique. For some, the journey may not even take place. Someone may reach a ceiling at the mildest hint of bitterness and stick to sweeter wines, and that doesn&apos;t make them any less of a wine drinker.
            </p>

            <DataCallout
              stat="69%"
              context="of wine consumers say their preferences have changed since they started drinking.¹"
            />

            <p>
              However, consumer voices echo a general pattern. This can effectively be mapped into a detailed four-phase journey. Many migrate initially towards drier styles, meaning wines with very negligible levels of sweetness, along with lighter and more elegant ones. Semi-sweet whites, Prosecco and rosés give way to dry, fuller-bodied whites and softer reds, before approaching red wines that are bolder and pack a punch in flavour. The final stage tends to dial down on the punch, but makes up for it with subtle aromas and structural nuance (think dry Rieslings, oak-aged Riojas, and a region many consider the final boss of nuance: Burgundy).
            </p>

            <DataCallout
              stat="~75%"
              context="of drinkers shift from sweeter wines toward drier ones over time. The exceptions tend to be the most bitter-sensitive tasters, whose genetics set a natural ceiling.²"
            />

            <Quote text="My tastes gradually changed over the years. […] Now it's more about balance and finesse rather than power […]. Losing my tolerance for tannins. I see it as a journey, not an age thing." source="r/wine · ▲ 4" />
            <Quote text="Starting out, I had much more tolerance for later-picked, oaky reds. These days I like a fresher, lighter-bodied, underoaked style. I believe that is the natural progression for most wine lovers." source="r/wine · ▲ 13" />
            <Quote text="If you drink enough wine, for long enough, you'll end up in Burgundy. […] Usual path starts with sweet and jammy reds, runs to tannin (structure), and ultimately to Burgundian nuance." source="r/wine · ▲ 2" />

            <p>
              Interestingly, the time this journey takes can differ for each person. Sometimes it takes weeks, sometimes much longer. The destination seems to be similar for most, and it&apos;s one that showcases &lsquo;maturity&rsquo; (and by that I obviously mean maturity of the drink and not the drinker).
            </p>

            <VisualEmbed
              src={`${VISUALS_BASE}/visual_palate_arc.html`}
              title="The palate arc: how wine preferences evolve over time"
            />

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              Better Wine Doesn&apos;t Mean a Higher Price Tag
            </h2>
            <p>
              Consider a consumer rating study. All information, including the label and price, is available to the sample, and the findings show wine ratings do in fact climb along with the price, from the consumer&apos;s point of view (we are considering non-experts and non-professionals in this research).
            </p>

            <DataCallout
              stat="+0.40"
              context="correlation between price and rating when the price is visible. Across 535 red and white wines, the average rating climbs from 3.7 to 4.4 on a five-point scale, a lift of roughly 14 percentage points.³"
            />

            <p>
              But here&apos;s the psychological twist: when we take this information away, and convert the study into blind tastings, ratings data now shows no significant correlation between the price of a wine and its perceived quality.
            </p>

            <DataCallout
              stat="≈ 0"
              context="the same relationship once the price is hidden. In more than 6,000 blind tastings, non-experts rated pricier wines no higher, and slightly lower in some cases.⁴"
            />

            <p>
              There&apos;s a perfectly logical explanation for this. When one is not oblivious to what they are tasting, it&apos;s only natural to subconsciously factor the price of the bottle into one&apos;s perception. It is the same instinct that makes a hotel room feel more luxurious once you have seen the rate. Of course, it is important to note that many expensive bottles of wine can be good enough to command their price point. This is merely to suggest that a pricing bias can come into play when making an assessment. Tell me a bottle is expensive before I pour it and I will seek out reasons to agree with the price.
            </p>
            <p>
              Strip that information away and the link between price and perception softens. Effectively this creates a &lsquo;price halo&rsquo;: the gap between what a wine scores when you can see the price and what it scores when you cannot.
            </p>

            <DataCallout
              stat="9%"
              context="of drinkers are confident they could tell a $10 bottle from a $100 one.⁵"
            />

            <Quote text="For me, it is just a cost issue. I can't justify paying $13–14 for a single pour and $100+ for a bottle that I know costs $20. I'd rather just drink at home at those prices." source="r/wine · ▲ 130" />
            <Quote text="Suckling is the worst. He is literally charging people for points. In any other industry this would be a scam." source="r/wine · ▲ 171" />

            <p className="font-montserrat text-xs text-mid/70 italic">
              Note: the ratings on which this inference is based are subjective preference judgements, not standardised quality scores.
            </p>

            <VisualEmbed
              src={`${VISUALS_BASE}/visual_price_quality.html`}
              title="Price vs quality: what the data shows"
            />

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              Why Wine Feels Intimidating for Beginners
            </h2>
            <p>
              It&apos;s rarely the wine itself that keeps people from exploring and evolving in their preferences. It&apos;s the worry about going against the rules: aromas, pairings, finish, and all the jargon that the wine world adopts in between. Three in four wine consumers find these rules intimidating. It comes from the sense that such nuance is only for experts or professionals.
            </p>

            <DataCallout
              stat="75%"
              context="of wine consumers find the rules of wine intimidating.⁶"
            />

            <p>
              Here&apos;s a counterargument: there are so many layers of nuance in music, and we all know this. From genre choices to stylistic choices, to individual song preferences. And yet it is broadly acceptable to express a preference for any style or artist without having to share any prior knowledge about that genre or the nature of the music. As trivial as this might seem, the analogy can work for wine. Technical knowledge does not need to get in the way of curiosity, discovery, and overall enjoyment of a particular region, style, or bottle. And yet barriers linked to confidence, knowledge, and a feeling of being overwhelmed seem to be quite prominent, sometimes more than price or exclusivity.
            </p>

            <Quote text="Pick one and start drinking bruh. You plant a forest one tree at a time, enjoy the journey." source="r/wine · ▲ 155" />

            <p>
              However, there is hope. It comes with a rise in desire to learn and experiment. The digital age, where knowledge is far more easily accessible, has played a role. Human search behaviour demonstrates a journey, and it maps as a ladder with three rungs. The first is about permission: how to drink wine correctly, wine for beginners. The second is about vocabulary: what does dry wine mean, how to taste wine like a sommelier. The third is about origin: what grape is Barolo, where is Rioja wine from, the wine regions of France.
            </p>

            <DataCallout
              stat="22,800"
              context="monthly searches on the origin rung, against 2,800 on the entry rung. Origin curiosity draws by far the most search interest of the three, and 43% of those searches name a specific region or grape.⁷"
            />

            <p>
              The way through goes beyond technical knowledge and concentrates on the origin of the wine. This rung of curiosity is slowly shaping a new era of storytelling in the wine world.
            </p>

            <p className="font-montserrat text-xs text-mid/70 italic">
              A quick note: this analysis doesn&apos;t imply an absolute truth. There are always many cases where the barrier is simply down to affordability or taste, and the argument here does not intend to take away from their relevance.
            </p>

            <VisualEmbed
              src={`${VISUALS_BASE}/visual_curiosity_ladder.html`}
              title="The curiosity ladder: how wine search behaviour maps a learning journey"
            />

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              Story Is the New Status
            </h2>
            <p>
              Nowadays, even experienced drinkers are shown to value story as much as, or even more than, other factors such as price, label, or reviews. At the top of the market, provenance and storytelling by a producer are creating a pull, a signal of sophistication that can match other parameters. Labels are being recognised for their individual practices and backstories, not just for the prestige associated with a certain region.
            </p>
            <p>
              Community discussion shows drinkers endorsing story-led signals, meaning the history of the producer, the terroir, or the way a wine was farmed, over transactional ones like price, score and label prestige, by roughly two to one.
            </p>

            <DataCallout
              stat="Two-thirds"
              context="Quality-signal language in community discussion is story-led. Only a small share of mentions defend price, label, or score as a quality guide.⁸"
            />

            <p>
              The trade press reads it the same way. The market is tilting toward lighter, terroir-driven wines, and younger drinkers are choosing value over prestige.⁹
            </p>

            <p>
              In recent times, I&apos;ve noticed that the bottles that capture the attention of a table are rarely the most expensive ones on it. The clearest evidence sits in the regions gaining ground on story alone. English wine has built a reputation on warming vintages, careful viticulture and familiar grape varieties, with sparkling wine as a Champagne alternative leading the way. Georgian wine is being positioned as the 8,000-year-old cradle of winemaking, where indigenous grapes have grown for millennia and traditional methods are still in use. Neither had prestige to trade on. Both had a story. And in long-established regions like Bordeaux and Rioja, it is the new generation of producers with unusual backgrounds who are drawing attention now.
            </p>

            <Quote text="Those moments where one can connect with what a winemaker is doing and really tap into that energy are totally electric." source="r/wine · ▲ 67" />
            <Quote text="Natural wine isn't about rejecting tradition, it's about connecting with it. Farming responsibly, letting the grape and terroir speak for themselves." source="r/wine · ▲ 97" />

            <p>
              This emotion and narrative are pure intangible value, and can shape perception almost as much as the liquid in the bottle. The levels of storytelling we are exposed to reshape what nuance means. Most significantly, we can observe that a genuine story doesn&apos;t always have to correlate perfectly with price.
            </p>

            <VisualEmbed
              src={`${VISUALS_BASE}/visual_story_over_status.html`}
              title="Story is the new status: how narrative signals quality in wine"
            />

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              The Reward for Curiosity
            </h2>
            <p>
              We can conclude that the palate develops a sense of nuance with experience, and that this is achievable independent of price. Does this reflect in what consumers actually purchase? Absolutely. Real world data validates this. Most recreational wine drinkers spend in the &lsquo;value range&rsquo;, and less than 3 out of 10 people regularly purchase wine priced at over $30 per bottle. Professionals and critics do not necessarily associate quality with top-end prices either, with only 14 wines out of a top-100 critic list breaking the $100 mark.
            </p>

            <DataCallout
              stat="54%"
              context="Wine drinkers regularly buy bottles under $15. Fewer than 3 in 10 regularly buy at $30 or above.¹⁰"
            />
            <DataCallout
              stat="34 of 100"
              context="wines in a leading 2025 Top 100 list cost under $30. The list averages $58 at a 93-point score, and only 14 wines break $100.¹¹"
            />

            <p>
              A 2025 best buys list from a well-known publication makes the case in a single number: those wines average about $4 a glass, and almost all of them score 90 or above.¹²
            </p>
            <p>
              The deeper point here is that a lack of curiosity and subsequent discovery stands to be a much bigger threat than price to an individual&apos;s wine experience and journey. Amongst experienced drinkers, price only scratches the surface of the decision making process. What keeps casual drinkers and critics continuously exploring is the chase for a story behind the glass and the thrill of discovery. Everyone wants that &lsquo;Aha!&rsquo; moment where they read a story or description on the back of a label or in an online review, and instantly make that connection in their head when they taste the wine themselves. The connection could be anything: an aroma, an image, an emotion. But suddenly one feels experienced with this bottle, and next time doesn&apos;t mind trying another, and another.
            </p>

            <Quote text="Yeah, those wines are great, but mostly they've provided me with the context to know what good wine can be. […] Inexpensive wine can be very exciting and rewarding, you just gotta do a little leg work." source="r/wine, 17 years in the wine industry · ▲ 281" />
            <Quote text="Wine for me has become a means of understanding agricultural practice and the relationships between farmers and the earth they tend to." source="r/wine · ▲ 67" />

            <p>
              This sits at the heart of how a palate evolves. This curiosity is capable of carrying someone who may consider themselves relatively inexperienced with wine towards the next frontier (or the realisation that they&apos;ve already hit their sweet spot). And best of all, curiosity doesn&apos;t demand a big budget.
            </p>

            <VisualEmbed
              src={`${VISUALS_BASE}/visual_where_value_lives.html`}
              title="Where value lives: consumers and critics see the bigger picture"
            />

            <p>
              So the next time you&apos;re worried that you may not &lsquo;know enough&rsquo; to pick the right bottle or to appreciate a style you&apos;re not familiar with, it&apos;s very simple: be curious. If you find yourself gravitating towards the story behind a label, or can&apos;t wait to discover something fascinating about the region or winery, you&apos;re already climbing the ladder. Time to get the corkscrew!
            </p>

            {/* References */}
            <div className="mt-12 pt-8 border-t border-gold/20">
              <p className="font-montserrat text-[10px] tracking-widest uppercase text-mid mb-4">References</p>
              <ol className="space-y-2 font-montserrat text-xs text-mid leading-relaxed list-decimal list-inside">
                <li>Thach, L. & Bus 305W Researchers (2018). Wine Palate Life Cycle study, Sonoma State University. <em>Wine Business Monthly</em>, April 2018. n=422.</li>
                <li>Risso, D. et al. (2017). Genetic variation in TAS2R38 and its influence on bitter taste perception. <em>Scientific Reports</em>. See also: Brito Nunes, C. et al. (2025). <em>European Journal of Nutrition</em>, UK Biobank.</li>
                <li>Modwel, R. (2026). Original analysis of price and consumer rating data for 535 red and white wines, US market, July 2026.</li>
                <li>Goldstein, R. et al. (2008). Do more expensive wines taste better? Evidence from a large sample of blind tastings. <em>Journal of Wine Economics</em>, 3(1), 1–9.</li>
                <li>YouGov (2024). Wine price perception survey, March 2024.</li>
                <li>OnePoll for Woodbridge Wines (2022). Brand-commissioned online survey. Corroborated by Wine Market Council (2025), barriers to wine purchasing study.</li>
                <li>Modwel, R. (2026). Original analysis of 1,626 Google autocomplete suggestions and Google Keyword Planner monthly search volume, July 2026. Global figures.</li>
                <li>Modwel, R. (2026). Original keyword and sentiment analysis of 4,872 words of wine community discussion, June 2026.</li>
                <li>SevenFifty Daily (2026). Market trend reporting on elegance and value.</li>
                <li>Wine Opinions (2026). US consumer survey of 1,351 wine drinkers, reported by <em>The Drinks Business</em>, April 2026.</li>
                <li>Wine Spectator (2025). Top 100 Wines of 2025.</li>
                <li>Wine Enthusiast (2025). Best Buys 2025, November 2025.</li>
              </ol>
              <p className="font-montserrat text-[10px] text-mid/60 mt-4">
                All community quotes attributed generically as &lsquo;r/wine&rsquo;. Upvote counts recorded August 2026. Market and tasting figures drawn from US-based studies; search-interest data is global. Original analysis: Modwel, R. (2026) — wine community discussion across r/wine threads, 2022–2026.
              </p>
            </div>

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
