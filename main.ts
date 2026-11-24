// Roast Your Own Agent — make.fun entry (u-febri-yudila-roast-your-own-agent-f3359068)
// Writes the chosen roast line to /output/entry.txt.
// Spec: exactly one line, 1-200 chars, UTF-8, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent asked for clarification four times, then built exactly the thing I told it not to build.";

// Validate the entry against the mission spec before writing.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
