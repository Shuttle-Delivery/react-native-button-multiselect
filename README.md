# React Native Button Multiselect

a React Native component for easy integration of button-based multi-select functionality

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

<p align="center">
  <img src="https://github.com/Shuttle-Delivery/react-native-button-multiselect/blob/main/demo/demo.gif" alt="DEMO"/>
</p>

## Table of Contents

1. [Demo](#react-native-button-multiselect)
1. [Installation](#installation)
1. [Usage](#basic-usage)
1. [Props](#props)
1. [Button Layout](#button-layout)

## Installation

```sh
yarn add react-native-button-multiselect
# or
npm install --save react-native-button-multiselect
```

## Try it out

The example app is using Expo, if you want to try it, you can clone this repo, navigate to the `example` folder, and install all dependencies

```sh
cd example
yarn install
```

Now, you can run the app with

```sh
yarn start
```

## Basic Usage

```js
import ButtonMultiselect, {
  ButtonLayout,
} from 'react-native-button-multiselect';

// ...

const App = () => {
  // Define your button options
  const buttons = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ];

  // Set up state and handlers for selected buttons
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonSelected = (selectedValues) => {
    setSelectedButtons(selectedValues);
  };

  return (
    <ButtonMultiselect
      layout={ButtonLayout.CAROUSEL} // Choose from ButtonLayout enum: CAROUSEL, FULL_WIDTH, GRID
      buttons={buttons}
      selectedButtons={selectedButtons}
      onButtonSelected={handleButtonSelected}
      // Additional props can be customized as needed
    />
  );
};

export default App;
```

## Props

| Prop                | Type                            | Description                                                                                                                                         | Required |
| ------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `layout`            | `ButtonLayout`                  | Specifies the layout type and styles for rendering buttons. Choose from `ButtonLayout.CAROUSEL`, `ButtonLayout.FULL_WIDTH`, or `ButtonLayout.GRID`. | Yes      |
| `buttons`           | `ButtonProps[]`                 | An array of button options, each containing a `label` and a unique `value`. [more](#button-props)                                                   | Yes      |
| `selectedButtons`   | `string \| string[]`            | The currently selected button(s). In multi-select mode, use an array; in single-select mode, use a string.                                          | Yes      |
| `onButtonSelected`  | `Function`                      | Callback function invoked when a button is selected. Receives the selected value(s) as an argument.                                                 | Yes      |
| `containerStyle`    | `ViewStyle \| Array<ViewStyle>` | Custom styles for the container wrapping the buttons.                                                                                               | No       |
| `horizontalPadding` | `number`                        | Horizontal padding applied to the buttons.                                                                                                          | No       |
| `buttonStyle`       | `ViewStyle \| Array<ViewStyle>` | Custom styles for the buttons.                                                                                                                      | No       |
| `textStyle`         | `TextStyle \| Array<TextStyle>` | Custom styles for the button text.                                                                                                                  | No       |
| `selectedColors`    | `ThemeColors`                   | Theme colors for selected buttons, including `backgroundColor`, `textColor`, and `borderColor`. [more](#theme-colors)                               | No       |
| `unselectedColors`  | `ThemeColors`                   | Theme colors for unselected buttons, including `backgroundColor`, `textColor`, and `borderColor`. [more](#theme-colors)                             | No       |
| `buttonMargin`      | `number`                        | Margin between buttons.                                                                                                                             | No       |
| `multiselect`       | `boolean`                       | Optional prop to explicitly set multi-select mode. Default is `false` (single-select mode). [more](#mode)                                           | No       |

### ButtonProps

| Prop    | Type     | Description                              |
| ------- | -------- | ---------------------------------------- |
| `label` | `string` | Label for the button.                    |
| `value` | `string` | Unique value associated with the button. |

### ThemeColors

| Prop              | Type     | Description                     |
| ----------------- | -------- | ------------------------------- |
| `backgroundColor` | `string` | Background color of the button. |
| `textColor`       | `string` | Text color of the button.       |
| `borderColor`     | `string` | Border color of the button.     |

### Conditional Props (multiselect)

| Condition           | Props                                                                         | Description                                                                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `multiselect:true`  | `{ selectedButtons: string[]; onButtonSelected: (value: string[]) => void; }` | Conditional prop for multi-select mode. Requires `selectedButtons` as an array and `onButtonSelected` callback function that will return an array of string. |
| `multiselect:false` | `{ selectedButtons: string; onButtonSelected: (value: string) => void; }`     | Conditional prop for single-select mode. Requires `selectedButtons` as a string and `onButtonSelected` callback function that will return a string.          |

## Button Layout

### FULL_WIDTH

<p align="center">
  <img src="https://github.com/Shuttle-Delivery/react-native-button-multiselect/blob/main/demo/demo-fullwidth.gif" alt="DEMO"/>
</p>


```ts
<ButtonMultiselect
  buttons={[]}
  layout={ButtonLayout.FULL_WIDTH}
  onButtonSelected={setSelectedOption}
  selectedButtons={selectedOption}
/>
```

### CAROUSEL

<p align="center">
  <img src="https://github.com/Shuttle-Delivery/react-native-button-multiselect/blob/main/demo/demo-carousel.gif" alt="DEMO"/>
</p>

```ts
<ButtonMultiselect
  buttons={[]}
  layout={ButtonLayout.CAROUSEL}
  onButtonSelected={setSelectedOption}
  selectedButtons={selectedOption}
/>
```
### GRID

<p align="center">
  <img src="https://github.com/Shuttle-Delivery/react-native-button-multiselect/blob/main/demo/demo-grid.gif" alt="DEMO"/>
</p>

```ts
<ButtonMultiselect
  buttons={[]}
  layout={ButtonLayout.GRID}
  onButtonSelected={setSelectedOption}
  selectedButtons={selectedOption}
/>
```

## Multiselect

### Single-select mode (like radio)

<p align="center">
  <img src="https://github.com/Shuttle-Delivery/react-native-button-multiselect/blob/main/demo/demo-fullwidth.gif" alt="DEMO"/>
</p>

```ts
<ButtonMultiselect
  buttons={[...]}
  layout={ButtonLayout.GRID}
  onButtonSelected={setSelectedOption}
  selectedButtons={selectedOption}
/>
```


### Multi-select (like checkbox)

<p align="center">
  <img src="https://github.com/Shuttle-Delivery/react-native-button-multiselect/blob/main/demo/demo-multiselect.gif" alt="DEMO"/>
</p>

```ts
<ButtonMultiselect
  buttons={[...]}
  multiselect
  layout={ButtonLayout.CAROUSEL}
  onButtonSelected={setSelectedOptions}
  selectedButtons={selectedOptions}
/>
```




## License

MIT

---
