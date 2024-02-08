import { CheckGroup, MultiStepCheck, Frequency } from 'checkly/constructs'
import { smsChannel, emailChannel } from '../alert-channels'
import * as path from 'path'
const alertChannels = [smsChannel, emailChannel]

/*
* In this example, we bundle checks using a Check Group. We add checks to this group in two ways:
* 1. By passing the `CheckGroup` object for the `group` property of the check.
* 2. By defining a glob pattern that matches browser checks using *.spec.js.
*
* You can use either or both.
*/

// We can define multiple checks in a single *.check.js file.
const group = new CheckGroup('group-store-api-flows', {
  name: 'Store API v1 - Flows',
  activated: true,
  muted: false,
  runtimeId: '2023.09',
  locations: ['us-east-1', 'eu-west-1'],
  tags: ['mac', 'production'],
  environmentVariables: [ { key: 'JSONMAP_API_KEY', value: `${process.env.JSONMAP_API_KEY}` } ],
  apiCheckDefaults: {},
  concurrency: 100,
  alertChannels
})

new MultiStepCheck('multistep-check-1', {
  name: 'user item flow',
  group,
  runtimeId: '2023.09',
  frequency: Frequency.EVERY_10M,
  locations: ['us-east-1', 'eu-west-1'],
  code: {
    entrypoint: path.join(__dirname, 'specs_api/multi.spec.ts')
  },
})