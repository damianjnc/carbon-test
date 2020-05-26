const clearMocks = true
const collectCoverageFrom = ['src/**/*.js']
const coverageDirectory = 'coverage'
const coveragePathIgnorePatterns = [
  'src/config',
  'src/ie',
  'src/styles',
  '.story.js',
  'reactSelectStyles.js'
]
const coverageReporters = ['html', 'text-summary']
const moduleNameMapper = {
  '\\.(css|less)$': 'identity-obj-proxy'
}
const moduleDirectories = ['node_modules', 'src']
const moduleFileExtensions = ['js']
const reporters = [
  'default',
  [
    './node_modules/jest-html-reporter',
    {
      includeFailureMsg: true,
      outputPath: './coverage/test-report.html',
      pageTitle: 'Test Report',
      theme: 'defaultTheme'
    }
  ]
]
const setupFiles = ['react-app-polyfill/jsdom']
const setupFilesAfterEnv = ['<rootDir>/src/setupTests.js']
const snapshotSerializers = ['enzyme-to-json/serializer']
const testEnvironment = 'jsdom'
const testPathIgnorePatterns = ['\\\\node_modules\\\\']
const testRegex = '\\.test\\.js$'
const testURL = 'http://localhost'
const transform = {
  '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
}
const transformIgnorePatterns = ['<rootDir>/node_modules/']

module.exports = {
  clearMocks,
  collectCoverageFrom,
  coverageDirectory,
  coveragePathIgnorePatterns,
  coverageReporters,
  moduleDirectories,
  moduleFileExtensions,
  moduleNameMapper,
  reporters,
  setupFiles,
  setupFilesAfterEnv,
  snapshotSerializers,
  testEnvironment,
  testPathIgnorePatterns,
  testRegex,
  testURL,
  transform,
  transformIgnorePatterns
}
