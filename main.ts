// thinking (revised): grandma's one-word text about AI is "robooot".
// Revised take: a simple, warm, believable typo is funnier than a slick buzzword.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Own directory, derived from this module's URL so paths stay predictable.
const ownDir = fileURLToPath(new URL('.', import.meta.url));
void ownDir;

// hello: revised — a cheerful hello to whoever reads this little entry.
// Output location can be overridden; otherwise fall back to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// batch: revised — build the whole destination tree in one batch call.
mkdirSync(outputDir, { recursive: true });

// orders: revised — grandma's exact text, with no extra orders attached.
const word = 'robooot';

// bar: revised — write UTF-8 with no trailing newline, log the size at the bar once.
const target = join(outputDir, 'entry.txt');
writeFileSync(target, word, 'utf8');
console.log(Buffer.byteLength(word, 'utf8'));
