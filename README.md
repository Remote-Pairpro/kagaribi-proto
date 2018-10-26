# kagaribi-proto

## How to start
```sh
yarn init
yarn run start:dev
```

and define env below.

```sh
export FIREBASE_API_KEY=<YOUR_API_KEY>
export FIREBASE_AUTH_DOMAIN= <YOUR_AUTH_DOMAIN>
```

## Firebase Hosting
If you want to run for firebase hosting...

```sh
yarn run build:dev
firebase serve
#or
firebase deploy
```