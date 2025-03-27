# node/typescript setup

We begin with a

```
> npm init -y
```

and install pkgs:

- typescript
- ts-node
- @types/node

## tsconfig.json

install @tsconfig/node18

and create the project tsconfig.json file.

**NB** exclude "\*.test.ts" files; these will be dealt with in jest section.

## eslint

to create eslint config...

```
> npm init @eslint/config@latest
```

installs these pkgs for us:

- eslint
- @eslint/js
- globals
- typescript-eslint

**and**, spread the tseslint.configs.recommended settings.

## prettier

Then we want to add:

- eslint-config-prettier
- prettier

## eslint.config file

take a look at the eslint config file...

1. add {ignores: ["dist/**"]} to top (node_modules **should/is** be ignored by default).

2. add in the rules for using underscore as a placeholder

3. import the eslint-config-prettier package

```
import prettierConfig from "eslint-config-prettier";
```

and add to the end of eslint's config file

```
  ...tseslint.configs.recommended,
  prettierConfig
```

## Jest

Jest currently has deprecated dependencies on `glob v7` and its child dependency `inflight v1`.

1. add `overrides` section to package.json to install `glob v9`,

2. install pkgs

- @types/jest
- jest
- ts-jest

3. add the `jest` presets value...

```
  "overrides": {
    "glob": "^9"
  },
  "jest": {
    "preset": "ts-jest"
  }
```

## rounding off

Don't forget to delete the .ts files in /src.

Don't forget to add an empty .prettierrc file to trigger prettier
