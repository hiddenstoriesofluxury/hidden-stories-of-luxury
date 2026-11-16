/* HIDDEN STORIES OF LUXURY: the only file you need to edit.
   Change the text below, press "Commit changes" on GitHub, and the site updates in a minute or two.
   Keep every quote mark, comma and bracket exactly as in the examples. */

/* ============ SETTINGS ============ */
/* Paste a form service URL here (for example a Formspree endpoint) once the site is on its own hosting. */
const FORM_ENDPOINT = "";

/* ============ STORIES ============
   To publish a story, add an entry at the TOP of this list.
   id: short-name-with-hyphens · brandTold: true for paid brand stories
   art: "pearls" | "window" | "road" | "sea" · colors: [dark, mid, accent] (they tint the whole scene)
   cover: the colour of the book's cloth binding
   hook: the short line under the brand name
   Wrap a key fact in <mark>…</mark> to light it up in neon red. */
const STORIES = [
  {
    id: "cartier-necklace", brand: "Cartier", minutes: 2, brandTold: false,
    art: "pearls", colors: ["#16040a", "#6a1226", "#f3c9cf"], cover: "#7d0f1a",
    hook: "A mansion paid for with pearls",
    title: "The Fifth Avenue mansion bought with a necklace",
    dek: "Cartier's New York flagship did not cost a fortune. It cost a string of pearls.",
    body: [
      "In 1917, Pierre Cartier wanted a proper home for the house in New York. The one he had his eye on belonged to the railroad heir Morton Plant: a Renaissance-style mansion on the corner of Fifth Avenue and 52nd Street.",
      "Plant's wife, Maisie, had her eye on something too. In Cartier's showcase sat a double strand of natural pearls, at the time among the most expensive necklaces in the world, valued at <mark>one million dollars</mark>.",
      "So Cartier proposed a trade. The pearls, plus <mark>$100 in cash</mark>, for the building. Plant agreed. In 1917 that looked like a fair deal, because fine natural pearls were worth more than Manhattan stone.",
      "Then cultured pearls arrived and the market collapsed. After Maisie's death the necklace went to auction in 1957 and sold for <mark>$151,000</mark>. The mansion is still Cartier's New York flagship."
    ]
  },
  {
    id: "birkin-flight", brand: "Hermès", minutes: 2, brandTold: false,
    art: "window", colors: ["#140803", "#8a3c0d", "#ffc48a"], cover: "#9a3f0c",
    hook: "A legend sketched on a sick bag",
    title: "The most wanted bag in the world was sketched on a sick bag",
    dek: "It began with a straw basket falling out of an overhead locker.",
    body: [
      "In the early 1980s the actress Jane Birkin boarded a flight from Paris to London carrying what she always carried: a straw basket. When she lifted it into the overhead compartment, everything inside spilled across the cabin.",
      "The man in the next seat helped her gather it up. She complained that she could never find a leather weekend bag she liked, one that was roomy but still elegant. He happened to be <mark>Jean-Louis Dumas, the head of Hermès</mark>.",
      "They spent the flight designing it together. The first sketch was drawn on the only paper to hand: <mark>an airsickness bag</mark>.",
      "Hermès released the bag in <mark>1984</mark> and named it after her. Birkin later said she carried hers until it was battered, hung with charms and stickers, which is exactly what its buyers today would never dare to do."
    ]
  },
  {
    id: "vuitton-walk", brand: "Louis Vuitton", minutes: 2, brandTold: false,
    art: "road", colors: ["#0f0a06", "#4a3320", "#e8d6ad"], cover: "#5a3a22",
    hook: "470 kilometres on foot, aged thirteen",
    title: "Louis Vuitton walked to Paris. It took him two years.",
    dek: "Before the monogram there was a thirteen-year-old with no money and a long road.",
    body: [
      "In 1835 a boy left the village of Anchay in the Jura mountains, alone and on foot. He was <mark>thirteen years old</mark>. Paris was roughly 470 kilometres away.",
      "He took odd jobs along the route to eat, and reached the capital in 1837, <mark>about two years later</mark>. There he found work as an apprentice to a box-maker and packer, a trade that existed because the rich did not pack their own clothes.",
      "He became so good at it that he was appointed <mark>personal packer to Empress Eugénie</mark>, the wife of Napoleon III. In 1854 he opened his own workshop.",
      "His breakthrough was almost boring. Trunks then had domed lids so rain would run off. Vuitton made his <mark>flat</mark>, in waterproof canvas, so they could be stacked in the hold of a train or a ship. The whole house was built on a lid."
    ]
  },
  {
    id: "rolex-channel", brand: "Rolex", minutes: 2, brandTold: false,
    art: "sea", colors: ["#03110b", "#0f4a33", "#bfe8cf"], cover: "#0f5238",
    hook: "Ten hours in freezing water, still ticking",
    title: "Rolex proved its watch by hanging it on a swimmer's neck",
    dek: "The first great luxury advertisement was a ten-hour swim in freezing water.",
    body: [
      "In 1927 a London typist named Mercedes Gleitze became the first Englishwoman to swim the Channel. When another woman falsely claimed a faster crossing, doubt fell on Gleitze too, so she announced she would swim it again to clear her name.",
      "Hans Wilsdorf, the founder of Rolex, saw his moment. He had just launched the Oyster, which he said was waterproof, and almost nobody believed him. He asked Gleitze to <mark>wear one around her neck</mark>.",
      "The water was brutally cold. After <mark>more than ten hours</mark> she was pulled out, a few miles short of the coast. The swim failed. The watch did not: it was still running and dry inside.",
      "Wilsdorf bought <mark>the front page of the Daily Mail</mark> to say so. Sports stars wearing watches for money starts here."
    ]
  }
];
