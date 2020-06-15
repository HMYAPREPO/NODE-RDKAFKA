const path = require('path')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const sinonChai = require('sinon-chai')
const chaiDateString = require('chai-date-string')

// global paths
global.TEST_HOME = path.join(__dirname, '/')
global.PROJECT_HOME = TEST_HOME + '../'