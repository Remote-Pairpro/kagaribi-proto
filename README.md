# kagaribi-proto

## How to start
```sh
yarn init
yarn run start:dev
```
and place `firebase.config.ts` to `src/.secrets`.

```ts
// firebase.config.ts

const firebaseConfig = {
    apiKey: "<YOUR_API_KEY>",
    authDomain: "<YOUR_AUTH_DOMAIN>",
};

export { firebaseConfig };
```

## Firebase Hosting

If you want to run for firebase hosting...

```sh
yarn run build:dev
firebase serve
#or
firebase deploy
```