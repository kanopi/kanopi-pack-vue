Kanopi Pack - Vue Support
======

The Kanopi Pack Vue module adds support to Webpack for Vue development and linting. Vue and associated libraries **are NOT** included in this package. The intent is for each front-end application to select the appropriate version (Vue 2.x or 3.x) for their use case.

# Linting Support

The ESLint parser `vue-eslint-parser` and associated plugin `eslint-plugin-vue` are included in this package, and can be combined with either the core Babel or Typescript parsers included in Kanopi Pack. 

To enable linting within Vue SFC (Single-File Component) files, you need to add the extension in your Kanopi Pack configuration, i.e.

```./assets/configuration/kanopi-pack.js
    ...
    "scripts": {
        ...
        "esLintFileTypes": "js,ts,vue" // This assumes the project also has both JS and TS files
        ...
    }
    ...
```

ESLint configurations are scoped within a particular directory. If you place all of your Vue apps in the `./assets/src/vue` folder, create an `.eslintrc.js` file there. 

Here is an example configuration to lint all scripts included different types of script blocks within Vue SFCs:

```./assets/src/configuration/.eslintrc.js
module.exports = {
    "root": true,
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/recommended",
    ],
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": {
            "js": "espree",
            "ts": "@typescript-eslint/parser",
            "template": "espree"
        },
        "requireConfigFile": false,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
        "indent": ["error", "tab"]
    }
}
```