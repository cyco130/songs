import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import rakkas from "rakkasjs/vite-plugin";

process.env.RAKKAS_DEFAULT_APP_TITLE = "Songs";

export default defineConfig({
	plugins: [tsconfigPaths(), react(), rakkas({ prerender: true })],
});
