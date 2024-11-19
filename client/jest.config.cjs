module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testMatch: ['**/__tests__/**/*.test.jsx'],
    moduleDirectories: ['node_modules', 'src/classes/**', 'src/components/**'],
};

