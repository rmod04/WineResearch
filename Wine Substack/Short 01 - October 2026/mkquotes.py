# -*- coding: utf-8 -*-
import json

THREADS = {
 "T1": {"title":"I don't drink much burgundy. Thoughts on value here?","author":"u/b1ackfyre","score":36,
        "url":"https://www.reddit.com/r/wine/comments/1nleoo9/i_dont_drink_much_burgundy_thoughts_on_value_here/","createdAt":"2025-09-19"},
 "T2": {"title":"Help me understand burgundy pricing","author":"u/shitbirdie","score":16,
        "url":"https://www.reddit.com/r/wine/comments/17candz/help_me_understand_burgundy_pricing/","createdAt":"2023-10-20"},
 "T3": {"title":"Are Burgundy Red Wines Overpriced or Justifiably Expensive?","author":"u/zeriest","score":29,
        "url":"https://www.reddit.com/r/wine/comments/17z7dx5/are_burgundy_red_wines_overpriced_or_justifiably/","createdAt":"2023-11-19"},
 "T4": {"title":"Burgundy and pricing","author":"u/Mchangwine","score":109,
        "url":"https://www.reddit.com/r/wine/comments/1opboat/burgundy_and_pricing/","createdAt":"2025-11-05"},
 "T5": {"title":"These burgundies are getting too expensive","author":"u/odedi1","score":112,
        "url":"https://www.reddit.com/r/wine/comments/19c95x6/these_burgundies_are_getting_too_expensive/","createdAt":"2024-01-21"},
 "T6": {"title":"Burgundy will never be relevant to future generations","author":"u/iwrotedabible","score":179,
        "url":"https://www.reddit.com/r/wine/comments/zb84rb/burgundy_will_never_be_relevant_to_future/","createdAt":"2022-12-03"},
}

Q = []
def add(qid, thread, author, score, itemType, permalink, created, text, theme, usage, flags=None):
    Q.append({
      "id": qid, "status": "VERIFIED", "threadRef": thread,
      "threadTitle": THREADS[thread]["title"], "threadUrl": THREADS[thread]["url"],
      "author": author, "itemType": itemType, "score": score,
      "scoreCapturedAt": "2026-10-09", "permalink": permalink, "createdAt": created,
      "exactText": text, "theme": theme, "usageNote": usage, "flags": flags or []
    })

add("P3-Q1","T2","u/Chodepoker1",96,"comment",
 "https://www.reddit.com/r/wine/comments/17candz/comment/k5opouh/","2023-10-20",
 "At a certain point, you have to realize burgundy has more in common with baseball cards than it does with beer for example.\n\n The value of these bottles isn’t really based on their perceived quality so much as their rarity and collectability.\n\n People who are big burgundy nerds are very terroir obsessed and want to collect and try every individual plot of land and compare it to the one directly next to it. People actually gather very commonly and do this. It’s like Pokémon league for rich people.\n\n Like anything that’s inexplicably expensive, at it’s core is outrageously nerdy.",
 "Price tracks scarcity and collectability rather than tasted quality",
 "Use PARAGRAPHS 1 AND 2 ONLY. Paragraphs 3 and 4 (“Pokémon league for rich people”, “outrageously nerdy”) are derogatory toward a consumer group and are excluded by house rule. Mark the cut with […].",
 ["PARTIAL_USE_REQUIRED"])

add("P3-Q2","T4","u/thewhizzle",48,"comment",
 "https://www.reddit.com/r/wine/comments/1opboat/comment/nnah04d/","2025-11-05",
 "Most people on Reddit's experiences of Burgundy though are going to be random bottles purchased at the sub $80 price point and not through a carefully curated list of reputable producers. There are tons of random producers that are imported aimed at volume-oriented retailers like Costco, Total Wine, grocery stores that will still command $30-50 that probably cost $15 out the cellar door. They're pretty poor representations of the overall quality that Burgundy has to offer and it creates poor impressions of the region turning off customers from pursuing it further.\n\n Ex-cellar door prices are also not really relevant to the discussion as very few people will have access so we're forced to contend with whatever market prices are available.\n\n Good burgundy that is well made and expressive of terroir can certainly be had at $50-75 but that is probably on the upper range or even out of range for most wine consumers.",
 "Selection bias in crowd ratings of Burgundy",
 "LOAD-BEARING CAVEAT QUOTE. This is the strongest available objection to the piece's own Vivino analysis: the crowd sample skews to supermarket Burgundy. Use it to state the limitation in the community's own words rather than burying it in a footnote.",
 ["SELF-CRITICAL_OF_OUR_METHOD"])

add("P3-Q3","T4","u/Waking",21,"comment",
 "https://www.reddit.com/r/wine/comments/1opboat/comment/nnahqrz/","2025-11-05",
 "Perhaps it’s because I live in the US, but I find if I grab a random Burgundy at $50-100 it’s just a coin toss on quality. You really have to know what you’re doing. A $100 Napa cab is almost always a winner in my experience. Besides Caymus What Napa wines are you buying at $100 that are “mediocre”?",
 "Variance, not level, is what the buyer is paying for",
 "Use the first three sentences. The closing question to another user is conversational and should be cut with […].",
 ["PARTIAL_USE_REQUIRED"])

add("P3-Q4","T4","u/BenF87M2",17,"comment",
 "https://www.reddit.com/r/wine/comments/1opboat/comment/nnaqf87/","2025-11-05",
 "I think this is just cope from someone who loves burgundy (I do too) But as a previous poster said, most Napa wines $50+ are higher quality and the reality is the same is not true for burgundy. With Burgundy there is a much higher knowledge to quality barrier that isn’t present on most other wines, which is why a lot of people avoid burgundy. Burgundy has one of the worst QPR due to the clout. Don’t get me wrong, if you know what you’re looking for and know quality producers, it can be great QPR but the knowledge ceiling required is too high to the point that most people give up",
 "The name premium is partly a knowledge premium",
 "Best single line is “Burgundy has one of the worst QPR due to the clout.” Quote the sentence in full context or excerpt with […]. Note QPR means quality-to-price ratio; gloss it for a general reader.",
 ["JARGON_NEEDS_GLOSS"])

add("P3-Q5","T2","u/teddyone",8,"comment",
 "https://www.reddit.com/r/wine/comments/17candz/comment/k5oo7pp/","2023-10-20",
 "the thing to understand here is that Gevrey is on of the most famous/prestigous pinot noir villages in the world, maybe after Vosne and Chambolle. It contains many Grand Cru vineyards producing some of the most expensive wines in the world. Auxey-Duresses is a great village but not anywhere near the level of international acclaim.\n\n So is the Gevrey twice as good? I somewhat doubt it, but the producer might take more care with the production because they know it will command a higher price.",
 "Mechanism: reputation raises price, and price can then raise care",
 "Second paragraph is the usable excerpt and is the most interesting causal claim in the whole pull. Contains typos in paragraph 1 (“on of”, “prestigous”); if paragraph 1 is used, quote verbatim including typos, or cut it with […].",
 ["SOURCE_TYPOS"])

add("P3-Q6","T2","u/CondorKhan",3,"comment",
 "https://www.reddit.com/r/wine/comments/17candz/comment/k5px0q5/","2023-10-20",
 "Gevrey is a more prestigious appellation than Auxey Duresses, simply put\n\n Burgundy works just like everything else...\n\n Maybe the top videocard is 10% faster than the next fastest one, but it's 2x the price, because people that have to have the top thing will pay for it.",
 "Diminishing returns analogy from outside wine",
 "Low score (3). Use for the analogy only, and do not present it as a widely held community view. Third paragraph is the usable excerpt.",
 ["LOW_SCORE"])

add("P3-Q7","T3","u/applecactuspie",21,"comment",
 "https://www.reddit.com/r/wine/comments/17z7dx5/comment/k9ybrs1/","2023-11-19",
 "Short answer: it depends. The way I like to think of it, for wine the relationship between quality (taste, method of farming/production, the winemaker, and any other factors you want to use to describe a bottle) and price is not a linear function. Burgundy is the perfect example for this as prices can range from 20$ to 20k.\n\n Although \"quality\" certainly increases, at some point the marginal increase gets smaller and smaller - while the price function seems to do the opposite. The catch is that there is a market that is willing to pay up to get the extra bump in the quality of the bottle i.e. everyone's \"value\" function that matches the marginal increase in quality to the extra $ you pay is different.\n\n People ask \"is this 2000$ bottle 10 times better than this other 200$ bottle\" - probably not and as a result often think things are overpriced. When in reality they should be asking \" is it worth an extra 1800$ for me to have certain qualities in this bottle that I will not be certainly not be able to in this 200$ wine\" For some people yes, for some people no.",
 "Non-linear quality-price curve, articulated by a drinker",
 "Paragraph 2 is the cleanest excerpt and lines up almost exactly with Castriota et al. (2022). Pairing a community voice with the econometrics is the strongest move available for this section.",
 [])

add("P3-Q8","T3","u/rightanglerecording",28,"comment",
 "https://www.reddit.com/r/wine/comments/17z7dx5/comment/k9xtrrj/","2023-11-19",
 "Most of the time they are (IMO) overpriced.\n\n Occasionally they are transcendent, singular, worth every penny and then some.",
 "Both things are true at once",
 "Use in full. This is the house price-neutrality rule stated by a drinker and protects the piece from reading as an attack on expensive wine.",
 [])

add("P3-Q9","T2","u/targert_mathos",32,"comment",
 "https://www.reddit.com/r/wine/comments/17candz/comment/k5ooqmn/","2023-10-20",
 "Wine prices are not about quality. It's about supply and demand. Don't buy a $100 bottle of any wine and think it will be \"twice as good\" as a $50 bottle.",
 "Prices are set by demand",
 "Contains an “not X, it's Y” antithesis, which house style bans in our own prose. It is a verbatim quote, so it is used unchanged. Never reword a quote to satisfy a style rule.",
 ["HOUSE_STYLE_EXEMPT_VERBATIM"])

add("P3-Q10","T2","u/ababab70",21,"comment",
 "https://www.reddit.com/r/wine/comments/17candz/comment/k5op86d/","2023-10-20",
 "No one understands burgundy pricing. It’s all over the map.",
 "Opacity of Burgundy pricing",
 "Short and quotable. Good opener or pull-quote. Note the companion reply from u/Backpacker7385 (12) reframes it: “it’s all over the map” is exactly why it is what it is.",
 [])

add("P3-Q11","T3","u/Acceptable_West_3871",14,"comment",
 "https://www.reddit.com/r/wine/comments/17z7dx5/comment/k9z1eao/","2023-11-20",
 "Burgundy is a rat’s nest and probably the only place where “entry level bottle” and “$50” can be used in the same sentence.” I’ve had $200 bottles that sucked and also $40 bottles that knocked my socks off as well as everything in between. My gateway bottle into wine was a $50 bottle of Gevrey Chambertin villages. I suggest finding a producer you like and sticking with them. What makes burgundy fun is there are just so many different styles and price points and I find great satisfaction in finding undervalued wines. It’s frustrating because you might take 9 bottles that are meh and then the 10th will be one of the greatest wines you ever had.\n\n A great example of this is Domaine Pierre Guillemot which I had the pleasure of visiting earlier this year. Small, family run domaine in Savigny (off the beat village in the Cote de Beaune) but here you have a guy making some of the most delicious and pleasurable pinot noir in Burgundy and most of his wines are an absolute steal at the average $50 a bottle he charges for them, including several premier crus which can age for decades (we tried a 1984 Serpentieres which was still delivering the goods).",
 "Lived variance, with the price-quality link broken in both directions",
 "The “$200 bottles that sucked” sentence and the “9 bottles that are meh” sentence are the two usable excerpts. Note the stray closing quote mark after “$50” in the source; reproduce verbatim or start the excerpt after it.",
 ["SOURCE_PUNCTUATION_ARTEFACT"])

add("P3-Q12","T5","u/GraDoN",20,"comment",
 "https://www.reddit.com/r/wine/comments/19c95x6/comment/kixboat/","2024-01-21",
 "I honestly don't know how most people buy it... I suppose it does factor in where you live as that will affect availability of alternatives as well as price, but damn... $500 here can literally buy a dozen top Pinot Noirs or Chardonnays.\n\n USA, Australia, New Zealand and South Africa already produce quality that can compete with most of what Burgundy has to offer often at a much lower price point, at least locally. So I have no desire to ever spend a month's mortgage payment so I can taste a single Grand Cru that won't even be THAT much better than what I can get for a 10th of the price here.",
 "New World Pinot as a direct substitute",
 "Paragraph 2 first sentence is the key excerpt and names New Zealand, which supports the Central Otago comparison. The “month's mortgage payment” phrasing drew a correction from another user and is best cut.",
 ["PARTIAL_USE_REQUIRED"])

add("P3-Q13","T1","u/sid_loves_wine",10,"comment",
 "https://www.reddit.com/r/wine/comments/1nleoo9/comment/nf5cl21/","2025-09-19",
 "For sure!! It'll probably be alright for the price, but I'd never pay the listed $60, and compared to $30-$40 Pinot from many other regions it'll have a likely disadvantage.\n\n A few you might consider in a similar price range or at least below $50:\n\n Amelie Berthaut, Hautes-Cotes de Nuits\n\n Domaine Arlaud, Bourgogne \"Roncevie\"\n\n Domaine Boussey, Monthelie \"Toisieres\"\n\n Domaine Collotte, Marsannay, Vieilles Vignes\n\n Practically anything from Savigny-les-Beaune, imo the best village for value buys in the entire region- a couple of underrated inexpensive producers include Phillipe et Arnaud Dubreuil, Domaine du Prieuré, and Jean-Michel Giboulot.\n\n Most wines from the huge negociant producers (Jadot, Faiveley, Bouchard, maybe also Frederic Magnien) are also generally reliable, even if they aren't the best in their categories, they are much more reliable than the average unknown producer, in many cases.\n\n Also look to the southern part of burgundy, the Cote Chalonnaise. Domaine Ragot, Domaine Francois Lumpp, and any of the Faiveley Mercurey bottlings, etc.",
 "A village Burgundy at $60 losing to $30-40 Pinot elsewhere",
 "First paragraph is the headline excerpt: a Burgundy drinker conceding the comparison the piece measures. The producer list is useful research material for the practical section rather than a quote.",
 [])

add("P3-Q14","T1","u/Frisbeehead",11,"comment",
 "https://www.reddit.com/r/wine/comments/1nleoo9/comment/nf4xhcw/","2025-09-19",
 "You’d be better off spending the money on a lesser village from a better producer",
 "Producer beats appellation",
 "One line, usable whole. The same user's longer follow-up (score 4) says “I just want to spread the word of choosing producer over village”, which is the same point at lower authority.",
 [])

add("P3-Q15","T1","u/vertigo88",6,"comment",
 "https://www.reddit.com/r/wine/comments/1nleoo9/comment/nf65xd7/","2025-09-20",
 "Burgundy is a minefield.\n\n The order is. Producer. Vineyard. Vintage.\n\n A good producer can make a good wine from a bad vineyard/vintage. A bad producer will screw one of those things up.",
 "Ranking of what actually determines quality",
 "Low score (6) but the clearest statement of the hierarchy in the pull. Use as a practical takeaway rather than as evidence of consensus.",
 ["LOW_SCORE"])

add("P3-Q16","T3","u/Lord_of_Bings",4,"comment",
 "https://www.reddit.com/r/wine/comments/17z7dx5/comment/ka67au2/","2023-11-21",
 "Why is it priced the way it is ? Well to start with low volume production and high demand( For most of the well made stuff anyway) , land prices are enormous and the costs of producing wines in Burgundy is high.( manual harvesting, oak barrels , extended cellaring etc) Pinot Noir is not an easy variety to grow and manage.\n\n Now does this equal quality. In almost all circumstances absolutely not. I would say out of all the major French regions maybe even more so than Bordeaux the difference between a wine made by a high quality producer vs the average Burgundy you will find is frankly enormous. Now is it worth it ? Well that depends, of course there is a point of diminishing returns but there is a sweet spot were you can grab some pretty amazing wine if you are willing to spend in the $50- $200 range.",
 "Cost side of the premium, from a working sommelier",
 "Stored text is the first two paragraphs of a much longer comment; the full comment continues with buying advice and a closing note that white Burgundy offers better value than red. Score is only 4, so present as one sommelier's view, not as trade consensus. Spacing before punctuation is in the source.",
 ["PARTIAL_RECORD","LOW_SCORE","SOURCE_SPACING_ARTEFACT"])

add("P3-Q17","T4","u/Mchangwine",18,"comment",
 "https://www.reddit.com/r/wine/comments/1opboat/comment/nnaj41g/","2025-11-05",
 "There is an ocean of mediocre Napa being sold for $1-300 a bottle (or at least intended to sell for 1-300 a bottle). You're now seeing a ton of these wines being sold by Last Bottle, WTSO and Cameron Hughes for 1/4 of what it was supposed to be, because it didn't sell at retail. Many of these are either owned by PE or passion project by some people who thought buying expensive grapes and hiring a \"top\" winemaker would be a viable business.\n\n If you were to buy any random Burgundy from a reputable shop like K&L for 60-100, it'd likely be very good. Sure if you go to total wine or the grocery store and try to buy burgundy, you're probably getting random garbage, but that's generally true of most wine regions.",
 "The counter-case: retailer choice, not region, drives the hit rate",
 "Paragraph 2 is the usable excerpt and is the best available rebuttal from the pro-Burgundy side. Author is the thread's OP, a high-end collector, which is worth signalling without naming him.",
 [])

add("P3-Q18","T5","u/FocusIsFragile",63,"comment",
 "https://www.reddit.com/r/wine/comments/19c95x6/comment/kix64si/","2024-01-21",
 "The price increases from 2019 thru 2021 will mean an entire generation of young drinkers will never really get the chance to experience that middle upper range of Burgs. I get it, low yields, but eventually you just price yourself out.",
 "Access, and who gets shut out",
 "Use whole. High score (63) and the emotional centre of the whole topic. Good candidate for the closing section.",
 [])

add("P3-Q19","T6","u/Oikkuli",124,"comment",
 "https://www.reddit.com/r/wine/comments/zb84rb/comment/iyqucgi/","2022-12-03",
 "The class politics of wine is very often overlooked in this community, and among wine snobs in general. This problem is especially dire in america, where enjoying wine seems to be almost exclusively an upper-middle class and up hobby.\n\n And the reason for it is clear. Many people here enjoy such a high standard of living that they might spend a third worlder's salary on just wine. When you can afford most any bottle, you also start to disregard bottles the average person can afford. When you have little to no economic constraints you lose perspective.\n\n I've often seen people in this sub say bottles under 15 dollars are not worth buying. Do they not realize the overwhealming majority of wine is sold at less than 15 dollars, and how out of touch they are? I'm sorry if not everyone can afford to open a 100€ burg on a weekday, but good for you.\n\n It's a very troubling development, because wine is not just meant for the upper classes. Everyone deserves good wine.",
 "Who the premium excludes",
 "HIGHEST SCORE IN THE PULL (124). Use ONLY the closing line “Everyone deserves good wine.”, or that sentence with its preceding clause. The middle paragraphs are pointed at a consumer group and are excluded by house rule. Contains a typo (“overwhealming”) if a longer excerpt is ever used.",
 ["PARTIAL_USE_REQUIRED","SOURCE_TYPOS"])

add("P3-Q20","T6","u/bcarlofff",160,"comment",
 "https://www.reddit.com/r/wine/comments/zb84rb/comment/iypwp8x/","2022-12-03",
 "I’d tend to agree, but perhaps I’d say there is a difference between “cultural” relevance and “consumer” relevance. Burgundy is the pinnacle of wine whether one likes it or not, so currently burgundy is still admired and aspired to from a cultural perspective. But as prices remain high and production is limited the number of wine makers and future decision makers (let alone wine lovers)that have the opportunity to experience top quality wines from top quality producers will decrease. As a result burgundy’s ability to set the trend for international production will decrease and consumer relevance will as a result shift (and is somewhat already shifting) away. Wine is all about fashion, 40 years ago burgundy was thin, insipid wash. I’m sure we’re just beginning to see the flow.",
 "Cultural standing and consumer reality coming apart",
 "HIGHEST-SCORING COMMENT AT 160. “Wine is all about fashion, 40 years ago burgundy was thin, insipid wash” is the sharpest excerpt and is a historical claim worth fact-checking before use. Missing space in “lovers)that” is in the source.",
 ["NEEDS_FACT_CHECK","SOURCE_SPACING_ARTEFACT"])

EXCLUDED = [
 {"author":"u/latache-ee","score":1,"permalink":"https://www.reddit.com/r/wine/comments/zb84rb/comment/iysk37d/",
  "reason":"Two words, derogatory toward a consumer group on economic grounds. Excluded by house rule."},
 {"author":"u/Chodepoker1","score":11,"permalink":"https://www.reddit.com/r/wine/comments/17z7dx5/comment/k9z25da/",
  "reason":"Relevant first paragraph about awful $200-500 bottles, but the second paragraph is a sexual analogy. Excluded on tone."},
 {"author":"u/DotCapital7293","score":8,"permalink":"https://www.reddit.com/r/wine/comments/zb84rb/comment/iyr4o18/",
  "reason":"Strong blind-tasting claim, but phrased with a crude metaphor and derogatory about collectors. Excluded on tone. The underlying claim is worth testing against the critic data instead."},
 {"author":"u/werifesteria-vibes","score":43,"permalink":"https://www.reddit.com/r/wine/comments/zb84rb/comment/iypyxk3/",
  "reason":"High score and insider trade detail, but frames buyers as snobs with inherited taste. Excluded by the derogatory-toward-a-consumer-group rule."},
 {"author":"u/Twerp129","score":29,"permalink":"https://www.reddit.com/r/wine/comments/zb84rb/comment/iyptjex/",
  "reason":"“less relevant to poor people”. Excluded by house rule."},
 {"author":"u/lucasmilanesi","score":4,"permalink":"https://www.reddit.com/r/wine/comments/zb84rb/comment/iyqyomw/",
  "reason":"Names a national consumer group as a luxury driver. Excluded by house rule."},
]

doc = {
 "piece": "Piece 3 short form, October 2026",
 "workingTitle": "The Burgundy name premium",
 "protocolVersion": "C2T quote protocol, as stated in cork_to_table_style_rules.md",
 "publicAttribution": "a wine community member. In Notes and lighter copy, “someone on Reddit”. Usernames stay in this file and never appear in published work.",
 "scrapeProvenance": {
   "platform": "Reddit, r/wine",
   "pulledAt": "2026-10-09T11:38:07Z",
   "searchQuery": "burgundy expensive value",
   "withinSubreddit": "wine",
   "recordsReturned": 139,
   "postsReturned": 6,
   "commentsReturned": 133,
   "scoresCapturedAt": "2026-10-09",
   "note": "Scores drift. Any score printed in the piece must match this file, and the piece must state when scores were captured."
 },
 "threads": THREADS,
 "fieldNotes": [
   "exactText is stored verbatim as returned by the source, including typographic apostrophes, typos, stray punctuation and spacing before punctuation. Excerpts used in the piece must be exact substrings of exactText.",
   "The source renders paragraph breaks as a newline pair followed by a single space. That leading space is a rendering artefact and may be trimmed when excerpting; no other character may be changed.",
   "Mark every elision with […].",
   "A post score is not a comment score. All 20 records here are comments. The six post scores are held in the threads block and must be labelled as post scores if used.",
   "Six comments were pulled and then excluded on house-rule grounds. They are listed in excludedFromUse with reasons, so the decision is auditable and is not silently revisited later."
 ],
 "openItems": [
   "P3-Q20: verify the claim that Burgundy was regarded as thin and insipid around 40 years ago before quoting it as fact. Treat as one drinker's recollection until checked.",
   "P3-Q2 is the piece's own strongest objection. It must appear in the piece, not only in this file.",
   "Scores must be re-captured if publication slips past November 2026."
 ],
 "excludedFromUse": EXCLUDED,
 "quotes": Q,
}

with open("quote_source_records.json","w",encoding="utf-8") as f:
    json.dump(doc,f,ensure_ascii=False,indent=2)
print("records:",len(Q),"excluded:",len(EXCLUDED),"threads:",len(THREADS))
