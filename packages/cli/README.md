# Mailing UI

## Description

MailingUI is a set of _opinionated_ React components, built on top of [React.email](https://react.email), designed to make the creation of emails easier.

> "We believe that email is an extremely important medium for people to communicate. However, we need to stop developing emails like 2010, and rethink how email can be done in 2022 and beyond. Email development needs a revamp. A renovation. Modernized for the way we build web apps today"  
—[React.email](https://react.email).

All of our components are completely **open-sourced** and intended for a
*copy-and-paste* use. Currently, we don't have any plans in releasing MailingUI as an npm
package.

## Documentation

- To get started, please visit [Docs - Guide](https://mailingui.com/docs/guide/introduction)
- View our components at [Docs - Components](https://mailingui.com/docs/components/overview)
- View our templates at [Templates](https://mailingui.com/templates/minimal/overview)

## CLI
### Initialize MailingUI

Download all the necessary starting files for you to start working with MailingUI.

```shell
npx @mailingui/cli init
```

- `-p`, `--path` define base path to your MailingUI components (default: `"./src/mailingui"`)
- `-o`, `--overwrite` overwrite existing configuration (default: false)
- `-h`, `--help` display help for command

### Add Component(s)

Add all or specific components to your project. See [components](https://mailingui.com/docs/components) for the full list.

```shell
npx @mailingui/cli add --all
```

- `-o`, `--overwrite` automatically overwrite existing components (default: false)
- `-a`, `--all` download all available components (default: false)
- `-h`, `--help`` display help for command