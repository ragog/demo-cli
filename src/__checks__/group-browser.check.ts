import { CheckGroup, ApiCheck } from 'checkly/constructs'
import { smsChannel, emailChannel } from '../alert-channels'
const alertChannels = [smsChannel, emailChannel]

const group = new CheckGroup('group-store-browser', {
  name: 'WebShop - Production',
  activated: true,
  muted: false,
  runtimeId: '2023.09',
  locations: ['us-east-1', 'eu-west-1'],
  tags: ['mac', 'production'],
  environmentVariables: [],
  apiCheckDefaults: {},
  concurrency: 100,
  alertChannels,
  browserChecks: {
    testMatch: 'specs_browser/*.spec.ts'
  }
})
