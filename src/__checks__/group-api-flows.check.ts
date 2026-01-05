import { CheckGroupV2 as CheckGroup, MultiStepCheck, Frequency } from 'checkly/constructs'
import { smsChannel, emailChannel } from '../alert-channels'
import * as path from 'path'
const alertChannels = [smsChannel, emailChannel]

const group = new CheckGroup('group-store-api-flows', {
  name: 'Store API v1 - Flows',
  activated: true,
  muted: false,
  runtimeId: '2025.04',
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
  runtimeId: '2025.04',
  frequency: Frequency.EVERY_10M,
  locations: ['us-east-1', 'eu-west-1'],
  code: {
    entrypoint: path.join(__dirname, 'specs_api/multi.spec.ts')
  },
})