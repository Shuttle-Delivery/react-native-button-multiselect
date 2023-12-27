# React Native Button Multiselect

a React Native component for easy integration of button-based multi-select functionality

DEMO

<p align="center" style="font-size: 1.2rem;">
  <a href="https://npmjs.org/package/react-native-button-multiselect" title="View this project on npm">
    <img src="http://img.shields.io/npm/v/react-native-button-multiselect.svg?style=flat-square" alt="npm version" />
  </a>
  <a href="https://npmjs.org/package/react-native-button-multiselect" title="View this project on npm">
    <img src="http://img.shields.io/npm/dm/react-native-button-multiselect.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://npmjs.org/package/react-native-button-multiselect" title="View this project on npm">
    <img src="http://img.shields.io/npm/l/react-native-button-multiselect.svg?style=flat-square" alt="npm licence" />
  </a>
</p>

## Table of Contents

- 

## Installation

```sh
yarn add react-native-button-multiselect
```

## Try it out

try on expo

## Basic Usage

```js
import ButtonMultiselect, {
  ButtonLayout,
} from 'react-native-button-multiselect';

// ...
const GENDER_OPTIONS = [
  {
    label: 'MALE',
    value: 'M',
  },
  {
    label: 'FEMALE',
    value: 'F',
  },
];

// ...

const [selectedGender, setSelectedGender] = React.useState < string > '';

// ...

<ButtonMultiselect
  buttons={GENDER_OPTIONS}
  layout={ButtonLayout.FULL_WIDTH}
  onButtonSelected={setSelectedGender}
  selectedButtons={selectedGender || ''}
/>;
```

Checkout Example folder, to run the project with this library

## Props

//table

## Demo (Layout and Multi props)

demo with gif spesific, there will be 6 demo

## License

MIT

---