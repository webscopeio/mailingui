# Mailing UI

## Description

Mailing UI is an _open source_ collection of email components and templates that can help you save time and improve your email campaigns.

All the components are designed to be visually appealing and easy to use.

Since the Mailing UI is open source, you can use any part of it for free and modify it to suit your needs!

> The project is an MVP. We plan on adding new features in the near future.

## Documentation

To learn how to use our components, please visit [mailingui.com/components](https://mailingui.com/components).
To use our free templates navigate to [mailingui.com/preview](https://mailingui.com/preview) and copy the templates
from there. Keep in mind that for the templates to work you need to have the used components installed and set up.

## CLI

See the available CLI commands below.

### Initialize MailingUI

Initialize MailingUI in your projects. The command downloads all the necessary files for you to start working with MailingUI.

```shell
npx @mailingui/cli init [options]
```

#### Options
```
-p, --path <path>  define base path to your MailingUI components (default: "./src/@mailingui")
-o, --overwrite    overwrite existing configuration (default: false)
-h, --help         display help for command
```

### Add a Component

Add specific components to your project. Refer to the list of components on [our website](https://mailingui.com/components).

```shell
npx @mailingui/cli add [options] [components...]
```

#### Options
```
-o, --overwrite  automatically overwrite existing components (default: false)
-a, --all        download all available components (default: false)
-h, --help       display help for command
```