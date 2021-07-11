---
sidebar_position: 2
---
# Tutorial - Codepush and the Hydro-SDK Registry

Using codepush and the Hydro-SDK Registry to deliver updates directly to your users.

## Prerequisites

This tutorial assumes you have read and followed along with the previous [Adding to a Flutter App tutorial](https://hydro-sdk.io/docs/intro)

## Registry
The Hydro-SDK Registry (https://registry.hydro-sdk.io) provides a place to browse and manage Hydro-SDK projects, components and their packages. In the [previous tutorial](https://hydro-sdk.io/docs/intro), a counter app was built using Hydro-SDK. The end users of this app will download and install the compiled Flutter host app (written in Dart) from their respective app store. Likewise, end users will receive the Hydro-SDK content of the app from the Registry.

### Signing Up
Registry is free, though requires a Github account to publish and manage your own projects and components.

Click "Signin with Github" on the top right and follow the prompts to connect your Github account. Once your account is connected, you'll see your Github profile picture.

Click on your Github profile picture and select "Projects" to view your projects.

### Creating a Project
In the [previous tutorial](https://hydro-sdk.io/docs/intro), we created a project description with a project called "example-project" and a component named "counter-example". Project names are global and must be unique across all of the Registry. Component names need only be unique within a given project.

When you connect your Github account with the Registry, a project with a name derived from your Github name is created (for example, `chris-gibb`). Change the project name in your local project description (in `hydro.json`) and in the use of the `RunComponent` widget (in `lib/main.dart`) to reflect the project name created for you.

Open the project in the Registry and click "New Component". Name it `counter-example`. Once the `counter-example` component has been created, you'll be presented with its private key. Click to copy the full private key and save it to a file named `key.pem`. Make sure to keep `key.pem` a secret and don't lose it. This key will be used to sign and publish releases of `counter-example`.

### Codepush
With the project and component created on the Registry, packages can be published using the `codepush` command.

Run `npx hydroc codepush --private-key-file key.pem` to build, sign and publish a package.

Packages are immediately available to end users. If a package newer than the one that `RunComponent` is currently running is available on the Registry, it will be downloaded and cached. The next time `RunComponent` is mounted, it will run the cached package.