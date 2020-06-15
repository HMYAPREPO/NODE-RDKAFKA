let gulp = require('gulp')
const mocha = require('gulp-mocha')
const path = require('path')

const UNIT_TEST_MAIN = './test/unit/index.js'
const E2E_TEST_MAIN = './test/e2e/index.js'
const SMOKE_TEST_FILES = 'test/smoke/*.js'
const INTEGRATION_TEST_FILES = 'test/integration/index.js'
const SRC_FILES = 'src/**/*.js'
const SERVER_FILE = 'bin/server.js'
const ROUTES_FILES = 'routes/**/*.js'
const COMMON_FILES = 'common/**/*.js'
const TEST_COMMON = './test/common.js'
const APP_FILE = 'app.js'
const SERVER_WATCH_FILES = [ROUTES_FILES, SRC_FILES, SERVER_FILE, APP_FILE, COMMON_FILES]
const TEST_COVERAGE_MIN = 80
const NODE_ENV = process.env.NODE_ENV

/



gulp.task('test:coverage', function(done) {
  // This doesn't really do test coverage. It just runs the unit tests. We need to use
  // a replacement for istanbul for getting code coverage.
  // Tracked by https://jira.nordstrom.net/browse/OMNI-5765
  return gulp.src([UNIT_TEST_MAIN])
  .pipe(mocha({require: [TEST_COMMON]}))
  .once('error', function (err) {
    console.log(err)
    done()
    process.exit(1)
  })
  .once('end', function () {
    done()
    process.exit()
  })

})


