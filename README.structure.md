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
