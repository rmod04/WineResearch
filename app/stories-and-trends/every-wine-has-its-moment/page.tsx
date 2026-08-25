import Link from 'next/link'
import VisualEmbed, { VISUALS_BASE } from '@/components/VisualEmbed'
import { site } from '@/content/site'

export const metadata = {
  title: 'Every Wine Has Its Moment — Cork To Table',
  description:
    'Why does a cold evening make you reach for something heavier? Why does a glass with friends feel different from the one alone? A data-led research piece on wine, occasion, and the moment that makes it all mean something.',
}

function DataCallout({ stat, context }: { stat: string; context: string }) {
  return (
    <div className="my-8 flex gap-6 border-l-4 border-gold pl-6 py-2">
      <p className="font-cormorant text-4xl font-light text-gold shrink-0">{stat}</p>
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

export default function EveryWineHasItsMomentPage() {
  return (
    <>
      {/* ── Article header ───────────────────────────────────────── */}
      <section className="bg-burgundy pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
            Research · Substack
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-cream leading-tight mb-6">
            Every Wine Has Its Moment
          </h1>
          <div className="w-12 h-px bg-gold mb-6" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="font-montserrat text-[11px] tracking-widest uppercase text-cream/60">
              April 2026
            </p>
            {site.substackUrl ? (
              <a
                href={site.substackUrl}
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
              It all started with a bottle of Riesling years ago. One that was pleasant on the palate, very refreshing, but nothing out of the ordinary. I opened it to pair with a quiet dinner at home, had a glass, and stored it in the fridge. The next day, I hosted a small get-together; it was a warm day and everyone was in the mood for something chilled. I thought, before I crack open something new, why not give the previously opened bottle another go? To my surprise, it turned into something that fit the moment perfectly. And in that moment, we decided to open one more of the same, and followed it with a summer evening full of conversation, laughter, and music. (I will add that we were down a couple of G&Ts before trying the wine, but that is beside the point&hellip;or maybe it isn&apos;t. We shall see.)
            </p>
            <p>
              To categorise wine consumption merely as a food accompaniment or a cultural norm would be unfair. It goes way beyond that; it&apos;s a philosophy. Why does a cold evening make you reach for something heavier without thinking? Why do you crave a particular bottle in front of a warm fireplace, or when it&apos;s raining outside? Why does this glass with friends feel different from the one alone? What is actually going on?
            </p>
            <p className="font-cormorant text-xl italic text-burgundy leading-relaxed">
              If you&apos;re asking these questions, you&apos;re not alone. That is the essence of this piece.
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              From Solo Ritual to Shared Moment
            </h2>
            <p>
              For the first time in nearly 30 years of tracking, the top reason U.S. consumers choose wine is no longer simply for relaxation at home; it is that wine makes the occasion feel special.¹ Context is everything. Wine has officially migrated from a solitary reward to a social and occasion marker.
            </p>
            <p>
              The instinct to match wine to a moment reflects deeply ingrained social psychology. At some point, there is bound to be an &lsquo;out with the old, in with the new&rsquo; moment. The question is: why wine, and why now? Perhaps drinking alone has fallen out of fashion and newer generations simply need a different hook when they go out and engage with the world. Perhaps the emergence of newer, more accessible styles has led a variety of demanding palates to collectively embrace wine as their casual and trustworthy companion. What we do know for certain is that wine is being established more significantly in its association with fun and celebration.
            </p>

            <DataCallout
              stat="−50%"
              context='"Treat me / relax alone" wine occasions fell from 14% to 7% in just two years, while couples moments and celebrations gained share. (Deutsch Family Wine & Spirits, 56,000 responses, 2023–2025)'
            />

            <VisualEmbed
              src={`${VISUALS_BASE}/visual_occasion_shift.html`}
              title="Occasion shift: how wine usage occasions have changed"
            />

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              It Depends, and That&apos;s the Whole Idea
            </h2>

            <Quote text="Wine tastes better when you are having a good time." source="r/wine · ▲ 44" />

            <p>
              As a by-product of this shift, wine choice has become a form of self-expression. With that, traditional norms are being quietly discarded. The seasons, the rules, the received wisdom about what to drink and when; consumers are rewriting all of it on their own terms. In our desire to express individuality in taste, setting becomes an identity. Enjoying and expressing interest in different wines based on the setting (a fine-dining meal versus a casual bar, a holiday versus home, a special occasion versus a regular evening out) becomes an extension of every wine drinker&apos;s personality.
            </p>

            <p>A brief Instagram study captures this empirically:</p>
            <ul className="list-disc list-outside ml-4 space-y-2 font-montserrat text-xs text-mid leading-relaxed">
              <li>67% of 132 Instagram posts reference a specific setting in their caption: beach, holiday, terrace, fireplace, restaurant.</li>
              <li>#redwineweather has the highest comment engagement of any seasonal hashtag at an average of 51 comments per post. People are actively discussing when red wine belongs.</li>
              <li>The most-liked caption in the dataset: &lsquo;POV: it&apos;s 5pm, raining, you open a Shiraz and everything is suddenly okay&rsquo; (2,109 likes).</li>
              <li>&lsquo;When the temperature hits 25°C it&apos;s automatically rosé season. Science.&rsquo;</li>
              <li>Each one reads as an identity statement. People are broadcasting a moment as much as choosing a wine.</li>
            </ul>

            <VisualEmbed
              src={`${VISUALS_BASE}/visual_instagram.html`}
              title="Instagram hashtag analysis: wine and occasion"
            />

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              The Seasonal Instinct: Summer Wine or Winter Wine
            </h2>
            <p>
              With wine now woven into the fabric of self-expression, the predictable seasonal binary of reds in winter and whites in summer is collapsing in real time. The fastest-growing restaurant wine segment is now chillable reds: lighter in body, higher in acidity, and more refreshing when served slightly cool, bridging the seasonal divide entirely. Similarly, rosé is no longer a seasonal summer drink, but a year-round category.³
            </p>

            <DataCallout
              stat="+17%"
              context="Global rosé consumption since 2000. Fastest-growing wine colour by share. (OIV, via Decanter 2023)"
            />
            <DataCallout
              stat="−15%"
              context="Red wine consumption from its 2007 peak. White wine up 10% over the same period. (OIV)"
            />

            <p>
              In general, many voices establish clear seasonal preferences. Most align with what would traditionally be expected, but with less rigidity and more personalisation. Each wine drinker has their own say in the matter.
            </p>

            <Quote text="For the most part it will be based on my seasonal cooking habits. In summer I eat more salad and grill more. In winter I do more roasting and braising. Therefore I find myself drinking crisp whites in summer, whereas in winter I lean towards richer whites and more complex reds. Of course, when it all comes down to it, I drink whatever the hell I want, whenever the hell I want!" source="r/wine · ▲ 8" />
            <Quote text="Winter is Barolo and traditionalist southern Rhône. Spring is Cru Beaujolais. Summer is Tavel/Bandol Rosés and German whites. Fall is Bordeaux for days." source="r/wine · ▲ 1" />
            <Quote text="Pinot has always felt like a great fall wine to me. Chardonnay feels like spring. Summer is built for Rosé, and Winter is where the biggest red isn't big enough. But mostly I just drink all the good wines all the time." source="r/wine · ▲ 1" />

            <p>
              Through the many voices that express their opinions on social channels, a subtle macro-level signature is established: there is no desire to play by the rules. And here lies the critical nuance. The seasonal instinct is real and the data shows it, but it describes a tendency rather than a rule. Every single top-voted seasonal comment ends with a version of: &lsquo;but I drink whatever I want, whenever I want.&rsquo;
            </p>
            <p>
              We thereby reconfirm that a pattern exists, but so does the freedom to ignore it. That qualifier is the argument itself.
            </p>

            <VisualEmbed
              src={`${VISUALS_BASE}/visual_seasonal_instinct.html`}
              title="Seasonal wine preferences: data visualisation"
            />

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              Why Your Wine Tastes Different on Holiday
            </h2>

            <Quote text="This reminds me of all the people waxing poetic about the wine in Italy or Spain when you know it's just €5 house wine and holiday vibes." source="r/wine · ▲ 46" />

            <p>So why does this happen? The science is more compelling than you might expect.</p>

            <p className="font-semibold text-charcoal">Four mechanisms at play:</p>

            <p>
              <span className="font-semibold">1. Your senses literally change.</span> Prof. Charles Spence&apos;s crossmodal research at Oxford&apos;s Department of Experimental Psychology demonstrates that environmental cues, such as colour, music, and light, measurably alter flavour perception. His work on wine and music showed that congruent music and ambient conditions shift wine taste ratings in consistent and predictable directions.⁵ The colours around you on holiday are not merely aesthetic backdrop. They are changing what you taste.
            </p>

            <DataCallout
              stat="+9%"
              context="Wine enjoyment uplift from environmental cues alone. (Prof. Charles Spence, Oxford University)"
            />

            <p>
              <span className="font-semibold">2. The same wine evokes more emotion in a restaurant than at home.</span> Danner et al. studied the same wines across three settings: laboratory, restaurant, and home. The result: context affected emotional response but not base liking. You do not necessarily like the wine more; you feel it more. And mood before tasting had a strong influence on those emotional ratings.⁶
            </p>

            <p>
              <span className="font-semibold">3. Company changes everything.</span> The people sitting around you shape your experience as much as the glass, and a great bottle isn&apos;t likely to rescue poor company.
            </p>
            <Quote text="A lot of the enjoyment of wine is in the context. La Tâche doesn't hit the same when you're drinking it with assholes." source="r/wine · ▲ 119" />

            <p>
              <span className="font-semibold">4. The wine itself is often better prepared.</span> Wineries and well-researched bars and restaurants typically open bottles early, let them breathe properly, serve at the correct temperature, and pour into the right glassware. At home, many of these steps get skipped for convenience.
            </p>

            <Quote text="You might be tasting a wine that was opened early in the day and has had time to slow oxidise and really open up before it's poured for you." source="r/wine · ▲ 114" />
            <Quote text="Wineries invest a lot of time and money into immersive tasting experiences. There are so many itty bitty factors contributing to you drinking that first glass." source="r/wine · ▲ 22" />

            <p>
              Beyond physical context, there is a fifth attribute worth noting: expectations. Research published in the Proceedings of the National Academy of Sciences demonstrated that higher price expectations measurably increase neural activity in the brain&apos;s pleasure centre, even when the wine itself is identical. On holiday, with a beautiful setting, pricier wine lists, and high expectations, the brain is already primed to enjoy it more.⁷ Price expectation shapes perception strongly enough to carry a story of its own, something I&apos;ve dwelled on in a later piece.
            </p>
            <p>
              We can therefore conclude that wine preference is always a composite signal: wine + person + place + moment. The combination of these factors makes it very hard to isolate the liquid and analyse it under pure objectivity, no matter how experienced the taster. The holiday bottle that tasted extraordinary was not a false positive. That experience was real. The wine was just one ingredient.
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              Wine Changes Characteristics Over Time. So Do You.
            </h2>
            <p>
              Not only do preferences depend on contextual settings, they also evolve and adapt over time. When we aggregate our findings, a consistent arc emerges across respondents, regardless of age or experience level: intensity gives way to subtlety, fruit bombs to terroir and balance, oak scepticism grows with experience, red dominance softens toward whites and lighter styles, rules matter less, and moment matters more.
            </p>

            <Quote text="I used to drink almost entirely reds. At the moment, I likely drink way more whites. I used to seek out the most intense fruit bombs I could find. Now I like funky flavours and subtlety as well." source="r/wine · ▲ 15" />
            <Quote text="I can't be bothered with anything with too much oak. I feel like I can tell when it's being amped up to disguise shortcomings now." source="r/wine · ▲ 80" />
            <Quote text="Wine for me has become a means of understanding agricultural practice and the relationships between farmers and the earth they tend to." source="r/wine · ▲ 66" />

            <p>
              This shift is not confined to established markets. In India, the rise in white wine consumption, particularly those of Sauvignon Blanc and Chenin Blanc grape varieties, reflects a changing palate, especially among younger urban consumers and women.⁸ A generation with a fresh approach to wine, without the preconceived association with red as the solitary symbol of prestige, is arriving at the same conclusions the voices above describe: lighter, brighter, more about the moment than about formality.
            </p>
            <p>
              This is not just a cultural shift, it is also a climatic one. Research into Indian wine consumption behaviour shows a marked and conscious preference for lighter, fruit-forward styles in warmer weather, with Prosecco, rosé and crisp whites increasingly the deliberate choice in the summer months. In a country where peak summer regularly exceeds 40°C, reaching for something chilled and low-tannin is less a cultural trend and more a considered response to the environment. The seasonal instinct, here, is proven data.
            </p>

            <VisualEmbed
              src={`${VISUALS_BASE}/visual_oiv_colour_shift.html`}
              title="OIV global wine consumption by colour shift over time"
            />

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-4">
              Is There Really a &lsquo;Perfect&rsquo; Glass?
            </h2>
            <p>
              The largest characteristic evolution we observe today is that wine has begun entering the social calendar more and more, to create occasions, be it a corporate gathering, dining out with family, or hosting friends at home.
            </p>
            <p>
              This aligns with the Wine Market Council&apos;s 2025 finding: the need to create an occasion is now the primary driver of wine choice.¹⁰ The choice is dictated by the collective mood, and the act of choosing ends up making the occasion. The data and the human voice are saying the same thing: there is simply no &lsquo;perfect&rsquo; wine for a &lsquo;perfect&rsquo; occasion that has not happened yet. Let that sink in for a moment.
            </p>

            <Quote text="There is no such thing as a special occasion. The bottle is the occasion." source="r/wine · ▲ 198" />

            <p>
              And so, as I said goodbye to my guests and contemplated the bottle of Riesling we had gulped down, one simple thought occurred to me, and I would encourage anyone to think about it the next time they are choosing a wine:
            </p>

            <p className="font-cormorant text-2xl italic text-burgundy leading-relaxed text-center py-4">
              There is no right or wrong glass of wine, but the glass does have the power to make the right moment.
            </p>

            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy pt-8">
              Appendix: Consumer Voices
            </h2>

            <VisualEmbed
              src={`${VISUALS_BASE}/visual_reddit_voices.html`}
              title="Reddit voices: curated consumer quotes from r/wine"
            />

            {/* References */}
            <div className="mt-12 pt-8 border-t border-gold/20">
              <p className="font-montserrat text-[10px] tracking-widest uppercase text-mid mb-4">References</p>
              <ol className="space-y-2 font-montserrat text-xs text-mid leading-relaxed list-decimal list-inside">
                <li>Wine Market Council (2025). U.S. Wine Consumer Benchmark Survey. Reported by Erica Duecy, Forbes, 29 January 2026. n=4,900+ U.S. adults.</li>
                <li>Deutsch Family Wine & Spirits (2025). Internal consumer occasion tracking, 56,000 responses across 7 survey waves, mid-2023 to July 2025. Reported at Wine Market Council Conference, January 2026.</li>
                <li>Tastewise (2025). Rosé Wine Trends 2026. December 2025.</li>
                <li>OIV: International Organisation of Vine and Wine (2023). Global wine consumption by colour, 2000–2021. Reported in Decanter, December 2023.</li>
                <li>Spence, C. & Wang, Q.J. (2015). Wine and music (I): on the crossmodal matching of wine and music. <em>Flavour</em>, 4, 34. See also: Spence, C. et al. (2014). A large sample study on the influence of the multisensory environment on the wine drinking experience. <em>Flavour</em>, 3, 8.</li>
                <li>Danner, L. et al. (2016). Context and wine quality effects on consumers&apos; mood, emotions, liking and willingness to pay for Australian Shiraz wines. <em>Food Research International</em>, 89, 254–265.</li>
                <li>Plassmann, H. et al. (2008). Marketing actions can modulate neural representations of experienced pleasantness. <em>Proceedings of the National Academy of Sciences</em>, 105(3), 1050–1054.</li>
                <li>BestWineImporters (2025). Indian Wine Importers and Import Guide 2025 Update.</li>
                <li>Pragma Market Research (2025). India Wine Market Report, June 2025.</li>
                <li>Wine Market Council (2025). U.S. Wine Consumer Benchmark Survey. As per reference 1.</li>
              </ol>
              <p className="font-montserrat text-[10px] text-mid/60 mt-4">
                All Reddit quotes attributed generically as &lsquo;r/wine&rsquo;. Upvote counts recorded April 2026. Original analysis based on 132 Instagram posts across 8 seasonal wine hashtags and 452 Reddit comments across 17 r/wine threads.
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
