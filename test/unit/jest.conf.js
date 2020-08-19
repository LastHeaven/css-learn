const path = require('path')

console.log(path.resolve(__dirname, '../../'))

module.exports = {
  rootDir: path.resolve(__dirname, '../../'), // 同 webpack.context
  moduleFileExtensions: [ // 同 webpack.resolve.extensions
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '.*\\.(css|less)$': '<rootDir>/test/unit/assetStub.js',
    '.*\\.(jpe?g|png)$': '<rootDir>/test/unit/assetStub.js',
    '^@/(.*)$': '<rootDir>/src/$1' // 同 webpack.resolve.alias
  },
  transform: { // 同 webpack.module.rules
    '^.+\\.vue$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  setupFiles: ['<rootDir>/test/unit/setup'], // 同 webpack.entry
  coverageDirectory: '<rootDir>/test/unit/coverage', // 同 webpack.output
  collectCoverageFrom: [ // 同 webpack 的 rule.include
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ]
}
