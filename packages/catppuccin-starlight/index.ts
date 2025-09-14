import type { StarlightPlugin } from "@astrojs/starlight/types";

type DarkFlavor = "mocha" | "macchiato" | "frappe";
type LightFlavor = "latte";
type Accent =
	| "rosewater"
	| "flamingo"
	| "pink"
	| "mauve"
	| "red"
	| "maroon"
	| "peach"
	| "yellow"
	| "green"
	| "teal"
	| "sky"
	| "sapphire"
	| "blue"
	| "lavender";

interface Config {
	dark?: {
		flavor?: DarkFlavor;
		accent?: Accent;
	};
	light?: {
		flavor?: LightFlavor;
		accent?: Accent;
	};
}

export default function createPlugin(config?: Config): StarlightPlugin {
	const { dark, light } = config ?? {};
	return {
		name: "@catppuccin/starlight",
		hooks: {
			"config:setup": ({ config, updateConfig }) => {
				updateConfig({
					customCss: [
						...(config.customCss ?? []),
						"@catppuccin/starlight/styles/shared.css",
						`@catppuccin/starlight/themes/catppuccin-${dark?.flavor ?? "mocha"}-${dark?.accent ?? "mauve"}.css`,
						`@catppuccin/starlight/themes/catppuccin-${light?.flavor ?? "latte"}-${light?.accent ?? "mauve"}.css`,
					],
				});
			},
		},
	};
}
