import React from 'react';
import {View, StyleSheet} from 'react-native';
import PickerGrades from '../components/PickerGrade';

const AcademicsScreen = (props) => {
  return (
    <View>
      <PickerGrades />
    </View>
  );
};

AcademicsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Academics',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AcademicsScreen;
/*const [TotalCredit, setTotalCredit] = useState(0);
      const [TotalGrade, setTotalGrade] = useState(0);
      const [GPA, setGPA] = useState(0); */
