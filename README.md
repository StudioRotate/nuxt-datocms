# Nuxt DatoCMS Plugin

> NuxtJS plugin that creates a clean and elegant way to fetch data from DatoCMS.

## Setup

1. Add `nuxt-datocms` module to your project

```bash
# Navigate to modules directory of Nuxt project
cd modules

# If modules doesn't exist, create it
mkdir modules && cd modules

# Clone this repo to modules directory
git clone https://github.com/StudioRotate/nuxt-datocms.git
```

2. Add required module dependecies
```bash
yarn add datocms-listen graphql graphql-requeset
```

3. Add `nuxt-datocms` to the `modules` section of `nuxt.config.js`

```js
/// nuxt.config.js
{
  modules: [
    // Simple usage
    ['nuxt-datocms', {
      options: {
        datoToken: <DATO-API-TOKEN> // Add Dato API token
      }
    }]
  ]
}
```

Or a separate section `nuxt-datocms` for module options:

```js
// nuxt.config.js
{
  modules: [
    // Simple usage
    'nuxt-datocms',
  ],
  'nuxt-datocms': {
    options: {
      datoToken: <DATO-API-TOKEN> // Add Dato API token
    }
  }
}
```

4. Test fetching data from DatoCMS within a page's `asyncData` lifecycle method.

```js
async asyncData({ $cms }) {
  const data = await $cms.records.fetchRaw(`query {
    _site {
      locales
    }
  }`)
  console.log(data)
}
```

## Documentation
For all configuration, further setup and usage information, please read the parent [Plugin Docs](https://ajshortt-nuxt-datocms.netlify.app).

## Development

This module is currently a forked and modified version of [@ajshortt/nuxt-datocms](https://www.npmjs.com/package/@ajshortt/nuxt-datocms). It is recommended that changes be made on an instance-by-instance manner. However, if the changes are very useful to other instances, please submit a PR within the [module repo](https://github.com/StudioRotate/nuxt-datocms)
