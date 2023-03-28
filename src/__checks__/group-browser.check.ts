import { CheckGroup, ApiCheck } from '@checkly/cli/constructs'
import { smsChannel, emailChannel } from '../alert-channels'
const alertChannels = [smsChannel, emailChannel]
/*
* In this example, we bundle checks using a Check Group. We add checks to this group in two ways:
* 1. By passing the `CheckGroup` object for the `group` property of the check.
* 2. By defining a glob pattern that matches browser checks using *.spec.js.
*
* You can use either or both.
*/

// We can define multiple checks in a single *.check.js file.
const group = new CheckGroup('group-store-browser', {
  name: 'WebShop - Production',
  activated: true,
  muted: false,
  runtimeId: '2022.10',
  locations: ['us-east-1', 'eu-west-1'],
  tags: ['mac', 'production'],
  environmentVariables: [],
  apiCheckDefaults: {},
  concurrency: 100,
  alertChannels,
  browserChecks: {
    testMatch: '*.spec.ts'
  }
})
