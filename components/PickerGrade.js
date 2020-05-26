import React, {Component} from 'react';
import {Button} from 'react-native-paper';
import AwesomeButton from 'react-native-really-awesome-button';
import {StyleSheet, Text, View, Platform, Dimensions} from 'react-native';
import {Picker} from '@react-native-community/picker';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

const {width, height} = Dimensions.get('screen');

class PickerGrade extends Component {
  state = {
    grade: 0,
    credit: 0,
    TotalCredit: 0,
    TotalGrade: 0,
    GPA: 0,
    text: '',
    count: 0,
  };

  updateGrade = (grade) => {
    this.setState({grade: grade});
  };

  updateCredit = (credit) => {
    this.setState({credit: credit});
  };

  updateGPA = (GPA) => {
    this.setState({GPA: GPA});
  };

  updateTotalGrade = (TotalGrade) => {
    this.setState({TotalGrade: TotalGrade});
  };

  updateTotalCredit = (TotalCredit) => {
    this.setState({TotalCredit: TotalCredit});
  };

  changeCount = (count) => {
    this.setState({count: count});
  };

  render() {
    return (
      <View style={styles.calculator}>
        <Text style={styles.title}>GPA Calculator</Text>
        <Text style={styles.calTitle}>Course: </Text>
        <Text style={styles.calTitle}>Credit: </Text>
        <Picker
          selectedValue={this.state.credit}
          onValueChange={this.updateCredit}
          style={styles.picker}>
          <Picker.Item label="6" value={6} style={styles.pickerItem} />
          <Picker.Item label="5" value={5} style={styles.pickerItem} />
          <Picker.Item label="4" value={4} style={styles.pickerItem} />
          <Picker.Item label="3" value={3} style={styles.pickerItem} />
          <Picker.Item label="2" value={2} style={styles.pickerItem} />
          <Picker.Item label="1" value={1} style={styles.pickerItem} />
          <Picker.Item label="0" value={0} style={styles.pickerItem} />
        </Picker>
        <Text style={styles.calTitle}>Grade: </Text>
        <Picker
          selectedValue={this.state.grade}
          onValueChange={this.updateGrade}
          itemStyle={styles.pickerItem}>
          <Picker.Item label="A+ (4.3)" value={4.3} style={styles.pickerItem} />
          <Picker.Item label="A (4.0)" value={4.0} style={styles.pickerItem} />
          <Picker.Item label="A- (3.7)" value={3.7} style={styles.pickerItem} />
          <Picker.Item label="B+ (3.3)" value={3.3} style={styles.pickerItem} />
          <Picker.Item label="B (3.0)" value={3.0} style={styles.pickerItem} />
          <Picker.Item label="B- (2.7)" value={2.7} style={styles.pickerItem} />
          <Picker.Item label="C+ (2.3)" value={2.3} style={styles.pickerItem} />
          <Picker.Item label="C (2.0)" value={2.0} style={styles.pickerItem} />
          <Picker.Item label="C- (1.7)" value={1.7} style={styles.pickerItem} />
          <Picker.Item label="D (1.0)" value={1.0} style={styles.pickerItem} />
          <Picker.Item label="F (0.0)" value={0.0} style={styles.pickerItem} />
        </Picker>

        <View style={styles.calButton}>
          <Button
            mode="contained"
            style={styles.button}
            color={Colors.highlightColor}
            labelStyle={styles.buttonContent}
            onPress={() => {
              const C1 = this.state.credit;
              const TC1 = this.state.TotalCredit;
              const tempTotalCredit = C1 + TC1;
              const G1 = this.state.grade * this.state.credit;
              const TG1 = this.state.TotalGrade;
              const tempTotalGrade = G1 + TG1;
              const tempCount = this.state.count + 1;
              this.setState({
                TotalCredit: tempTotalCredit,
                TotalGrade: tempTotalGrade,
                GPA: tempTotalGrade / tempTotalCredit,
                count: tempCount,
              });
            }}>
            Add Course
          </Button>
          <Button
            mode="contained"
            style={styles.button}
            color={Colors.highlightColor}
            labelStyle={styles.buttonContent}
            onPress={() => {
              this.setState({
                TotalCredit: 0,
                TotalGrade: 0,
                GPA: NaN,
                count: 0,
              });
            }}>
            Reset
          </Button>
        </View>
        <Text style={styles.calTitle}>
          Number of Courses: {this.state.count}
        </Text>
        <Text style={styles.calTitle}>
          Number of Credit: {this.state.TotalCredit}
        </Text>
        <Text style={styles.calTitle}>GPA: {this.state.GPA}</Text>
      </View>
    );
  }
}

export default PickerGrade;

const styles = StyleSheet.create({
  calculator: {
    padding: 25,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: Colors.primaryColor,
    paddingTop: 10,
    paddingBottom: 10,
  },
  calTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  calButton: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  picker: {
    padding: 25,
  },
  pickerItem: {
    paddingLeft: 15,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    width: width / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: Colors.highlightColor,
  },
  buttonContent: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    letterSpacing: 0,
    color: 'white',
  },
});
