# rest-api-prisma-orm-mysql-jest-testing-express-typescript

Minimal README for the project. Add code, docs and other sections as your project grows.

## Installation

Install project dependencies:

```bash
npm install
```

Install TypeScript and useful dev tools for this project (saved as devDependencies):

```bash
npm i typescript ts-node @types/node @tsconfig/node22 -D
```

Create a TypeScript configuration file (`tsconfig.json`) with:

```bash
npx tsc --init
```

Or use the `@tsconfig/node22` base config by adding it to `tsconfig.json`'s `extends` field. Example `tsconfig.json` content:

```json
{
	"extends": "@tsconfig/node22/tsconfig.json",
	"compilerOptions": {
		"outDir": "dist",
		"rootDir": "src",
    "forceConsistentCasingInFileNames": true
	},
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Next steps

- Add `src/` with your TypeScript source and an entry point (for example `src/index.ts`).
- Add test setup (Jest) and Prisma schema if needed.

## Testing with Jest (TypeScript)

Install Jest and the TypeScript transformer plus types as dev dependencies:

```bash
npm i jest ts-jest @types/jest -D
```

Quick setup steps:

1. Initialize ts-jest config (optional but convenient):

```bash
npx ts-jest config:init
```

This creates a `jest.config.js` configured for TypeScript. A minimal `jest.config.js` looks like:

```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)']
};
```

2. Add a test script to `package.json`:

```json
"scripts": {
	"test": "jest"
}
```

3. Create tests under `__tests__/` or alongside source files using the `.test.ts` or `.spec.ts` extension.

Example test (`src/example.test.ts`):

```ts
test('basic arithmetic', () => {
	expect(1 + 1).toBe(2);
});
```

Run tests with:

```bash
npm test
```

## Linting with ESLint (TypeScript)

Initialize ESLint configuration interactively:

```bash
npm init @eslint/config@latest
```

When prompted, choose the answers that match your project (for a typical TypeScript Node project):

- How would you like to use ESLint? To check syntax, find problems, and enforce code style
- What type of modules does your project use? CommonJS
- Which framework does your project use? None
- Does your project use TypeScript? Yes
- Where does your code run? Node
- How would you like to define a style for your project? Use a popular style guide (or Answer with your preference)
- Which style guide do you want to follow? (choose one, e.g., Standard, Airbnb, or none)
- What format do you want your config file to be in? JavaScript

ESLint interactive init will add a basic `.eslintrc.*` file. For a TypeScript project it's common to add the following dev dependencies:

```bash
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

A minimal `.eslintrc.js` suitable for TypeScript + Node projects:

```js
module.exports = {
	env: {
		node: true,
		es2021: true,
		jest: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	rules: {
		// project-specific rules
	}
};
```

Add lint scripts to `package.json`:

```json
"scripts": {
	"lint": "eslint 'src/**/*.{ts,tsx}'",
	"lint:fix": "eslint 'src/**/*.{ts,tsx}' --fix"
}
```

Run linting with:

```bash
npm run lint
npm run lint:fix
```

### Integrating Prettier

To use Prettier alongside ESLint (so formatting is handled consistently), install Prettier and the ESLint integrations:

```bash
npm i eslint-plugin-prettier eslint-config-prettier prettier eslint-plugin-jest -D
```

- `prettier` is the formatter.
- `eslint-plugin-prettier` runs Prettier as an ESLint rule.
- `eslint-config-prettier` turns off ESLint rules that would conflict with Prettier.
- `eslint-plugin-jest` provides Jest-specific linting rules (useful if you test with Jest).

Recommended additions to `.eslintrc.js`:

```js
extends: [
	'eslint:recommended',
	'plugin:@typescript-eslint/recommended',
	'plugin:jest/recommended',
	'prettier'
],
plugins: ['@typescript-eslint', 'jest', 'prettier'],
rules: {
	'prettier/prettier': 'error'
}
```

Add a minimal Prettier configuration file (`.prettierrc`) if you want to customize formatting. Example `.prettierrc`:

```json
{
	"printWidth": 100,
	"tabWidth": 2,
	"semi": true,
	"singleQuote": true,
	"trailingComma": "all",
	"endOfLine": "lf"
}
```

Add a format script to `package.json`:

```json
"scripts": {
	"format": "prettier --write 'src/**/*.{ts,tsx,js,jsx,json,md}'"
}
```

Run format with:

```bash
npm run format
```
