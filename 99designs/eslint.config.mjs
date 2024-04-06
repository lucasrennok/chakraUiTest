import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
  recommendedConfig: pluginReactConfig,
});

const eslintConfig = {
  plugins: {
    react: {
      ...pluginReactConfig.plugins.react,
      version: "detect",
    },
  },
  rules: {
    ...pluginReactConfig.rules,
    ...compat.extends("airbnb").rules,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

export default eslintConfig;
