import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonMultiselect, { ButtonLayout } from '../index';

describe('ButtonMultiselect', () => {
  const buttons = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ];

  it('renders buttons correctly', () => {
    const { getByText } = render(
      <ButtonMultiselect
        layout={ButtonLayout.FULL_WIDTH}
        buttons={buttons}
        onButtonSelected={() => {}}
        selectedButtons=""
      />
    );

    buttons.forEach((button) => {
      const buttonElement = getByText(button.label);
      expect(buttonElement).toBeTruthy();
    });
  });

  it('handles button clicks correctly', () => {
    const onButtonSelectedMock = jest.fn();

    const { getByText } = render(
      <ButtonMultiselect
        layout={ButtonLayout.FULL_WIDTH}
        buttons={buttons}
        onButtonSelected={onButtonSelectedMock}
        selectedButtons=""
      />
    );

    fireEvent.press(getByText(buttons[0].label));
    expect(onButtonSelectedMock).toHaveBeenCalledWith(buttons[0].value);

    fireEvent.press(getByText(buttons[1].label));
    expect(onButtonSelectedMock).toHaveBeenCalledWith(buttons[1].value);
  });

  it('handles multiselect button clicks correctly', () => {
    const onButtonSelectedMock = jest.fn();

    const { getByText } = render(
      <ButtonMultiselect
        layout={ButtonLayout.FULL_WIDTH}
        buttons={buttons}
        onButtonSelected={onButtonSelectedMock}
        selectedButtons={[]}
        multiselect
      />
    );

    // Click the first button
    fireEvent.press(getByText(buttons[0].label));
    expect(onButtonSelectedMock).toHaveBeenCalledWith(
      expect.arrayContaining([buttons[0].value])
    );

    // Click the second button
    fireEvent.press(getByText(buttons[1].label));
    expect(onButtonSelectedMock).toHaveBeenCalledWith(
      expect.arrayContaining([buttons[1].value])
    );
  });

  it('handles deselecting a button correctly', () => {
    const onButtonSelectedMock = jest.fn();

    const { getByText } = render(
      <ButtonMultiselect
        layout={ButtonLayout.FULL_WIDTH}
        buttons={buttons}
        onButtonSelected={onButtonSelectedMock}
        selectedButtons={[buttons[0].value]}
        multiselect
      />
    );

    // Click the first button to deselect it
    fireEvent.press(getByText(buttons[0].label));
    expect(onButtonSelectedMock).toHaveBeenCalledWith([]);
  });
});
