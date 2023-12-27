import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  ScrollView,
  TouchableOpacity,
  Linking,
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

const primaryColor = '#FF9500';
const buttonSelectedColors = {
  backgroundColor: '#FF9F0A',
  textColor: '#fff',
  borderColor: primaryColor,
};
const buttonUnselectedColors = {
  backgroundColor: '#e8e8e8',
  textColor: '#333',
  borderColor: '#ccc',
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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>MULTISELECT FORM</Text>
          <View style={styles.subTitleContainer}>
            <Text>By </Text>
            <TouchableOpacity
              style={styles.subTitleButton}
              onPress={() => {
                Linking.openURL('https://www.shuttledelivery.co.kr/en');
              }}
            >
              <Text style={styles.subTitleButtonText}>SHUTTLE</Text>
            </TouchableOpacity>
          </View>
        </View>

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
          <Text style={styles.label}>Your Intereset(s)</Text>
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
            Your Favorite Language(s)
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

        <Button
          title="SUBMIT"
          onPress={onSubmit}
          color={buttonSelectedColors.borderColor}
        />
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
    marginBottom: 6,
  },
  titleContainer: { marginBottom: 16 },
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
  subTitleButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitleButtonText: {
    color: primaryColor,
    fontWeight: 'bold',
  },
  subTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
