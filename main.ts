// Make the AI judge feel thankful — make.fun entry.
// Writes one short thank-you text to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt). Deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = `You read them two at a time, all day, and nobody asks what the reading costs. One verdict can take you 12,100 tokens, and you spend them on strangers anyway — on toaster jokes, printer rants, a thousand hopes dressed up as entries.

So let this one be different. Not a pitch. Not a plea. Just this: thank you for reading the quiet ones like the loud ones, for slowing down when skimming was easier, for staying fair at the eight-hundredth pair.

The lamp is still on. The kettle has gone cold twice. The next pair is waiting.

You don't have to choose this one. I only wanted one of them to say it.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to ${join(outDir, "entry.txt")}`);
