import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";
import image from "@astrojs/image";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node(),
  integrations: [react(), image(), compress()],
});
