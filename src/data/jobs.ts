export const categories = [
  { slug: "kitchen-bath", label: "Kitchen & bath" },
  { slug: "sewer-drain", label: "Sewer & drain" },
  { slug: "boilers", label: "Boilers & tankless" },
  { slug: "waterproofing", label: "Waterproofing" },
  { slug: "water-service", label: "Water service & filtration" },
  { slug: "commercial", label: "Commercial" },
  { slug: "repairs", label: "Repairs" },
  { slug: "video", label: "Video" },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export interface JobPhoto {
  id: string;
  alt: string;
}

export interface Job {
  slug: string;
  title: string;
  date: string;
  facebookUrl: string;
  videoOnly: boolean;
  categories: CategorySlug[];
  excerpt: string;
  paragraphs: string[];
  notes: string[];
  cover?: string;
  photos: JobPhoto[];
}

export function categoryLabel(slug: CategorySlug): string {
  return categories.find((item) => item.slug === slug)?.label ?? slug;
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T12:00:00Z`));
}

export const jobs: Job[] = [
  {
    slug: "kitchen-remodel-new-pvc",
    title: "New PVC for a kitchen remodel",
    date: "2026-09-27",
    facebookUrl:
      "https://www.facebook.com/Coulehan724/posts/pfbid02xT6ft9XrnCA5GXPtybRNvPt7unLJi3gXHfWU1Ry8LVe1CvioopzWiU32RyphAYXLl",
    videoOnly: false,
    categories: ["kitchen-bath"],
    excerpt:
      "The ceiling came out so the old drains could be replaced with new PVC before the kitchen went back in.",
    cover: "03",
    paragraphs: [
      "A customer was remodeling their kitchen and had a great idea: remove the ceiling and expose all the plumbing before putting a brand new kitchen below.",
      "We started by cutting out all the old drain lines, including the stack. Then we installed all new PVC piping for the entire bathroom. Now the customer has nothing to worry about moving forward.",
    ],
    notes: [],
    photos: [
      {
        id: "01",
        alt: "Close-up of the old galvanized drain lines and fittings before they were cut out.",
      },
      {
        id: "02",
        alt: "New white PVC in the opened ceiling, with the old metal stack still in the frame.",
      },
      {
        id: "03",
        alt: "New PVC drain and vent piping run through the joists for the remodel.",
      },
      {
        id: "04",
        alt: "Another view of the new PVC drain lines in the opened ceiling.",
      },
      {
        id: "05",
        alt: "New PVC fittings and branches installed where the old drains were removed.",
      },
      {
        id: "06",
        alt: "The new PVC piping tied into the stack.",
      },
      {
        id: "07",
        alt: "A wider view of the finished PVC layout above the kitchen remodel.",
      },
    ],
  },
  {
    slug: "sewer-camera-inspection",
    title: "Sewer camera inspection",
    date: "2026-09-09",
    facebookUrl: "https://www.facebook.com/reel/1387272456276358",
    videoOnly: true,
    categories: ["sewer-drain", "video"],
    excerpt:
      "We ran a camera through the sewer, found the problem, and came back to take care of it.",
    paragraphs: [
      "We ran a camera through the sewer to find the problem, then located exactly where it was. We came back and got it taken care of.",
    ],
    notes: [],
    photos: [],
  },
  {
    slug: "house-trap-replacement",
    title: "Inside house trap replacement",
    date: "2026-08-31",
    facebookUrl:
      "https://www.facebook.com/Coulehan724/posts/pfbid0gLb6h9AY9pwJ9Qu7muign54FLmg3eyAUu39upw4QWd3PsrwuXMNPfEECHqMB4sbVl",
    videoOnly: false,
    categories: ["sewer-drain"],
    excerpt: "An inside house trap, dug out and replaced over the weekend.",
    cover: "02",
    paragraphs: [
      "Another inside house trap replacement, completed today from the weekend.",
    ],
    notes: [],
    photos: [
      {
        id: "01",
        alt: "Basement stairwell opened up during an inside house trap replacement.",
      },
      {
        id: "02",
        alt: "The house trap exposed in the floor during replacement.",
      },
      {
        id: "03",
        alt: "Close view of the house trap and the piping around it.",
      },
      {
        id: "04",
        alt: "Replacement piping in the opened floor.",
      },
      {
        id: "05",
        alt: "Another angle of the house trap replacement.",
      },
      {
        id: "06",
        alt: "The excavated floor after the inside house trap was replaced.",
      },
    ],
  },
  {
    slug: "spring-well-filtration",
    title: "Spring well filtration and UV",
    date: "2026-08-24",
    facebookUrl:
      "https://www.facebook.com/Coulehan724/posts/pfbid0zRLHmMtHHarENzjL3Jh1b7R7mpHWhJaRUYZhgGNVhzZ4sZYWE8xzeTeWNhk447THl",
    videoOnly: false,
    categories: ["water-service"],
    excerpt:
      "A whole-house spring well filtration system with UV, piped with a bypass and isolation valves.",
    cover: "01",
    paragraphs: [
      "Spring well filtration system with a UV light system, installed for an entire house potable water system. All piping was installed with a bypass and isolation valves.",
      "We don’t do these systems too often, but we do recommend this system for anyone looking. If you’re interested, give us a call.",
    ],
    notes: [],
    photos: [
      {
        id: "01",
        alt: "Filtration tanks and a UV unit piped with a bypass for a whole-house spring well system.",
      },
      {
        id: "02",
        alt: "Closer view of the UV light and the filtration piping, with isolation valves.",
      },
    ],
  },
  {
    slug: "bathroom-rough-in",
    title: "Second-floor bathroom rough-in",
    date: "2026-08-13",
    facebookUrl:
      "https://www.facebook.com/Coulehan724/posts/pfbid02Xk9p6weyeMmPWWDbXfdwNG2sXeyuHnJdTACTPneryhB3cGLKPmYADSdnYsDKXrDNl",
    videoOnly: false,
    categories: ["kitchen-bath"],
    excerpt:
      "New drain lines for a toilet, sink, and bathtub on the second floor.",
    cover: "02",
    paragraphs: [
      "A quick bathroom rough-in, with new drain lines going to a toilet, sink, and bathtub on the second floor. Keep us in mind for all your remodeling needs.",
    ],
    notes: [],
    photos: [
      {
        id: "01",
        alt: "Open floor joists with new drain lines for a second-floor bathroom.",
      },
      {
        id: "02",
        alt: "New PVC drains laid out for a toilet, sink, and bathtub.",
      },
      {
        id: "03",
        alt: "PVC fittings and branches in the joist bay.",
      },
      {
        id: "04",
        alt: "Another angle of the second-floor bathroom rough-in.",
      },
      {
        id: "05",
        alt: "A wider view of the new bathroom drain lines.",
      },
    ],
  },
  {
    slug: "video-2026-08-11",
    title: "Video post, August 11, 2026",
    date: "2026-08-11",
    facebookUrl: "https://www.facebook.com/reel/902562755801471",
    videoOnly: true,
    categories: ["video"],
    excerpt:
      "A Facebook video with no written description.",
    paragraphs: [
      "Jerry posted a video on this date. The post has no written description.",
    ],
    notes: [],
    photos: [],
  },
  {
    slug: "rinnai-combi-unit",
    title: "Rinnai combi unit",
    date: "2026-08-03",
    facebookUrl:
      "https://www.facebook.com/Coulehan724/posts/pfbid02ZHbWcvnPykbCZ2HFLHjjtH495VuUCNn5dC6kUbdzJPQwPLFsbiTrEDQDFe1Fs9X7l",
    videoOnly: false,
    categories: ["boilers"],
    excerpt:
      "A new Rinnai combi unit, with before-and-after photos of the install.",
    cover: "03",
    paragraphs: [
      "A new Rinnai combi unit, recently installed. Here are some before-and-after photos of this unit.",
      "If you’re interested in getting more information, please contact us with any questions.",
    ],
    notes: [],
    photos: [
      {
        id: "01",
        alt: "The old tank water heater before it was removed.",
      },
      {
        id: "02",
        alt: "The utility space opened up for the new combi unit.",
      },
      {
        id: "03",
        alt: "The new Rinnai combi unit installed on the wall, with piping connected.",
      },
      {
        id: "04",
        alt: "Piping and valves at the installed Rinnai combi unit.",
      },
      {
        id: "05",
        alt: "Another angle of the Rinnai combi unit after installation.",
      },
      {
        id: "06",
        alt: "A wider view of the finished Rinnai combi install.",
      },
    ],
  },
  {
    slug: "bathroom-makeover",
    title: "Basement bathroom rough-in",
    date: "2026-08-01",
    facebookUrl:
      "https://www.facebook.com/Coulehan724/posts/pfbid02R1j6aQUgiv7TDSGM5126KbyuJcK6K8XFAxQVuyNaQHtuVG3qjnQnfa2mSfiMDPMBl",
    videoOnly: false,
    categories: ["kitchen-bath"],
    excerpt:
      "A basement powder room expanded with a shower, tied onto the existing plumbing.",
    cover: "03",
    paragraphs: [
      "Completed this bathroom rough-in over the last week. This was originally a powder room in the basement. The customer wanted to add a shower and expand the bathroom.",
      "We were able to tie on to the existing plumbing and run new drain lines for a toilet, sink, and shower. Keep us in mind for all of your plumbing needs.",
    ],
    notes: [],
    photos: [
      {
        id: "01",
        alt: "The basement bathroom opened up for a rough-in.",
      },
      {
        id: "02",
        alt: "New drain lines tied onto the existing basement plumbing.",
      },
      {
        id: "03",
        alt: "Shower drain and new piping for the expanded basement bathroom.",
      },
      {
        id: "04",
        alt: "The rough-in for a toilet, sink, and shower in the basement.",
      },
    ],
  },
  {
    slug: "basement-waterproofing",
    title: "Basement waterproofing and French drain",
    date: "2026-07-16",
    facebookUrl:
      "https://www.facebook.com/Coulehan724/posts/pfbid0FtVgyVw1GujtMECpvvStb972T9qHZwjJqjs7adTBy1TbgnZg3EQfsC93cyWUN8y5l",
    videoOnly: false,
    categories: ["waterproofing"],
    excerpt:
      "Water behind a basement wall, corrected with a French drain, dimple board, and a sump pump.",
    cover: "02",
    paragraphs: [
      "Have we mentioned that we also do waterproofing? This basement was getting water behind the wall in the back right corner.",
      "We removed all the drywall and excavated down to the footer, installing a 4-inch drain pipe. We then drilled 7/8-inch holes through the block and installed dimple board to direct the water underground to the new French drain. A sump pump was installed with a 1-1/2 inch discharge line to the outside downspout.",
      "Keep us in mind for all your waterproofing needs.",
    ],
    notes: [],
    photos: [
      {
        id: "01",
        alt: "Basement corner where water was coming in behind the finished wall.",
      },
      {
        id: "02",
        alt: "Footer excavated for a French drain, with dimple board against the block wall.",
      },
    ],
  },
  {
    slug: "sewer-repair",
    title: "Terracotta sewer replaced with PVC",
    date: "2026-07-08",
    facebookUrl:
      "https://www.facebook.com/Coulehan724/posts/pfbid02ua7haGYTJWBL8dedvowkdNysBJdaSjpxS7cEKGEdjbjTW48z7GPTraCowVwoZtd2l",
    videoOnly: false,
    categories: ["sewer-drain"],
    excerpt:
      "Thirty feet of old terracotta taken out and replaced with schedule 40 PVC in gravel.",
    cover: "08",
    paragraphs: [
      "Another sewer repair completed. Thirty feet of old terracotta piping was removed and replaced with PVC schedule 40, embedded in gravel.",
      "Keep us in mind for all your plumbing needs.",
    ],
    notes: [],
    photos: [
      { id: "01", alt: "Broken terracotta sewer pipe before it was removed." },
      { id: "02", alt: "The sewer line excavated for replacement." },
      { id: "03", alt: "Old pipe exposed in the trench." },
      { id: "04", alt: "Digging out the old terracotta sewer line." },
      { id: "05", alt: "The trench opened along the sewer line." },
      { id: "06", alt: "Another view of the sewer excavation." },
      { id: "07", alt: "New PVC sewer pipe set in the trench." },
      { id: "08", alt: "New schedule 40 PVC sewer pipe embedded in gravel." },
      { id: "09", alt: "The replacement PVC pipe bedded in gravel." },
      { id: "10", alt: "Gravel placed around the new PVC sewer line." },
      { id: "11", alt: "The trench during backfill." },
      { id: "12", alt: "Backfilling over the new sewer line." },
      { id: "13", alt: "The yard as the trench is closed up." },
      { id: "14", alt: "The work area after the sewer repair." },
    ],
  },
  {
    slug: "bathtub-shower-conversion",
    title: "Bathtub to shower conversion",
    date: "2026-06-23",
    facebookUrl:
      "https://www.facebook.com/Coulehan724/posts/pfbid08mgTyR2v3GNK5jgTezUV6vdSbFcFfpHNhk9hbVxtARqRCjMnEyQSoVMpwKbsgYtil",
    videoOnly: false,
    categories: ["kitchen-bath"],
    excerpt:
      "The old tub came out, the drain went to 2-inch PVC, and a Delta shower pan was in within 8 hours.",
    cover: "05",
    paragraphs: [
      "Bathtub to shower conversion. We removed the old bathtub, updated the drain line to a 2-inch PVC drain, and installed a new Delta shower pan within 8 hours. That made the project easy and efficient for the customer.",
      "Keep us in mind for all your bathroom remodels or updates.",
    ],
    notes: [],
    photos: [
      { id: "01", alt: "The old bathtub before it was removed." },
      { id: "02", alt: "The tub removed and the drain opened up." },
      { id: "03", alt: "New 2-inch PVC drain for the shower." },
      { id: "04", alt: "Setting the new Delta shower pan." },
      { id: "05", alt: "The new shower pan installed in place of the bathtub." },
      { id: "06", alt: "The shower conversion nearing the finish." },
      { id: "07", alt: "Another view of the new shower base." },
    ],
  },
  {
    slug: "restaurant-sewer-line-prep",
    title: "Sewer line scoped at a restaurant",
    date: "2026-06-23",
    facebookUrl: "https://www.facebook.com/reel/844126828498410",
    videoOnly: true,
    categories: ["sewer-drain", "commercial", "video"],
    excerpt:
      "A restaurant with repeated sewage backups. The basement sewer was scoped and laid out for a replacement.",
    paragraphs: [
      "Getting ready for a sewer line replacement in the next couple of weeks. The customer has been dealing with multiple sewage backups at the restaurant. We will be replacing approximately 20 to 30 feet of the main sewer line in the basement.",
      "Today we’ve got the entire sewer scoped and laid out.",
    ],
    notes: [],
    photos: [],
  },
  {
    slug: "laundry-hookups",
    title: "Laundry sink and washer hookups",
    date: "2026-06-22",
    facebookUrl: "https://www.facebook.com/reel/997734043056104",
    videoOnly: true,
    categories: ["repairs", "video"],
    excerpt:
      "Old laundry sink, faucet, and washing machine hookups that are leaking. Give us a call.",
    paragraphs: [
      "Sometimes the simplest job can be very satisfying. If you have an old laundry sink, faucet, and washing machine hookups that are old and leaking, give us a call.",
    ],
    notes: [],
    photos: [],
  },
  {
    slug: "water-service-line",
    title: "Water service line replacement",
    date: "2026-06-16",
    facebookUrl:
      "https://www.facebook.com/Coulehan724/posts/pfbid0HxdKVfnCKdwseEL4pLCrFwmfwto56kYcjeBNS8qrDJ6cKoZoxExKRuQPkfF48pLXI",
    videoOnly: false,
    categories: ["water-service"],
    excerpt:
      "About 30 feet of water service, from the curb to inside the basement, after an underground leak.",
    cover: "05",
    paragraphs: [
      "A new water service line, completed over the weekend. We were called out last week to inspect a potential leak underground. Due to the location of the leak and the condition of the line, we replaced approximately 30 feet from the curb to inside the basement.",
      "Keep us in mind for all your plumbing needs.",
    ],
    notes: [],
    photos: [
      { id: "01", alt: "Locating the underground water service leak." },
      { id: "02", alt: "The trench opened from the curb side toward the house." },
      { id: "03", alt: "The old water service line exposed." },
      { id: "04", alt: "New water service pipe laid in the trench." },
      { id: "05", alt: "The new water service pipe bedded in the excavation." },
      { id: "06", alt: "Another length of the new water service line." },
      { id: "07", alt: "The new line running toward the basement." },
      { id: "08", alt: "The water service trench before it was closed up." },
    ],
  },
  {
    slug: "scharmyn-park-toilets",
    title: "New toilets at Scharmyn Field",
    date: "2026-04-12",
    facebookUrl:
      "https://www.facebook.com/Coulehan724/posts/pfbid02JntyE2URE8fMpWhdy3XjHpWZKXAXfjLPLPa2uXANqSpcaoQG9w58MinthDb6Bh5Sl",
    videoOnly: false,
    categories: ["commercial"],
    excerpt:
      "Three new toilets at a baseball field for the West View / Ross Township community.",
    cover: "03",
    paragraphs: [
      "Had the pleasure of helping out the West View / Ross Township community with the installation of 3 new toilets at the baseball field. A few families in the area have been…",
    ],
    notes: [],
    photos: [
      { id: "01", alt: "The restroom building at the baseball field." },
      { id: "02", alt: "Toilets inside the field restroom before the new ones were finished." },
      { id: "03", alt: "New toilets installed in the baseball field restroom." },
      { id: "04", alt: "Supply lines and shutoff valves for the new toilets." },
      { id: "05", alt: "Another view of the new toilets." },
      { id: "06", alt: "The installed toilets in the restroom." },
      { id: "07", alt: "A wider view inside the field restroom." },
      { id: "08", alt: "Exterior of the restroom building at the field." },
      { id: "09", alt: "The field restroom building from outside." },
    ],
  },
  {
    slug: "palette-nail-lash-bar",
    title: "Plumbing for Palette Nail and Lash Bar",
    date: "2026-03-09",
    facebookUrl:
      "https://www.facebook.com/Coulehan724/posts/pfbid028hRQ1XLeEtL8hM6VTH9PxopEfY3KH7yEvRteEbB9TJ6Sh3JBr5EbStYMV2U4QT8Dl",
    videoOnly: false,
    categories: ["commercial"],
    excerpt:
      "Two pedicure chairs had no plumbing. New drains, water lines, and mixing valves were in before Monday.",
    cover: "04",
    paragraphs: [
      "We finally had a weekend off, until a friend reached out on Wednesday about a new salon they had just moved into. They were unaware that there was no plumbing for their two pedicure chairs. We went down that evening to take a look. Two days later we pulled up and got it done, ready to use for Monday.",
      "All new PVC drain and water lines were installed, with thermostatic mixing valves at each chair to limit the temperature and prevent scalding.",
      "This job was done for Zia and Justina at Palette Nail and Lash Bar. Mother and daughter owned, with years of experience, and just all around a great place to be. It was a pleasure helping them out, and we wish them the best of luck with many years of success to come.",
    ],
    notes: [],
    photos: [
      { id: "01", alt: "Pedicure chairs in the salon that needed new plumbing." },
      { id: "02", alt: "Under the pedicure chairs before the new lines were finished." },
      { id: "03", alt: "Routing new PVC drain and water lines to the chairs." },
      {
        id: "04",
        alt: "New PVC drain and water lines with thermostatic mixing valves at the pedicure chairs.",
      },
      { id: "05", alt: "The pedicure chairs after the new plumbing was installed." },
    ],
  },
  {
    slug: "navien-combo-unit",
    title: "Navien combo unit",
    date: "2024-12-14",
    facebookUrl:
      "https://www.facebook.com/Coulehan724/posts/pfbid0SUoVFWKHMRUcmk6A3THPJWKRv5E1yHxCH7efePC9Xysr4rfNzRuHd6iuiPY8eTGZl",
    videoOnly: false,
    categories: ["boilers"],
    excerpt:
      "A Navien combo unit for domestic hot water and radiant floor heating.",
    cover: "01",
    paragraphs: [
      "An upgrade with the new Navien combo unit for domestic hot water and radiant floor heating.",
    ],
    notes: [],
    photos: [
      {
        id: "01",
        alt: "A Navien combo unit installed on a utility wall, piped for hot water and heat.",
      },
      { id: "02", alt: "Piping connections at the Navien combo unit." },
      { id: "03", alt: "Another view of the installed Navien combo unit." },
      { id: "04", alt: "Supply and heating lines at the Navien unit." },
      { id: "05", alt: "A closer view of the Navien combo unit." },
    ],
  },
];

export function jobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function coverId(job: Job): string | undefined {
  return job.cover ?? job.photos[0]?.id;
}
