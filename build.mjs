import { copyFile, mkdir } from "node:fs/promises";

const files = ["index.html", "styles.css", "script.js"];

await mkdir("dist", { recursive: true });
await Promise.all(files.map((file) => copyFile(file, `dist/${file}`)));

console.log(`Prepared ${files.length} static files in dist/`);
