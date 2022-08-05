import { defineConfig } from "astro/config";
import node from "@astrojs/node";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [lit()],
  adapter: node(),
});
