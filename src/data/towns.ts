/** South Hills towns Coulehan Plumbing lists. No landmarks, stats, or job claims. */

export type Town = {
  slug: string;
  name: string;
  intro: string;
  detail: string;
  servicesLead: string;
  whyLead: string;
  callLine: string;
  description: string;
  /** Slugs of other listed towns to link. */
  nearby: readonly string[];
};

export const towns: readonly Town[] = [
  {
    slug: "brookline",
    name: "Brookline",
    intro:
      "Coulehan Plumbing works in Brookline and across Pittsburgh's South Hills. The company is owner-operated and based in Pittsburgh, PA 15226.",
    detail:
      "Call about a leaking fixture, a water heater that has quit, a trap that smells or drips, or a sewer line that needs to be cleaned or seen with a camera. Residential and commercial jobs are both welcome.",
    servicesLead:
      "These are the service pages for the work we do in Brookline. The full list, including repairs and 24-hour emergency service, is on the services page.",
    whyLead: "A Brookline call is handled by the same owner-operated company.",
    callLine: "For a plumber in Brookline, call (412) 513-9335.",
    description:
      "Plumber in Brookline, PA. Owner-operated Coulehan Plumbing, a Master Plumber serving Pittsburgh since 2014. Open 24/7. Call (412) 513-9335.",
    nearby: ["beechview", "overbrook", "dormont", "carrick"],
  },
  {
    slug: "beechview",
    name: "Beechview",
    intro:
      "Need a plumber in Beechview? Coulehan Plumbing covers this South Hills neighborhood from our Pittsburgh shop.",
    detail:
      "We repair plumbing, replace hot water tanks, change traps, install water filtration, and work on sewer lines for homes and businesses.",
    servicesLead:
      "Start with the service that matches the job in Beechview, or open the services page for repairs, drains, and emergency work.",
    whyLead: "Beechview gets the same plumber, the same hours, and the same phone number.",
    callLine: "Call (412) 513-9335 to reach Coulehan Plumbing about a Beechview job.",
    description:
      "Beechview, PA plumber from Coulehan Plumbing LLC. Master Plumber, open 24 hours a day, 7 days a week. Serving Pittsburgh since 2014. Call (412) 513-9335.",
    nearby: ["brookline", "banksville", "dormont", "mt-lebanon"],
  },
  {
    slug: "banksville",
    name: "Banksville",
    intro:
      "Banksville is part of the South Hills area Coulehan Plumbing serves. Jerry Coulehan is a Master Plumber and runs the company.",
    detail:
      "Homes and businesses can call for repairs, a water heater, a trap under a sink or tub, filtration, or a sewer line. There is one company and one number.",
    servicesLead:
      "The pages below cover the main services we bring to Banksville. Other work, from drain cleaning to remodels, is listed on the services page.",
    whyLead: "What you can count on for a Banksville call is listed here, and nothing beyond it.",
    callLine: "Call (412) 513-9335 for plumbing in Banksville.",
    description:
      "Plumbing in Banksville, PA from Coulehan Plumbing. Owner-operated Master Plumber in the South Hills, open 24/7. Call (412) 513-9335.",
    nearby: ["beechview", "dormont", "mt-lebanon"],
  },
  {
    slug: "carrick",
    name: "Carrick",
    intro:
      "Carrick is one of the Pittsburgh neighborhoods on our service list. Coulehan Plumbing has been serving Pittsburgh since 2014.",
    detail:
      "The work is ordinary plumbing done carefully: repairs, hot water, traps, filtration, and sewer lines that may need cleaning, a camera, or a repair.",
    servicesLead:
      "Pick a Carrick service below, or go to the services page if the job is a repair, a remodel, or an emergency.",
    whyLead: "Carrick customers get the owner-operated shop, not a different brand.",
    callLine: "To reach a plumber in Carrick, call (412) 513-9335.",
    description:
      "Plumber in Carrick, PA. Coulehan Plumbing LLC is owner-operated, BBB A+ rated, and open 24/7. Call (412) 513-9335.",
    nearby: ["overbrook", "brookline", "baldwin", "brentwood"],
  },
  {
    slug: "overbrook",
    name: "Overbrook",
    intro:
      "Coulehan Plumbing serves Overbrook along with the other South Hills neighborhoods and towns on our service area page.",
    detail:
      "Call for residential or commercial plumbing: a repair, a hot water tank, a trap, a filtration system, or sewer work.",
    servicesLead:
      "These links go to the service pages we use for Overbrook jobs. Repairs, drains, and 24-hour emergency service are on the main services page.",
    whyLead: "The reasons people call Coulehan in Overbrook are the same facts we publish everywhere else.",
    callLine: "Call (412) 513-9335 and ask for a plumber in Overbrook.",
    description:
      "Overbrook, PA plumber. Coulehan Plumbing is a Master Plumber, owner-operated, serving Pittsburgh since 2014. Open 24/7. Call (412) 513-9335.",
    nearby: ["carrick", "brookline", "brentwood", "whitehall"],
  },
  {
    slug: "baldwin",
    name: "Baldwin",
    intro:
      "Baldwin is in the South Hills, and it is on the Coulehan Plumbing service list. The company is based in Pittsburgh, PA 15226.",
    detail:
      "We come for repairs, hot water tank replacement, trap replacement, water filtration, and sewer repair. A camera inspection is part of sewer work when the line has to be seen.",
    servicesLead:
      "Read the Baldwin service pages here. For the rest of the work, including commercial plumbing, start at the services page.",
    whyLead: "Baldwin calls are answered by this owner-operated company, day and night.",
    callLine: "For plumbing in Baldwin, call (412) 513-9335.",
    description:
      "Baldwin, PA plumbing from Coulehan Plumbing LLC. Open 24 hours, 7 days a week. Master Plumber, serving Pittsburgh since 2014. Call (412) 513-9335.",
    nearby: ["carrick", "whitehall", "brentwood", "castle-shannon"],
  },
  {
    slug: "brentwood",
    name: "Brentwood",
    intro:
      "Homeowners and businesses in Brentwood can call Coulehan Plumbing directly. Jerry Coulehan is a Master Plumber.",
    detail:
      "Tell us whether it is a repair, a water heater, a trap, filtration, or a sewer line. We do that work in Brentwood and in the South Hills towns around it.",
    servicesLead:
      "Each service we offer in Brentwood has its own page. Emergency service and the longer list live on the services page.",
    whyLead: "Here is the short version of who is doing the work in Brentwood.",
    callLine: "Call (412) 513-9335 for a plumber in Brentwood.",
    description:
      "Plumber in Brentwood, PA. Owner-operated Coulehan Plumbing, BBB A+ and open 24/7. Serving Pittsburgh since 2014. Call (412) 513-9335.",
    nearby: ["whitehall", "baldwin", "carrick", "overbrook"],
  },
  {
    slug: "whitehall",
    name: "Whitehall",
    intro:
      "Coulehan Plumbing serves Whitehall, in Pittsburgh's South Hills. The phone is answered under the same hours we post everywhere: open 24 hours, 7 days a week.",
    detail:
      "Jobs include plumbing repairs, water heaters, traps that leak or hold an odor, water filtration, and sewer lines.",
    servicesLead:
      "Use these pages for Whitehall services. If you do not see the job, the services page has repairs, drains, boilers, and more.",
    whyLead: "Whitehall is covered by the same shop that serves the rest of this list.",
    callLine: "Call (412) 513-9335 and ask for plumbing in Whitehall.",
    description:
      "Whitehall, PA plumber. Coulehan Plumbing LLC, a Master Plumber serving Pittsburgh since 2014. Open 24/7. Call (412) 513-9335.",
    nearby: ["brentwood", "baldwin", "castle-shannon", "bethel-park"],
  },
  {
    slug: "dormont",
    name: "Dormont",
    intro:
      "Dormont is on our South Hills list. Coulehan Plumbing LLC is owner-operated and has been serving Pittsburgh since 2014.",
    detail:
      "Call from a house or a business. We handle repairs, hot water tanks, trap replacement, filtration, and sewer cleaning, camera inspection, and repair.",
    servicesLead:
      "The Dormont service links are below. The services page is the place for emergency calls and the rest of the work.",
    whyLead: "Nothing about a Dormont visit changes who the company is.",
    callLine: "For a plumber in Dormont, call (412) 513-9335.",
    description:
      "Plumber in Dormont, PA. Owner-operated Coulehan Plumbing, open 24 hours a day. BBB A+ rated. Call (412) 513-9335.",
    nearby: ["mt-lebanon", "beechview", "brookline", "banksville"],
  },
  {
    slug: "mt-lebanon",
    name: "Mt. Lebanon",
    intro:
      "Coulehan Plumbing works in Mt. Lebanon and the surrounding South Hills. The company is owner-operated.",
    detail:
      "Residential and commercial calls cover repairs, hot water tank replacement, traps, water filtration, and sewer repair.",
    servicesLead:
      "These are the Mt. Lebanon service pages. Open the services page for drain cleaning, remodels, waterproofing, and 24-hour emergency service.",
    whyLead: "Mt. Lebanon customers can check the same public facts we list for every town.",
    callLine: "Call (412) 513-9335 for a plumber in Mt. Lebanon.",
    description:
      "Mt. Lebanon, PA plumber. Coulehan Plumbing LLC is owner-operated and open 24/7. Master Plumber, serving Pittsburgh since 2014. Call (412) 513-9335.",
    nearby: ["dormont", "castle-shannon", "beechview", "upper-st-clair"],
  },
  {
    slug: "castle-shannon",
    name: "Castle Shannon",
    intro:
      "Castle Shannon is in the South Hills area Coulehan Plumbing covers. Serving Pittsburgh since 2014.",
    detail:
      "Whether you need a small repair or help with a sewer line, call and describe it. We also replace water heaters and traps and install water filtration.",
    servicesLead:
      "Castle Shannon service pages are linked here. Everything else we do is grouped on the services page.",
    whyLead: "The company behind a Castle Shannon call is Coulehan Plumbing LLC.",
    callLine: "Call (412) 513-9335 for plumbing in Castle Shannon.",
    description:
      "Plumbing in Castle Shannon, PA from Coulehan Plumbing. Open 24/7, BBB A+, serving Pittsburgh since 2014. Call (412) 513-9335.",
    nearby: ["mt-lebanon", "whitehall", "bethel-park", "baldwin"],
  },
  {
    slug: "bethel-park",
    name: "Bethel Park",
    intro:
      "Bethel Park is one of the South Hills communities Coulehan Plumbing serves. Jerry Coulehan is a Master Plumber.",
    detail:
      "We do plumbing repairs, water heaters, traps, filtration systems, and sewer lines for homes and businesses in Bethel Park.",
    servicesLead:
      "Choose a Bethel Park service below. For emergency service and the wider list, use the services page.",
    whyLead: "Bethel Park work comes from this owner-operated Pittsburgh company.",
    callLine: "To reach Coulehan Plumbing in Bethel Park, call (412) 513-9335.",
    description:
      "Plumber in Bethel Park, PA. Coulehan Plumbing LLC, a Master Plumber, owner-operated and open 24/7. Call (412) 513-9335.",
    nearby: ["upper-st-clair", "castle-shannon", "whitehall", "peters-township"],
  },
  {
    slug: "upper-st-clair",
    name: "Upper St. Clair",
    intro:
      "Upper St. Clair is on the Coulehan Plumbing service list, with the other South Hills towns we cover.",
    detail:
      "Call about repairs, a hot water tank, a trap, water filtration, or a sewer line. The work is residential and commercial.",
    servicesLead:
      "The service pages for Upper St. Clair are below. Repairs, boilers, drains, and emergency service are on the services page.",
    whyLead: "An Upper St. Clair job is still Coulehan Plumbing: one owner, one number.",
    callLine: "Call (412) 513-9335 for a plumber in Upper St. Clair.",
    description:
      "Upper St. Clair, PA plumber. Owner-operated Coulehan Plumbing, open 24 hours, 7 days a week. Serving Pittsburgh since 2014. Call (412) 513-9335.",
    nearby: ["bethel-park", "mt-lebanon", "peters-township", "castle-shannon"],
  },
  {
    slug: "peters-township",
    name: "Peters Township",
    intro:
      "Peters Township is one of the South Hills communities Coulehan Plumbing serves. We are based in Pittsburgh, PA 15226.",
    detail:
      "The calls we take there are the same kinds of jobs: repairs, water heaters, traps, filtration, and sewer work for houses and businesses.",
    servicesLead:
      "Peters Township service pages are listed here. The services page covers the rest, including 24-hour emergency plumbing.",
    whyLead: "Peters Township is on the list, and the company behind it does not change.",
    callLine: "For a plumber in Peters Township, call (412) 513-9335.",
    description:
      "Plumber in Peters Township, PA. Coulehan Plumbing LLC, Master Plumber, serving Pittsburgh since 2014. Open 24/7. Call (412) 513-9335.",
    nearby: ["upper-st-clair", "bethel-park", "mt-lebanon"],
  },
];

export function townBySlug(slug: string): Town | undefined {
  return towns.find((town) => town.slug === slug);
}
