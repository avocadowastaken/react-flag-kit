# [FlagKit](https://github.com/madebybowtie/FlagKit) for React

[![Main](https://github.com/umidbekk/react-flag-kit/actions/workflows/main.yml/badge.svg)](https://github.com/umidbekk/react-flag-kit/actions/workflows/main.yml)
[![npm version](https://img.shields.io/npm/v/react-flag-kit.svg)](https://npmjs.com/react-flag-kit)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/react-flag-kit.svg)](https://bundlephobia.com/result?p=react-flag-kit)
[![npm downloads](https://img.shields.io/npm/dm/react-flag-kit.svg)](https://npmjs.com/react-flag-kit)

### Installation

```bash
npm i react-flag-kit
# or using Yarn
yarn add react-flag-kit
```

### Usage

```js
import { FlagIcon } from "react-flag-kit";

export const USAFlag = () => <FlagIcon code="US" size={48} />;
```

### Props

```ts
export interface FlagIconProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  code: FlagIconCode;
}
```

### Reference

The list of available flags you can find in [FlagKit](https://github.com/madebybowtie/FlagKit/blob/master/Assets/Flags.md) repo.

### Licence

MIT
