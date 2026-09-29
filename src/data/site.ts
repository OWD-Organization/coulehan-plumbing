export const site = {
  name: "Coulehan Plumbing LLC",
  owner: "Jerry Coulehan",
  ownerTitle: "Owner, Master Plumber",
  phoneDisplay: "(412) 513-9335",
  phoneTel: "+14125139335",
  email: "coulehanplumbing@gmail.com",
  city: "Pittsburgh",
  region: "PA",
  postalCode: "15226",
  addressLine: "Pittsburgh, PA 15226",
  facebook: "https://www.facebook.com/Coulehan724/",
  google: "https://g.co/kgs/sbPr35",
  website: "https://coulehanplumbing.com/",
  slogan: "One call that does it all.",
  /** Eyedropped from logo.jpg: pixel (0,0) is the logo ground. */
  navy: "#182033",
  /** Eyedropped from the water-drop face in logo.jpg. */
  drop: "#4199E1",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/service-area/", label: "Service Area" },
  { href: "/work/", label: "Examples of My Work" },
  { href: "/contact/", label: "Contact" },
] as const;

export function plumberJsonLd(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${site.website}#business`,
    name: site.name,
    slogan: site.slogan,
    url: site.website,
    image: new URL("/media/brand/logo-512.jpg", origin).href,
    telephone: "+1-412-513-9335",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Pittsburgh",
    },
    employee: {
      "@type": "Person",
      name: site.owner,
      jobTitle: site.ownerTitle,
    },
    sameAs: [site.facebook, site.google],
    description:
      "Owner-operated plumbing company in Pittsburgh, PA. Residential and commercial repairs, installs, remodels, drain cleaning, hydro jetting, sewer camera inspections, and 24-hour emergency service.",
    knowsAbout: [
      "Plumbing repair",
      "Drain cleaning",
      "Hydro jetting",
      "Sewer camera inspection",
      "Water heater installation",
      "Bathroom remodel plumbing",
      "Kitchen remodel plumbing",
      "Basement waterproofing",
    ],
  };
}
