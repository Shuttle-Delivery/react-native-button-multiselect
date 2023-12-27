import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  type ViewStyle,
  Text,
  TouchableOpacity,
  type LayoutChangeEvent,
  type TextStyle,
  ScrollView,
} from 'react-native';

const LAYOUT = {
  CAROUSEL: 'carousel',
  FULL_WIDTH: 'full-width',
  GRID: 'grid',
};

const DEFAULT_SELECTED_COLORS = {
  backgroundColor: '#000',
  textColor: '#fff',
  borderColor: '#000',
};
const DEFAULT_UNSELECTED_COLORS = {
  backgroundColor: '#fff',
  textColor: '#000',
  borderColor: '#000',
};

const BUTTON_MARGIN = 8;

export type ConditionalValue =
  | {
      multiselect: true;
      selectedButtons: string[];
      onButtonSelected: (value: string[]) => void;
    }
  | {
      multiselect?: false;
      selectedButtons: string;
      onButtonSelected: (value: string) => void;
    };
interface ThemeColors {
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}
interface ButtonProps {
  label: string;
  value: string;
}
export type Props = {
  layout: (typeof LAYOUT)[keyof typeof LAYOUT];
  buttons: ButtonProps[];
  containerStyle?: ViewStyle | Array<ViewStyle>;
  horizontalPadding?: number;
  buttonStyle?: ViewStyle | Array<ViewStyle>;
  textStyle?: TextStyle | Array<TextStyle>;
  selectedColors?: ThemeColors;
  unselectedColors?: ThemeColors;
  buttonMargin?: number;
} & ConditionalValue;

const ButtonMultiselect = ({
  buttons,
  onButtonSelected,
  selectedButtons,
  layout = LAYOUT.FULL_WIDTH,
  containerStyle,
  buttonStyle,
  textStyle,
  multiselect = false,
  horizontalPadding = 0,
  selectedColors = DEFAULT_SELECTED_COLORS,
  unselectedColors = DEFAULT_UNSELECTED_COLORS,
  buttonMargin = BUTTON_MARGIN,
}: Props) => {
  const [containerWidth, setContainerWidth] = useState(0);

  const onLayoutChange = useCallback((ev: LayoutChangeEvent) => {
    if (ev?.nativeEvent?.layout) {
      setContainerWidth(ev.nativeEvent.layout.width);
    }
  }, []);

  const isSelected = (value: string) => {
    return multiselect && Array.isArray(selectedButtons)
      ? selectedButtons.includes(value)
      : selectedButtons === value;
  };

  const onSelected = (value: string) => {
    let selectedValues: string | string[];

    if (multiselect && Array.isArray(selectedButtons)) {
      selectedValues = isSelected(value)
        ? selectedButtons.filter((v) => v !== value)
        : [...selectedButtons, value];
    } else {
      selectedValues = isSelected(value) ? '' : value;
    }

    // @ts-expect-error: TS doesn't preserve types after destructuring, so the type isn't inferred correctly
    onButtonSelected?.(selectedValues);
  };

  const buttonStyleByLayoutType = (margin: number) => {
    switch (layout) {
      case LAYOUT.CAROUSEL:
        return {};
      case LAYOUT.FULL_WIDTH:
        return {
          width: containerWidth / buttons.length - margin,
        };
      case LAYOUT.GRID:
        return { marginBottom: 12 };
      default:
        return {};
    }
  };

  return (
    <View style={[styles.container, containerStyle]} onLayout={onLayoutChange}>
      {buttons && (
        <ScrollView
          scrollEnabled={layout === LAYOUT.CAROUSEL}
          contentContainerStyle={[
            styles.list,
            LAYOUT.GRID === layout && styles.grid,
          ]}
          horizontal={LAYOUT.GRID !== layout}
          showsHorizontalScrollIndicator={false}
        >
          {buttons.map((item, index) => {
            const isButtonSelected = multiselect
              ? selectedButtons.includes(item.value)
              : selectedButtons === item.value;
            const backgroundColor = isButtonSelected
              ? selectedColors.backgroundColor
              : unselectedColors.backgroundColor;
            const borderColor = isButtonSelected
              ? selectedColors.borderColor
              : unselectedColors.borderColor;
            const textToggleStyle: TextStyle = isButtonSelected
              ? {
                  color: selectedColors.textColor,
                  fontWeight: 'bold',
                }
              : {
                  color: unselectedColors.textColor,
                  fontWeight: 'normal',
                };

            const isFirstItem = index === 0;
            const isLastItem = index === buttons.length - 1;
            const margin = isLastItem ? 0 : buttonMargin;

            const horizontalPaddingStyle: ViewStyle =
              (isFirstItem || isLastItem) && !!horizontalPadding
                ? {
                    marginRight: isLastItem ? horizontalPadding : margin,
                    marginLeft: isFirstItem ? horizontalPadding : 0,
                  }
                : {};

            return (
              <TouchableOpacity
                key={item.value}
                onPress={() => {
                  onSelected(item.value);
                }}
                style={[
                  styles.button,
                  {
                    backgroundColor,
                    marginRight: margin,
                    borderColor,
                  },
                  buttonStyleByLayoutType(margin),
                  horizontalPaddingStyle,
                  buttonStyle,
                ]}
              >
                <Text style={[styles.text, textToggleStyle, textStyle]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  list: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  grid: {
    flexWrap: 'wrap',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  text: {
    fontSize: 14,
  },
});

export const ButtonLayout = LAYOUT;
export default ButtonMultiselect;
