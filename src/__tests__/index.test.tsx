import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonMultiselect, { ButtonLayout } from '../index';

const buttonOption1 = { label: 'Option 1', value: 'option1' };
const buttonOption2 = { label: 'Option 2', value: 'option2' };
const buttons = [buttonOption1, buttonOption2];
describe('ButtonMultiselect', () => {
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

    fireEvent.press(getByText(buttonOption1.label));
    expect(onButtonSelectedMock).toHaveBeenCalledWith(buttonOption1.value);

    fireEvent.press(getByText(buttonOption2.label));
    expect(onButtonSelectedMock).toHaveBeenCalledWith(buttonOption2.value);
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
    fireEvent.press(getByText(buttonOption1.label));
    expect(onButtonSelectedMock).toHaveBeenCalledWith(
      expect.arrayContaining([buttonOption1.value])
    );

    // Click the second button
    fireEvent.press(getByText(buttonOption2.label));
    expect(onButtonSelectedMock).toHaveBeenCalledWith(
      expect.arrayContaining([buttonOption2.value])
    );
  });

  it('handles deselecting a button correctly', () => {
    const onButtonSelectedMock = jest.fn();

    const { getByText } = render(
      <ButtonMultiselect
        layout={ButtonLayout.FULL_WIDTH}
        buttons={buttons}
        onButtonSelected={onButtonSelectedMock}
        selectedButtons={[buttonOption1.value]}
        multiselect
      />
    );

    // Click the first button to deselect it
    fireEvent.press(getByText(buttonOption1.label));
    expect(onButtonSelectedMock).toHaveBeenCalledWith([]);
  });
});
