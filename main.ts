import { mkdirSync, writeFileSync } from "node:fs";

// Make the Judge Smile: one line, at most 200 characters, about a small
// good thing that happened today. The line turns on a small expectation
// reversal (ready to be annoyed, then delighted), with two concrete
// details — the time, and the food left on the doorstep — and a note
// quoted in its own words.
// Revised: open on the concrete time instead of "This morning", and let
// the note land with "just said" — the small shrug that makes the payoff
// feel overheard rather than written for the judge.
const LINE =
  "At 6:12 this morning my neighbour's rooster woke me and I was ready to be annoyed — until I found three warm pisang goreng on my doorstep with a note that just said: 'for the early bird.'";

if ([...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 characters of non-blank text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
