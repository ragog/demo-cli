# Checkly Monitoring-as-code: Demo Project

This is a demo project using the Checkly CLI to manage a demo monitoring setup consisting of API checks running against jsonmap.site and Browser checks running against danube-web.shop, as well as groups and related alert channels.

## CLI Commands

Run the core CLI commands with `npx checkly <command>` 

| Command              | Action                                           |
|:---------------------|:-------------------------------------------------|
| `npx checkly test`   | Dry run all the checks in your project           |
| `npx checkly deploy` | Deploy your checks to the Checkly cloud          |
| `npx checkly login`  | Log in to your Checkly account                   |
| `npx checkly --help` | Show help for each command.                      |
