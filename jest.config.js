"use strict";

module.exports = {
  preset: "@dc0de/jest-preset",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
