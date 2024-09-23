import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-webpack5-compiler-swc",
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {
			builder: {
				useSWC: true,
			},
		},
	},
	swc: () => ({
		jsc: {
			transform: {
				react: {
					runtime: "automatic",
				},
			},
		},
	}),
	docs: {
		autodocs: "tag",
	},
};
export default config;
