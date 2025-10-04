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
