## Project Structure


```
rest-api-prisma-orm-mysql-jest-testing-express-typescript/
├── .env                        # Environment variables (not committed)
├── .env.example                # Example env file
├── .gitignore                  # Git ignore rules
├── .prettierrc                 # Prettier config
├── api-test.http               # HTTP requests for testing endpoints
├── docker-compose.yaml         # Docker Compose for services
├── eslint.config.mjs           # ESLint configuration
├── jest.config.mjs             # Jest configuration
├── nodemon.json                # Nodemon config for dev server
├── package.json                # Project metadata and scripts
├── prisma/                     # Prisma schema and migration files
│   └── schema.prisma
├── README.md                   # Project documentation
├── README.structure.md         # Project structure documentation
├── tsconfig.json               # TypeScript configuration
└── src/
	├── config.ts               # App configuration
	├── errors/                 # Custom error classes/types
	│   ├── CustomError.ts
	│   ├── EntityNotFoundError.ts
	│   └── types.d.ts
	├── generated/              # (Optional) Generated code
	├── index.ts                # Main entry point
	├── middleware/             # Express middleware
	│   └── error-handler.middleware.ts
	├── prisma-client.ts        # Prisma Client instance
	├── routes/                 # API routes
	│   └── v1/
	│       ├── index.ts
	│       ├── projects/
	│       │   ├── controller.ts
	│       │   └── index.ts
	│       └── tasks/
	│           ├── controller.ts
	│           └── index.ts
	├── server.ts               # Server setup
	├── tests/                  # Test files
	│   ├── add.test.ts
	│   └── error-handling.test.ts
	└── utils/                  # Utility functions
		├── error-handling.util.ts
		└── math.util.ts
```

## Scaffolding Overview

- **src/**: All TypeScript source code
	- **config.ts**: Centralized configuration
	- **server.ts**: Express app/server setup
	- **routes/**: API route definitions (versioned)
	- **middleware/**: Custom Express middleware
	- **errors/**: Custom error classes/types
	- **utils/**: Utility/helper functions
	- **tests/**: Unit and integration tests
- **api-test.http**: Example HTTP requests for VS Code REST Client
- **nodemon.json**: Dev server config (auto-restart on changes)
- **eslint.config.mjs**: Linting rules
- **jest.config.mjs**: Test runner config
- **tsconfig.json**: TypeScript compiler options
- **package.json**: Project scripts and dependencies

> See below for setup, testing, linting, formatting, and environment variable instructions.

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

## Using Faker for Test Data

Install [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) as a dev dependency to generate fake data for testing:

```bash
npm i @faker-js/faker -D
```

You can then import and use Faker in your test files. Example:

```ts
import { faker } from '@faker-js/faker';

const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();
```

See the [Faker documentation](https://fakerjs.dev/) for more usage examples.

Create a TypeScript configuration file (`tsconfig.json`) with:

```bash
npx tsc --init
```

## Initialize Prisma ORM (MySQL)

Install Prisma CLI as a dev dependency:

```bash
npm install prisma --save-dev
```

Then initialize Prisma with MySQL as the datasource provider:

```bash
npx prisma init --datasource-provider mysql
```

This will create a new `prisma/` folder with a `schema.prisma` file and a `.env` file in your project root. Update the `DATABASE_URL` in `.env` to match your MySQL connection string:

```env
DATABASE_URL="mysql://user:pass@localhost:3306/dbname"
```


After editing your schema, generate Prisma Client and run migrations:

```bash
npx prisma generate
npx prisma migrate dev --create-only --name create-table-name1-and-table-name2-tables
npx prisma migrate deploy
```

## Seeding the Database with Prisma

To populate your database with seed data, use the following script:

```bash
npm run db:seed
```

This will run the Prisma seeder as defined in your project (see the `db:seed` script in `package.json`).
Make sure your seed logic is implemented in the appropriate seed file (commonly `prisma/seed.ts`).

You can customize your seed data using libraries like `@faker-js/faker` for generating random values.

Or preferred way is to use the following scripts:

```bash
npm run prisma:generate
npm run migrate:create -- --name create-table-name1-and-table-name2-tables
npm run migrate:deploy
```

Or to run creation and deployment in one go use the following scripts:

```bash
npm run prisma:generate
npm run migrate -- --name create-table-name1-and-table-name2-tables
```

See [Prisma documentation](https://www.prisma.io/docs/) for more details on modeling your database and using Prisma Client in your code.
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

## Type definitions for common middleware

When using Express and common middleware in TypeScript, it's helpful to install the community-maintained type definitions so the compiler knows the shapes of those modules.

Install the type packages as dev dependencies:

```bash
npm i @types/express @types/cors @types/morgan -D
```

Usage notes:

- After installing, TypeScript will automatically pick up the type definitions when you import `express`, `cors`, or `morgan` in your code (no additional config needed in most cases).
- Example:

```ts
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('hello');
});
```

If TypeScript still can't find types, ensure your `tsconfig.json` includes `node_modules/@types` (it does by default) or add an explicit `types` array under `compilerOptions`.

## Run the server in development

This project includes a `nodemon` configuration (`nodemon.json`) that uses `ts-node` to run the app directly from the `src/` TypeScript sources. Start the server in dev mode with:

```bash
npm run dev
```

The server listens on port 3000 by default (see `src/index.ts`). The project exposes a simple health endpoint at `/health`.

### Test the health endpoint with VS Code REST Client

The repository contains an `api-test.http` file with a ready-made health-check request. To test from VS Code using the REST Client extension:

1. Open `api-test.http` in VS Code.
2. Make sure the server is running (`npm run dev`).
3. Click the `Send Request` link that appears above the `GET http://localhost:3000/health` request, or place your cursor on the request and press `Ctrl+Alt+R` (or use the command palette: 'REST Client: Send Request').

You should receive a 200 response similar to:

```json
{
	"ok": true,
	"message": "Server is healthy"
}
```

## Environment variables with dotenv-cli

If you'd like to load environment variables from a `.env` file when running the app in development, you can use `dotenv-cli`.

Install it as a dev dependency:

```bash
npm i dotenv-cli -D
```

Create a `.env` file in the project root (don't commit it). Example `.env`:

```env
# .env.example
PORT=3000
NODE_ENV=development
DATABASE_URL="mysql://user:pass@localhost:3306/dbname"
```

Run the dev server with variables from `.env` using `dotenv` (examples):

```bash
# run the npm dev script with variables loaded from .env
npx dotenv -e .env -- npm run dev

# or run nodemon directly through dotenv
npx dotenv -e .env -- nodemon
```

You can also add a convenience script to `package.json`:

```json
"scripts": {
	"dev": "dotenv -- nodemon"
}
```

Then start with:

```bash
npm run dev
```

Note: `nodemon.json` already runs the TypeScript entry (`ts-node ./src/index.ts`), so using `dotenv` in front of `nodemon` is sufficient to load env variables for the process.

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
