import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest honest appliance error, in the toaster's own flat voice:
// it admits its dial has no usable middle ground. One line, 94 chars.
const line =
  "Error E02: I burned your toast again. " +
  "There is no setting between 'warm bread' and 'charcoal'.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
