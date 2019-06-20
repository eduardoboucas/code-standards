# DADI code standards

Configs for linters and formatters used in DADI projects.

## Setting up

1. Copy `.editorconfig`, `.eslintrc` and `.prettierrc` to the root of the repository

1. Install the required dependencies

   ```
   npm i @dadi/eslint-config @dadi/prettier-config eslint husky lint-staged prettier --save-dev
   ```

1. Add the following blocks to `package.json`:

   ```
   "husky": {
     "hooks": {
       "pre-commit": "lint-staged"
     }
   },
   "lint-staged": {
     "*.{js,jsx,md,html}": [
       "prettier --write",
       "git add"
     ]
   }
   ```

1. Add the following to your `test` npm script:

   ```
   eslint . && prettier --check **/*.{js,jsx,md,html}
   ```

1. If you want to reformat an existing repository, run:

   ```
   ./node_modules/.bin/eslint --fix . && ./node_modules/.bin/prettier --write **/*.{js,jsx,md,html}
   ```
