import { CheckGroupV2 as CheckGroup, ApiCheck } from 'checkly/constructs'
import { smsChannel, emailChannel } from '../alert-channels'
const alertChannels = [smsChannel, emailChannel]

const group = new CheckGroup('group-store-api', {
  name: 'Store API v1',
  activated: true,
  muted: false,
  runtimeId: '2025.04',
  locations: ['us-east-1', 'eu-west-1'],
  tags: ['mac', 'production'],
  environmentVariables: [],
  apiCheckDefaults: {},
  concurrency: 100,
  alertChannels
})

new ApiCheck('check-group-api-check-1', {
  name: 'GET /v1/item',
  group,
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    method: 'GET',
    url: 'https://jsonmap.site/api/v1/items/dodge-charger',
    headers: [{
      key: 'Authorization',
      value: `Bearer ${process.env.JSONMAP_API_KEY}`
    }],
    followRedirects: true,
    assertions: []
  }
})

new ApiCheck('check-group-api-check-2', {
  name: 'GET /v1/items',
  group,
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    method: 'GET',
    url: 'https://jsonmap.site/api/v1/items/dodge-charger',
    headers: [{
      key: 'Authorization',
      value: `Bearer ${process.env.JSONMAP_API_KEY}`
    }],
    followRedirects: true,
    assertions: []
  }
})

new ApiCheck('check-group-api-check-3', {
  name: 'PUT /v1/items',
  group,
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    method: 'GET',
    url: 'https://jsonmap.site/api/v1/items/dodge-charger',
    headers: [{
      key: 'Authorization',
      value: `Bearer ${process.env.JSONMAP_API_KEY}`
    }],
    followRedirects: true,
    assertions: []
  }
})