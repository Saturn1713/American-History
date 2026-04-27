import colonial from "@/assets/exhibit-colonial.jpg";
import revolution from "@/assets/exhibit-revolution.jpg";
import civilwar from "@/assets/exhibit-civilwar.jpg";
import westward from "@/assets/exhibit-westward.jpg";
import civilrights from "@/assets/exhibit-civilrights.jpg";
import modern from "@/assets/exhibit-modern.jpg";

export type Artifact = {
  id: string;
  title: string;
  year: string;
  emoji: string;
  short: string;
  details: string;
  funFact: string;
};

export type Exhibit = {
  slug: string;
  title: string;
  era: string;
  tagline: string;
  intro: string;
  image: string;
  accent: string;
  videoId: string; // YouTube ID
  videoTitle: string;
  artifacts: Artifact[];
};

export const exhibits: Exhibit[] = [
  {
    slug: "colonial",
    title: "Colonial America",
    era: "1607 – 1763",
    tagline: "A new world takes root.",
    intro:
      "Long before the United States existed, thirteen British colonies stretched along the Atlantic coast. Settlers, Native nations, and enslaved Africans all shaped a land of farms, ports, and growing cities.",
    image: colonial,
    accent: "from-amber-700/60 to-stone-900/60",
    videoId: "dpiHQXw70YE",
    videoTitle: "Life in the 13 Colonies (3-min overview)",
    artifacts: [
      {
        id: "mayflower",
        title: "The Mayflower",
        year: "1620",
        emoji: "⛵",
        short: "The ship that carried the Pilgrims to Plymouth.",
        details:
          "102 passengers spent 66 days at sea crossing the Atlantic. They signed the Mayflower Compact — one of the first agreements for self-government in America.",
        funFact: "Only about half the passengers survived their first winter in the New World.",
      },
      {
        id: "quill",
        title: "Quill & Parchment",
        year: "1600s",
        emoji: "🪶",
        short: "The everyday writing tools of the colonies.",
        details:
          "Made from goose feathers, quills were used to sign letters, ledgers, and important documents — including the Declaration of Independence over a century later.",
        funFact: "A single quill could last about a week of daily writing before wearing out.",
      },
      {
        id: "tricorn",
        title: "Tricorn Hat",
        year: "1700s",
        emoji: "🎩",
        short: "The iconic three-cornered hat of the era.",
        details:
          "Worn by farmers, merchants, and soldiers, the tricorn shed rain off its three points and could be tucked under an arm indoors.",
        funFact: "George Washington wore one — but he never powdered his wig white. That was natural!",
      },
    ],
  },
  {
    slug: "revolution",
    title: "American Revolution",
    era: "1775 – 1783",
    tagline: "Thirteen colonies become one nation.",
    intro:
      "Tired of taxes without representation, the colonies fought an eight-year war for independence from Britain. Out of that struggle, a new country — and new ideas about freedom — were born.",
    image: revolution,
    accent: "from-blue-900/70 to-red-900/60",
    videoId: "gzALIXcY4pg",
    videoTitle: "The American Revolution in 5 minutes",
    artifacts: [
      {
        id: "declaration",
        title: "Declaration of Independence",
        year: "July 4, 1776",
        emoji: "📜",
        short: "The document that declared America free.",
        details:
          "Drafted mainly by Thomas Jefferson and signed by 56 delegates, it announced that the 13 colonies were independent states with the right to govern themselves.",
        funFact: "John Hancock signed his name extra-large so 'King George can read it without his spectacles.'",
      },
      {
        id: "musket",
        title: "Continental Musket",
        year: "1776",
        emoji: "🔫",
        short: "Standard weapon of the Continental Army.",
        details:
          "A trained soldier could fire about 3 shots per minute. Muskets were inaccurate past 80 meters, so battles were fought in tight lines.",
        funFact: "Many soldiers brought their own hunting rifles — far more accurate than army-issued muskets.",
      },
      {
        id: "flag",
        title: "Betsy Ross Flag",
        year: "1777",
        emoji: "🇺🇸",
        short: "The original 13-star American flag.",
        details:
          "Thirteen stars in a circle stood for the 13 original colonies, united as equals. The 13 stripes still appear on today's flag.",
        funFact: "The 50-star design used today was created in 1958 by a 17-year-old high school student!",
      },
    ],
  },
  {
    slug: "civil-war",
    title: "The Civil War",
    era: "1861 – 1865",
    tagline: "A nation divided fights for its future.",
    intro:
      "The deadliest war in American history was fought between the Union (North) and the Confederacy (South), mainly over slavery and states' rights. Its end brought freedom to millions and reshaped the nation forever.",
    image: civilwar,
    accent: "from-slate-800/70 to-amber-900/50",
    videoId: "tSXFKZ_yMOQ",
    videoTitle: "The American Civil War — A short history",
    artifacts: [
      {
        id: "lincoln",
        title: "Abraham Lincoln's Stovepipe Hat",
        year: "1860s",
        emoji: "🎩",
        short: "The 16th President's signature look.",
        details:
          "Lincoln stored notes, letters, and even his pocket watch inside the tall hat. He wore it the night he was assassinated at Ford's Theatre.",
        funFact: "Lincoln stood 6'4\" — the tallest U.S. president ever — and the hat made him look even taller.",
      },
      {
        id: "emancipation",
        title: "Emancipation Proclamation",
        year: "1863",
        emoji: "📃",
        short: "Lincoln's order to free enslaved people.",
        details:
          "The Proclamation declared that all enslaved people in Confederate states were free. The 13th Amendment in 1865 ended slavery throughout the United States.",
        funFact: "Lincoln signed it on New Year's Day, 1863, after waiting for a Union victory.",
      },
      {
        id: "bugle",
        title: "Field Bugle",
        year: "1860s",
        emoji: "🎺",
        short: "How orders traveled on a noisy battlefield.",
        details:
          "Buglers played different calls for waking up, charging, retreating, and 'Taps' at the end of the day — still played at military funerals today.",
        funFact: "Some buglers were as young as 12 years old.",
      },
    ],
  },
  {
    slug: "westward",
    title: "Westward Expansion",
    era: "1803 – 1890",
    tagline: "A nation moves west.",
    intro:
      "From the Louisiana Purchase to the Gold Rush, millions journeyed west seeking land and fortune. This expansion brought new states — but also tragic conflict with Native American nations.",
    image: westward,
    accent: "from-orange-700/60 to-amber-900/60",
    videoId: "EabIMHaH7yA",
    videoTitle: "Westward Expansion — Crash Course Kids",
    artifacts: [
      {
        id: "wagon",
        title: "Covered Wagon",
        year: "1840s",
        emoji: "🛻",
        short: "The 'prairie schooner' of the Oregon Trail.",
        details:
          "Pulled by oxen, these wagons carried families up to 2,000 miles in 4–6 months. Travelers walked beside them most of the way.",
        funFact: "The white canvas top was greased with oil to keep the rain out — and inspired the name 'schooner.'",
      },
      {
        id: "gold",
        title: "Gold Rush Pan",
        year: "1849",
        emoji: "🪙",
        short: "The tool of California's '49ers.'",
        details:
          "When gold was found at Sutter's Mill, around 300,000 people rushed to California. Most never struck it rich — but San Francisco grew from 200 people to 36,000 in just a few years.",
        funFact: "Levi Strauss made his fortune not from gold, but from selling sturdy denim pants to miners — blue jeans!",
      },
      {
        id: "telegraph",
        title: "Telegraph Key",
        year: "1860s",
        emoji: "📡",
        short: "America's first instant messaging.",
        details:
          "Using Morse code, telegraph operators could send messages across the country in minutes — replacing the Pony Express almost overnight.",
        funFact: "The first transcontinental telegraph message in 1861 was sent to President Lincoln.",
      },
    ],
  },
  {
    slug: "civil-rights",
    title: "Civil Rights Movement",
    era: "1954 – 1968",
    tagline: "The fight for equality.",
    intro:
      "Through marches, sit-ins, speeches, and law, Black Americans and their allies challenged segregation and won landmark protections for voting, schooling, and everyday life.",
    image: civilrights,
    accent: "from-stone-700/70 to-rose-900/50",
    videoId: "URxwe6LPvkM",
    videoTitle: "The Civil Rights Movement — Explained",
    artifacts: [
      {
        id: "mlk-mic",
        title: "MLK's Microphone",
        year: "1963",
        emoji: "🎤",
        short: "From the March on Washington.",
        details:
          "On August 28, 1963, Dr. Martin Luther King Jr. delivered his 'I Have a Dream' speech to 250,000 people at the Lincoln Memorial.",
        funFact: "The famous 'I have a dream' lines were improvised — they weren't in his prepared notes!",
      },
      {
        id: "rosa-bus",
        title: "Rosa Parks' Bus Seat",
        year: "1955",
        emoji: "🚌",
        short: "The seat that sparked a movement.",
        details:
          "When Rosa Parks refused to give up her seat to a white passenger in Montgomery, Alabama, it launched a 381-day bus boycott led by a young Dr. King.",
        funFact: "Rosa Parks was a trained civil rights activist long before that famous day — not just 'tired,' but determined.",
      },
      {
        id: "voting",
        title: "Voting Rights Act",
        year: "1965",
        emoji: "🗳️",
        short: "Protecting the right to vote.",
        details:
          "Signed by President Johnson, this law banned racist voting practices like literacy tests that had blocked Black Americans from the ballot box for decades.",
        funFact: "Black voter registration in Mississippi jumped from under 7% to nearly 60% within just two years.",
      },
    ],
  },
  {
    slug: "modern",
    title: "Modern America",
    era: "1969 – Today",
    tagline: "From the Moon to the Internet.",
    intro:
      "From walking on the Moon to inventing the World Wide Web, modern America has been a place of rapid change — in technology, music, sports, and culture that reaches across the globe.",
    image: modern,
    accent: "from-indigo-900/70 to-red-900/60",
    videoId: "cwZb2mqId0A",
    videoTitle: "Apollo 11 Moon Landing — Restored Footage",
    artifacts: [
      {
        id: "apollo",
        title: "Apollo 11 Helmet",
        year: "1969",
        emoji: "🚀",
        short: "America walks on the Moon.",
        details:
          "On July 20, 1969, Neil Armstrong stepped onto the Moon and said, 'That's one small step for man, one giant leap for mankind.' About 600 million people watched on TV.",
        funFact: "The computer that guided Apollo 11 had less power than a modern calculator!",
      },
      {
        id: "internet",
        title: "First Web Browser",
        year: "1990s",
        emoji: "🌐",
        short: "The Internet goes mainstream.",
        details:
          "Although invented in Switzerland, the World Wide Web exploded in popularity in the U.S. through browsers like Mosaic and Netscape, changing everyday life forever.",
        funFact: "The very first website is still online today — and it's just a simple page of text!",
      },
      {
        id: "smartphone",
        title: "Smartphone",
        year: "2007",
        emoji: "📱",
        short: "A computer in every pocket.",
        details:
          "When Apple released the iPhone in 2007, it transformed how people communicate, shop, learn, and create — putting the internet in billions of pockets worldwide.",
        funFact: "There are now more smartphones on Earth than there are people.",
      },
    ],
  },
];

export const getExhibit = (slug: string) => exhibits.find((e) => e.slug === slug);
