import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  ScrollView,
} from 'react-native';
import ButtonMultiselect, {
  ButtonLayout,
} from 'react-native-button-multiselect';
import {
  AGE_RANGE_OPTIONS,
  FAV_LANGUAGE_OPTIONS,
  GENDER_OPTIONS,
  INTEREST_OPTIONS,
} from './constants/Options';

const buttonSelectedColors = {
  backgroundColor: '#FF9F0A',
  textColor: '#fff',
  borderColor: '#FF9500',
};
const buttonUnselectedColors = {
  backgroundColor: '#E0E0E0',
  textColor: '#333',
  borderColor: '#BDBDBD',
};

export default function App() {
  // NOTE: you can also make all of this form states into single state :)
  const [selectedGender, setSelectedGender] = React.useState<string>('');
  const [selectedAgeRange, setSelectedAgeRange] = React.useState<string>('');
  const [selectedInteresets, setSelectedInterests] = React.useState<string[]>(
    []
  );
  const [selectedLanguages, setSelectedLanguages] = React.useState<string[]>(
    []
  );

  const onSubmit = () => {
    const readableOutput = `Gender: ${selectedGender}\nAge Range: ${selectedAgeRange}\nInterests: ${selectedInteresets.join(
      ', '
    )}\nLanguages: ${selectedLanguages.join(', ')}`;

    alert(readableOutput);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>FORM MULTISELECT</Text>

        {/* Single Select | Button Layout Full Width */}
        <View style={styles.section}>
          <Text style={styles.label}>Your Gender</Text>
          <ButtonMultiselect
            buttons={GENDER_OPTIONS}
            layout={ButtonLayout.FULL_WIDTH}
            onButtonSelected={setSelectedGender}
            selectedButtons={selectedGender || ''}
            selectedColors={buttonSelectedColors}
            unselectedColors={buttonUnselectedColors}
            buttonStyle={styles.buttonMultiselect}
            textStyle={styles.buttonMultiselectTextStyle}
          />
        </View>

        {/* Single Select | Button Layout Carousel */}
        <View style={styles.sectionWithoutPadding}>
          <Text style={[styles.label, styles.labelWithPadding]}>
            Your Age Range
          </Text>
          <ButtonMultiselect
            buttons={AGE_RANGE_OPTIONS}
            layout={ButtonLayout.CAROUSEL}
            onButtonSelected={setSelectedAgeRange}
            selectedButtons={selectedAgeRange || ''}
            selectedColors={buttonSelectedColors}
            unselectedColors={buttonUnselectedColors}
            buttonStyle={styles.buttonMultiselect}
            textStyle={styles.buttonMultiselectTextStyle}
            horizontalPadding={16}
          />
        </View>

        {/* Multi Select | Button Layout GRID */}
        <View style={styles.section}>
          <Text style={styles.label}>Your Intereset</Text>
          <ButtonMultiselect
            buttons={INTEREST_OPTIONS}
            layout={ButtonLayout.GRID}
            multiselect
            onButtonSelected={setSelectedInterests}
            selectedButtons={selectedInteresets || []}
            selectedColors={buttonSelectedColors}
            unselectedColors={buttonUnselectedColors}
            buttonStyle={styles.buttonMultiselect}
            textStyle={styles.buttonMultiselectTextStyle}
          />
        </View>

        {/* Multi Select | Button Layout CAROUSEL */}
        <View style={styles.sectionWithoutPadding}>
          <Text style={[styles.label, styles.labelWithPadding]}>
            Your Favorite Language
          </Text>
          <ButtonMultiselect
            buttons={FAV_LANGUAGE_OPTIONS}
            layout={ButtonLayout.CAROUSEL}
            onButtonSelected={setSelectedLanguages}
            selectedButtons={selectedLanguages || []}
            selectedColors={buttonSelectedColors}
            unselectedColors={buttonUnselectedColors}
            buttonStyle={styles.buttonMultiselect}
            textStyle={styles.buttonMultiselectTextStyle}
            horizontalPadding={16}
            multiselect
          />
        </View>

        <Button title="Submit" onPress={onSubmit} color="#1565C0" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    padding: 16,
  },
  sectionWithoutPadding: {
    paddingVertical: 16,
  },
  label: {
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 15,
  },
  labelWithPadding: {
    paddingHorizontal: 16,
  },
  buttonMultiselect: {},
  buttonMultiselectTextStyle: {},
});
