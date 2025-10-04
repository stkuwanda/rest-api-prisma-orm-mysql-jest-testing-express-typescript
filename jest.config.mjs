export default {
	preset: 'ts-jest', // Use ts-jest preset for TypeScript support
	testEnvironment: 'node', // Set the test environment to Node.js
	roots: ['./src/tests'], // Specify the root directory for tests
	moduleFileExtensions: ['ts', 'js', 'json', 'node'], // Recognize these file extensions
	transform: {
		'^.+\\.ts$': 'ts-jest', // Transform TypeScript files using ts-jest
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$', // Regex to identify test files
};
