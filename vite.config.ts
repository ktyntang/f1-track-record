import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const isDevelopment = mode === "development";

	return {
		plugins: [react(), tailwindcss() /*isDevelopment && mkcert()*/],
		resolve: {
			alias: {
				src: "/src",
			},
		},
	};
});
