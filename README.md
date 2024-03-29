[![SemApps](https://badgen.net/badge/Powered%20by/SemApps/28CDFB)](https://semapps.org)

![](./frontend/public/logo192.png)

# Welcome to my place

This application is about events which are private by default: you only see those you have been invited to. Anyone is free to create an event and share it with its network. After an event, all participants can add the contact of all other participants. But at the beginning, you must know the contact link (or the ID of type `@bob@podprovider.com`) to start your personal network.

All data are stored directly in users PODs. See the [ActivityPods](https://github.com/assemblee-virtuelle/activitypods) project for more information.

## Getting started

Requirements:
- Node (v14 recommended)
- Yarn
- Docker and docker-compose (if you wish to run a local middleware)

### Launch the triple store

> This is needed only if you wish to run a local middleware (see below).

```bash
docker-compose up -d fuseki
```

### Launch the middleware

> The middleware is only used to store the events' formats and PODs' providers. All other data are added directly into the user's POD. If you don't want to use a local middleware, you may use https://data.welcometomyplace.org (change the `REACT_APP_COMMON_DATA_URL` env variable in the frontend, as explained below).

```bash
cd middleware
yarn install
yarn run dev
```

Once in [Moleculer REPL](https://moleculer.services/docs/0.14/moleculer-repl.html), you can use these commands to import the formats and POD providers list (you can of course modify it):

```bash
call importers.formats.freshImport
call importers.pod-providers.freshImport
```

### Launch the frontend

Create a `.env.local` file in the `/frontend` directory. This file is ignored by Git. Check the `.env` file and copy the env variables that you wish to change.

You will need to enter at least the `REACT_APP_MAPBOX_ACCESS_TOKEN` variable.

Then you can do:

```bash
cd frontend
yarn install
yarn start
```

## Linking to SemApps packages (optional)

If you wish to modify packages on the [SemApps repository](https://github.com/assemblee-virtuelle/semapps) and see the changes before they are published, we recommend to use [`yarn link`](https://classic.yarnpkg.com/en/docs/cli/link/).

### Linking middleware packages

```bash
cd /SEMAPPS_REPO/src/middleware
yarn run link-all
cd /THIS_REPO/middleware
yarn run link-semapps-packages
```

### Linking frontend packages

```bash
cd /SEMAPPS_REPO/src/frontend
yarn run link-all
cd /THIS_REPO/frontend
yarn run link-semapps-packages
```

Additionally, frontend packages need to be rebuilt, or your changes will not be taken into account.
You can use `yarn run build` to build a package once, or `yarn run dev` to rebuild a package on every change.
