# 📦 React • Typescript • Package Starter

A slightly opinionated starter kit for developing React and/or TypeScript packages. It comes with a several pre-configured tools, so you could focus on coding instead of configuring a project for the nth time. From building to releasing a package, this starter kit has you covered.

> 👋 Hello there! Follow me [@linesofcode](https://twitter.com/linesofcode) or visit [linesofcode.dev](https://linesofcode.dev) for more cool projects like this one.

## 🏃 Getting started

```console
npx degit TimMikeladze/tsup-react-package-starter my-package

cd my-package && git init

pnpm install && pnpm dev
```

❗Important note: This project uses [pnpm](https://pnpm.io/) for managing dependencies. If you want to use another package manager, remove the `pnpm-lock.yaml` and control-f for usages of `pnpm` in the project and replace them with your package manager of choice. If you don't have `pnpm` installed and want to use it, you can install it by running `npm install -g pnpm`.

## What's included?

- ⚡️[tsup](https://github.com/egoist/tsup) - The simplest and fastest way to bundle your TypeScript libraries. Used to bundle package as ESM and CJS modules. Supports TypeScript, Code Splitting, PostCSS, and more out of the box.
- 📖 [Storybook](https://storybook.js.org/) - Build UI components and pages in isolation. It streamlines UI development, testing, and documentation.
- 🧪 [Vitest](https://vitest.dev/) - A testing framework for JavaScript. Preconfigured to work with TypeScript and JSX.
- 🔼 [Release-it](https://github.com/release-it/release-it/) - release-it is a command line tool to automatically generate a new GitHub Release and populates it with the changes (commits) made since the last release.
- 🐙 [Test & Publish via Github Actions](https://docs.github.com/en/actions) - CI/CD workflows for your package. Run tests on every commit plus integrate with Github Releases to automate publishing package to NPM and Storybook to Github Pages.
- 📄 [Commitizen](https://github.com/commitizen/cz-cli) — When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time.
- 🐶 [Husky](https://github.com/typicode/husky) — Run scripts before committing.
- 🚫 [lint-staged](https://github.com/okonet/lint-staged) — Run linters on git staged files
- 🤖 [Dependabot](https://docs.github.com/en/code-security/dependabot) - Github powered dependency update tool that fits into your workflows. Configured to periodically check your dependencies for updates and send automated pull requests.
- ☑️ [ESLint](https://eslint.org/) - A linter for JavaScript. Includes a simple configuration for React projects based on the recommended ESLint and AirBnB configs.
- 🎨 [Prettier](https://prettier.io/) - An opinionated code formatter.
- 🏃‍♀️‍➡️ [TSX](https://github.com/privatenumber/tsx) - Execute TypeScript files with zero-config in a Node.js environment.

## Usage

### 💻 Developing

Watch and rebuild code with `tsup` and runs Storybook to preview your UI during development.

```console
pnpm dev
```

Run all tests and watch for changes

```console
pnpm test
```

### 🏗️ Building

Build package with `tsup` for production.

```console
pnpm build
```

### ▶️ Running files written in TypeScript

To execute a file written in TypeScript inside a Node.js environment, use the `tsx` command. This will detect your `tsconfig.json` and run the file with the correct configuration. This is perfect for running custom scripts while remaining type-safe.

```console
pnpm tsx ./path/to/file.ts
```

This is useful for running scripts, starting a server, or any other code you want to run while remaining type-safe.

### 🖇️ Linking

Often times you want to `link` this package to another project when developing locally, circumventing the need to publish to NPM to consume it.

In a project where you want to consume your package run:

```console
pnpm link my-package --global
```

Learn more about package linking [here](https://pnpm.io/cli/link).

### 📩 Committing

When you are ready to commit simply run the following command to get a well formatted commit message. All staged files will automatically be linted and fixed as well.

```console
pnpm commit
```

### 🔖 Releasing, tagging & publishing to NPM

Create a semantic version tag and publish to Github Releases. When a new release is detected a Github Action will automatically build the package and publish it to NPM. Additionally, a Storybook will be published to Github pages.

Learn more about how to use the `release-it` command [here](https://github.com/release-it/release-it).

```console
pnpm release
```

When you are ready to publish to NPM simply run the following command:

```console
pnpm publish
```

#### 🤖 Auto publish after Github Release (or manually by dispatching the Publish workflow)

❗Important note: in order to automatically publish a Storybook on Github Pages you need to open your repository settings, navigate to "Actions" and enable **"Read & write permissions"** for Workflows. Then navigate to "Pages" and choose **"GitHub Actions"** as the source for the Build and Deployment. After a successful deployment you can find your Storybook at `https://<your-github-username>.github.io/<your-repository-name>/`.

❗Important note: in order to publish package to NPM you must add your token as a Github Action secret. Learn more on how to configure your repository and publish packages through Github Actions [here](https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages).

## 🎨 CSS & PostCSS

Import CSS files works out of the box. Simply import your CSS files in your components and they will be bundled with your package.

[tsup](https://github.com/egoist/tsup) supports PostCSS out of the box. Simply run `pnpm add postcss -D` add a `postcss.config.js` file to the root of your project, then add any plugins you need. Learn more how to configure PostCSS [here](https://tsup.egoist.dev/#css-support).

Additionally consider using the [tsup](https://github.com/egoist/tsup) configuration option `injectStyle` to inject the CSS directly into your Javascript bundle instead of outputting a separate CSS file.

## 🚀 Built something using this starter-kit?

That's awesome! Feel free to add it to the list.

🗃️ **[Next Upload](https://github.com/TimMikeladze/next-upload)** - Turn-key solution for integrating Next.js with signed & secure file-uploads to an S3 compliant storage service such as R2, AWS, or Minio.

🏁 **[Next Flag](https://github.com/TimMikeladze/next-flag)** - Feature flags powered by GitHub issues and NextJS. Toggle the features of your app by ticking a checkbox in a GitHub issue. Supports server-side rendering, multiple environments, and can be deployed as a stand-alone feature flag server.

📮 **[Next Invite](https://github.com/TimMikeladze/next-invite)** - A drop-in invite system for your Next.js app. Generate and share invite links for users to join your app.

🔐 **[Next Auth MUI](https://github.com/TimMikeladze/next-auth-mui)** - Sign-in dialog component for NextAuth built with Material UI and React. Detects configured OAuth and Email providers and renders buttons or input fields for each respectively. Fully themeable, extensible and customizable to support custom credential flows.

⌚️ **[Next Realtime](https://github.com/TimMikeladze/next-realtime)** - Experimental drop-in solution for real-time data leveraging the Next.js Data Cache.

✅ **[Mui Joy Confirm](https://github.com/TimMikeladze/mui-joy-confirm)** - Confirmation dialogs built on top of [@mui/joy](https://mui.com/joy-ui/getting-started/) and react hooks.

🗂️ **[Use File System](https://github.com/TimMikeladze/use-file-system)** - A set of React hooks to interact with the File System API. Watch a directory for changes and return a map of filepaths & contents when a file is added, modified or removed.

🐙 **[Use Octokit](https://github.com/TimMikeladze/use-octokit)** - A data-fetching hook built on top of the Octokit and SWR for interacting with the Github API. Use this inside a React component for a type-safe, data-fetching experience with caching, polling, and more.

🐌 **[Space Slug](https://github.com/TimMikeladze/space-slug)** - Generate unique slugs, usernames, numbers, custom words, and more using an intuitive api with zero dependencies.

🌡️ **[TSC Baseline](https://github.com/TimMikeladze/tsc-baseline/)** - Save a baseline of TypeScript errors and compare new errors against it. Useful for type-safe feature development in TypeScript projects that have a lot of errors. This tool will filter out errors that are already in the baseline and only show new errors.

♾️ **[react-infinite-observer](https://github.com/Tasin5541/react-infinite-observer)** - A simple hook to implement infinite scroll in react component, with full control over the behavior. Implemented with IntersectionObserver.
