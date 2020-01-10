### Example repository for webpack-external-import with webpack external dependencies.

Created for to track issue (webpack-external-import issue#58)[https://github.com/ScriptedAlchemy/webpack-external-import/issues/58]

This repository is monorepo configured with PNPM tool.
Please ensure that pnpm is globally installed on your system
If not,
```javascript
npm i pnpm -g
```

Then install child repositories.
```javascript
pnpm i -r
```

Then start container and micro-app dev servers with

```javascript
pnpm run start -r
```