
const config = {
  expect: {
    timeout: 30000
  },
  use: {
    browserName: 'chromium',
    headless : false,
    storageState: 'state.json',
  },
  globalSetup: './setup.js',
  outputDir: './test-results',
  reporter:   [ ['html', { open: 'never' }] ] ,
  
  testMatch: `**/test/**`,
};

module.exports = config;