# Code standards

Configs for linters and formatters.

## Setting up

1. Copy `.editorconfig`, `.eslintrc` and `.prettierrc` to the root of the repository

1. Install the required dependencies

   ```
   npm i @eduardoboucas/eslint-config @eduardoboucas/prettier-config eslint husky lint-staged prettier --save-dev
   ```

1. Add the following blocks to `package.json`:

   ```
   "husky": {
     "hooks": {
       "pre-commit": "lint-staged"
     }
   },
   "lint-staged": {
     "*.{js,jsx,md,html,css}": [
       "prettier --write",
       "git add"
     ]
   }
   ```

1. Add the following to your `test` npm script:

   ```
   eslint --ext js,jsx . && prettier --check '**/*.{js,jsx,md,html,css}'
   ```

1. If you want to reformat an existing repository, run:

   ```
   ./node_modules/.bin/eslint --fix --ext js,jsx . && ./node_modules/.bin/prettier --write '**/*.{js,jsx,md,html,css}'
   ```
