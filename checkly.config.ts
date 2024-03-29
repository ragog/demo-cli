import { defineConfig } from 'checkly'

const config = defineConfig({
  projectName: 'JSONMap',
  logicalId: 'demo-jsonmap',
  repoUrl: 'https://github.com/checkly/checkly-cli',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['mac'],
    runtimeId: '2023.09',
    checkMatch: '**/*.check.ts',
    browserChecks: {
      testMatch: '**/__checks__/specs_browser/*.spec.ts',
    },
  },
  cli: {
    runLocation: 'eu-west-1',
  },
})

export default config
