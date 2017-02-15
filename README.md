# [FlagKit](https://github.com/madebybowtie/FlagKit) for React
[![build status](https://img.shields.io/travis/umidbekkarimov/react-flag-kit/master.svg?style=flat-square)](https://travis-ci.org/umidbekkarimov/react-flag-kit)
[![npm version](https://img.shields.io/npm/v/react-flag-kit.svg?style=flat-square)](https://www.npmjs.com/package/react-flag-kit)
[![npm downloads](https://img.shields.io/npm/dm/react-flag-kit.svg?style=flat-square)](https://www.npmjs.com/package/react-flag-kit)



### Installation

With npm

```bash
npm i react-flag-kit --save --save-exact
```

With yarn

```bash
yarn add react-flag-kit -E
```



### Usage

If you want to bundle your app with flag icons:

```javascript
import FlagIcon from 'react-flag-kit/lib/FlagIcon';

export default () => <FlagIcon code="WW" size={48} />
```

If you want to use flag icons from CDN: 

```bash
import FlagIcon from 'react-flag-kit/lib/CDNFlagIcon.js';

export default () => <FlagIcon code="WW" size={48} />
```

More advanced examples you can find in [storybook](https://umidbekkarimov.github.io/react-flag-kit).



### Reference

The list of available flags you can find in [FlagKit](https://github.com/madebybowtie/FlagKit#reference) repo.



### Thanks

[FlagKit](https://github.com/madebybowtie/FlagKit) for awesome collection of flag icons.

[UNPKG](https://unpkg.com) for free and fast CDN.

### Licence

MIT