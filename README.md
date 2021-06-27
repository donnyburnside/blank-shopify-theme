# Blank Shopify Theme
A blank theme for Shopify featuring a modern build process using;
- Webpack
- SCSS, PostCSS and Autoprefixer
- ES6+ ready


### Getting started
- Copy `config.sample.yml` to `config.yml` and update its contents  
  _To get a password for Theme Kit, see [Manage Theme Kit Access](https://shopify.dev/tools/theme-kit/manage-theme-kit-access)_  
  _Or, [find out more about the `config.yml` file](https://shopify.dev/tools/theme-kit/configuration-reference#config-file)_
- Run `npm install`
- That's it. See the [Commands](#commands) section for next steps.


### Commands
| Command | Description
|--- |---
| `npm run start`   | watches the `./src` directory for changes, re-compiles the theme to the `./dist` directory and pushes any changed files to Shopify
| `npm run build`   | builds a production-ready version of the theme to the `./dist` directory
| `npm run deploy`  | runs `npm run build` and deploys the theme to Shopify
| `npm run open`    | opens the development theme in a new browser tab
| `npm run clean`   | purges the `./dist` directory


#### Copyright
Copyright (c) 2021 Donny Burnside   