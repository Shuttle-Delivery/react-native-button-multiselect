# React Native Button Multiselect

React Native Button Multiselect is a versatile component designed for seamless integration of button-based multi-select functionality into React Native applications.

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
  <img src="https://i.imgur.com/H1zVy5r.gif" alt="DEMO" width="380" height="826"/>
</p>

## Table of Contents

1. [Installation](#installation)
1. [Demo](#demo)
1. [Usage](#basic-usage)
1. [Props](#props)
1. [Button Layout](#button-layout)

## Installation

Install the package using Yarn or npm:

```sh
yarn add react-native-button-multiselect
# or
npm install --save react-native-button-multiselect
```

## Demo

You can see a live demo on this [Expo Snack](https://snack.expo.dev/@shuttlejosie/react-native-button-multiselect-example). 

You can also experiment with the example app in the repo using Expo:

1. Clone this repository.
2. Navigate to the example folder.
3. Install dependencies:

```sh
cd example
yarn install
```

Now, you can run the app with

```sh
yarn start
```

## Basic Usage

Implement the component in your app:

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

Detailed descriptions of the available props:

| Prop                | Type                            | Description                                                                                                                                         | Required |
| ------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `layout`            | `ButtonLayout`                  | Layout type for rendering buttons: `ButtonLayout.CAROUSEL`, `ButtonLayout.FULL_WIDTH`, or `ButtonLayout.GRID`.                                      | Yes      |
| `buttons`           | `ButtonProps[]`                 | Array of button options, each with a `label` and unique `value`. [Details](#button-props)                                                           | Yes      |
| `selectedButtons`   | `string \| string[]`            | Currently selected button(s). Use an array for multi-select mode, and a string for single-select mode.                                              | Yes      |
| `onButtonSelected`  | `Function`                      | Callback function invoked when a button is selected. Receives the selected value(s).                                                                | Yes      |
| `containerStyle`    | `ViewStyle \| Array<ViewStyle>` | Custom styles for the container wrapping the buttons.                                                                                               | No       |
| `horizontalPadding` | `number`                        | Horizontal padding for the buttons.                                                                                                                 | No       |
| `buttonStyle`       | `ViewStyle \| Array<ViewStyle>` | Custom styles for the buttons.                                                                                                                      | No       |
| `textStyle`         | `TextStyle \| Array<TextStyle>` | Custom styles for the button text.                                                                                                                  | No       |
| `selectedColors`    | `ThemeColors`                   | Theme colors for selected buttons, including `backgroundColor`, `textColor`, and `borderColor`. [Details](#theme-colors)                            | No       |
| `unselectedColors`  | `ThemeColors`                   | Theme colors for unselected buttons, including `backgroundColor`, `textColor`, and `borderColor`. [Details](#theme-colors)                          | No       |
| `buttonMargin`      | `number`                        | Margin between buttons.                                                                                                                             | No       |
| `multiselect`       | `boolean`                       | Enable multi-select mode. Default is `false` (single-select). [Details](#mode)                                                                      | No       |

### ButtonProps

| Prop    | Type     | Description                              |
| ------- | -------- | ---------------------------------------- |
| `label` | `string` | Label for the button.                    |
| `value` | `string` | Unique value for the button.             |

### ThemeColors

| Prop              | Type     | Description                     |
| ----------------- | -------- | ------------------------------- |
| `backgroundColor` | `string` | Button's background.            |
| `textColor`       | `string` | Button's text color.            |
| `borderColor`     | `string` | Button's border.                |

### Conditional Props (multiselect)

| Condition           | Props                                                                         | Description                                                                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `multiselect:true`  | `{ selectedButtons: string[]; onButtonSelected: (value: string[]) => void; }` | Conditional prop for multi-select mode. Requires `selectedButtons` as an array and the `onButtonSelected` callback function that will return an array of strings. |
| `multiselect:false` | `{ selectedButtons: string; onButtonSelected: (value: string) => void; }`     | Conditional prop for single-select mode. Requires `selectedButtons` as a string and the `onButtonSelected` callback function that will return a string.          |

## Button Layout

#### FULL_WIDTH

<p align="center">
  <img src="https://i.imgur.com/BqegPXd.gif" alt="DEMO"/>
</p>

```js
<ButtonMultiselect
  buttons={[]}
  layout={ButtonLayout.FULL_WIDTH}
  onButtonSelected={setSelectedOption}
  selectedButtons={selectedOption}
/>
```

#### CAROUSEL

<p align="center">
  <img src="https://i.imgur.com/lOeLpmu.gif" alt="DEMO"/>
</p>

```js
<ButtonMultiselect
  buttons={[]}
  layout={ButtonLayout.CAROUSEL}
  onButtonSelected={setSelectedOption}
  selectedButtons={selectedOption}
/>
```

#### GRID

<p align="center">
  <img src="https://i.imgur.com/1CHUXNG.gif" alt="DEMO"/>
</p>

```js
<ButtonMultiselect
  buttons={[]}
  layout={ButtonLayout.GRID}
  onButtonSelected={setSelectedOption}
  selectedButtons={selectedOption}
/>
```

## Multiselect

#### Single-select mode (like radio)

<p align="center">
  <img src="https://i.imgur.com/BqegPXd.gif" alt="DEMO"/>
</p>

```js
<ButtonMultiselect
  buttons={[...]}
  layout={ButtonLayout.GRID}
  onButtonSelected={setSelectedOption}
  selectedButtons={selectedOption}
/>
```

#### Multi-select (like checkbox)

<p align="center">
  <img src="https://i.imgur.com/Ixi7KdB.gif" alt="DEMO"/>
</p>

```js
<ButtonMultiselect
  buttons={[...]}
  multiselect
  layout={ButtonLayout.CAROUSEL}
  onButtonSelected={setSelectedOptions}
  selectedButtons={selectedOptions}
/>
```

## License

This project is licensed under the MIT License. See the License tab for more details.

---
