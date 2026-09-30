const TAILS = [
  " Coulehan Plumbing, Pittsburgh.",
  " Call (412) 513-9335.",
  " Open 24/7.",
  " Since 2014.",
];

/** Stretch a factual meta description into the 140–160 character window. */
export function fitMeta(base: string): string {
  let text = base.replace(/\s+/g, " ").trim();
  for (const tail of TAILS) {
    if (text.length >= 140) break;
    if (text.length + tail.length <= 160) text += tail;
  }
  return text;
}
