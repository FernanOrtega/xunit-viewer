const path = require('path')

const getFiles = require('./get-files')
const getSuites = require('./get-suites')
const expected = require('./get-suites-expected.json')

const logger = {
  warning: input => input,
  file: input => input,
  error: input => input
}

test('get suites', async () => {
  const files = getFiles(logger, { results: path.resolve(__dirname, '../../data') })
  const suites = await getSuites(logger, files)
  expect(suites).toEqual(expected)
})
