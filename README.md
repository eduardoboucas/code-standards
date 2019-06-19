# DADI code standards

Configs for linters and formatters used in DADI projects.

## Usage

### Prettier

Install:

`npm i -D prettier @dadi/prettier-config`

Add to your `package.json`:

```javascript
{
  // ...
  "prettier": "@dadi/prettier-config"
}
```

### Eslint

Install:

`npm i -D eslint @dadi/eslint-config`

Add to your `.eslintrc`:

```javascript
{
  // ...
  "extends": "@dadi"
}
```
