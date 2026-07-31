import fs from "node:fs";
import { fetchStats } from "./grs/src/fetchers/stats.js";
import { fetchTopLanguages } from "./grs/src/fetchers/top-languages.js";
import { renderStatsCard } from "./grs/src/cards/stats.js";
import { renderTopLanguages } from "./grs/src/cards/top-languages.js";

const username = "Siiichenggg";

const stats = await fetchStats(username, true);
fs.mkdirSync("generated", { recursive: true });
fs.writeFileSync(
  "generated/stats.svg",
  renderStatsCard(stats, { show_icons: true, theme: "tokyonight" }),
);

const langs = await fetchTopLanguages(username);
fs.writeFileSync(
  "generated/top-langs.svg",
  renderTopLanguages(langs, { layout: "compact", langs_count: 8, theme: "tokyonight" }),
);

console.log("generated", fs.readdirSync("generated"));
