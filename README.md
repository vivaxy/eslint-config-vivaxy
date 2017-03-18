# eslint-config-vivaxy

Share eslint config within my projects.

# Installation

- Install dependencies

`yarn add eslint-config-vivaxy eslint --dev`

- Add eslint config files

`echo "{\n    \"extends\": \"vivaxy\"\n}" > .eslintrc`

- Add npm script, edit `package.json`

```json
{
  "scripts": {
    "lint": "eslint"
  }
}
```

# Contribute

## Publish

`yarn run release`
