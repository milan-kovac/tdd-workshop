module.exports = {
  preset: "ts-jest",
  testMatch: ["**/tests/unit/**/*.spec.(ts|js)", "**/tests/integration/**/*.spec.(ts|js)"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
    },
  },
};
