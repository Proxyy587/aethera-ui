import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		languageOptions: {
			globals: globals.browser,
		},
		rules: {
			// Disable 'react/react-in-jsx-scope' as it's not needed in React 17+
			"react/react-in-jsx-scope": "off",

			// Customize 'react/no-unescaped-entities' to allow certain entities
			"react/no-unescaped-entities": [
				"error",
				{
					forbid: [">", '"', "}"],
				},
			],
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
];
