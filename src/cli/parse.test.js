import fs from 'fs'
import path from 'path'
import './parse'
const parse = window.parse

const dataDir = path.resolve(__dirname, '../../data')

const expected = {
  suites: {
    390294658: {
      tests: {
        '-1319400288': {
          id: -1319400288,
          name: 'testsuite in a testcase testcase',
          messages: [],
          visible: true,
          time: 0,
          status: 'passed'
        }
      },
      systemOut: [],
      properties: {
        _visible: true
      },
      id: 390294658,
      name: 'testsuite in a testcase',
      time: 0
    },
    1201687819: {
      tests: {
        '-2126675373': {
          id: -2126675373,
          name: 'testcase 1',
          messages: [],
          visible: true,
          time: 0,
          status: 'passed'
        },
        '-2126675372': {
          id: -2126675372,
          name: 'testcase 2',
          messages: [],
          visible: true,
          time: 0,
          status: 'passed'
        }
      },
      systemOut: [],
      properties: {
        _visible: true
      },
      id: 1201687819,
      name: 'duplicate',
      time: 0
    },
    '-1861124855': {
      tests: {
        152530127: {
          id: 152530127,
          name: 'simple passing test',
          messages: [],
          visible: true,
          time: 0,
          status: 'passed'
        },
        448559065: {
          id: 448559065,
          name: 'test with time',
          messages: [],
          visible: true,
          time: 'time',
          status: 'passed'
        },
        1350225396: {
          id: 1350225396,
          name: 'failing test with messages',
          messages: [
            'inner massage 1',
            'message prop 1',
            'inner massage 2',
            'message prop 2'
          ],
          visible: true,
          time: 0,
          status: 'failure'
        },
        1443479640: {
          id: 1443479640,
          name: 'test with messages',
          messages: [
            'inner message',
            'message prop'
          ],
          visible: true,
          time: 0,
          status: 'passed'
        },
        1669557569: {
          id: 1669557569,
          name: 'the sub test',
          messages: [],
          visible: true,
          time: 0,
          status: 'passed'
        },
        1879989598: {
          id: 1879989598,
          name: 'erroring test with messages',
          messages: [
            'inner massage 1',
            'message prop 1',
            'inner massage 2',
            'message prop 2'
          ],
          visible: true,
          time: 0,
          status: 'error'
        },
        2045602436: {
          id: 2045602436,
          name: 'test passed with messages',
          messages: [
            'inner massage 1',
            'message prop 1',
            'inner massage 2',
            'message prop 2'
          ],
          visible: true,
          time: 0,
          status: 'passed'
        },
        '-579348086': {
          id: -579348086,
          name: 'No Name',
          messages: [
            'only a message'
          ],
          visible: true,
          time: 0
        },
        '-232186498': {
          id: -232186498,
          name: 'test with sub test',
          messages: [],
          visible: true,
          time: 0,
          status: 'passed'
        },
        '-986143044': {
          id: -986143044,
          name: 'test passed with messages and free text',
          messages: [
            'HERE IS SOME TEXT',
            'inner massage 1',
            'message prop 1'
          ],
          visible: true,
          time: 0,
          status: 'passed'
        },
        '-1154650731': {
          id: -1154650731,
          name: 'skiping test with messages',
          messages: [
            'inner massage 1',
            'message prop 1',
            'inner massage 2',
            'message prop 2'
          ],
          visible: true,
          time: 0,
          status: 'skipped'
        },
        '-198845521': {
          id: -198845521,
          name: 'error and failure test with messages',
          messages: [
            'error inner massage 1',
            'error message prop 1'
          ],
          visible: true,
          time: 0,
          status: 'error'
        }
      },
      systemOut: [],
      properties: {
        _visible: true,
        'name only': [],
        'prop 1': [
          'value 1',
          'value 2'
        ],
        'prop 2': [
          'value'
        ],
        'No Name': [
          'value with no name',
          'value only'
        ],
        'seperate props': [
          'value'
        ]
      },
      id: -1861124855,
      name: 'suite 1',
      time: 'time'
    },
    '-1861124854': {
      tests: {
        '-1146345790': {
          id: -1146345790,
          name: 'testcase',
          messages: [],
          visible: true,
          time: 0,
          status: 'passed'
        }
      },
      systemOut: [],
      properties: {
        _visible: true
      },
      id: -1861124854,
      name: 'suite 2',
      time: 0
    },
    '-1028948070': {
      tests: {
        '-1387098835': {
          id: -1387098835,
          name: 'testcase duplicate',
          messages: [
            'message 1',
            'message 2'
          ],
          visible: true,
          time: 0,
          status: 'passed'
        }
      },
      systemOut: [],
      properties: {
        _visible: true
      },
      id: -1028948070,
      name: 'suite with duplicate tests',
      time: 0
    }
  }
}

test('complete multi suites',
  async () => {
    const data = path.join(dataDir, '/test.xml')
    const result = await parse(fs.readFileSync(data).toString())
    expect(result).toEqual(expected)
  })
