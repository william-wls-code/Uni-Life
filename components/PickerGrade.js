import React, { Component} from 'react';
import AwesomeButton from "react-native-really-awesome-button";
import {
   StyleSheet,
   Text,
   View,
   Platform, 
 } from "react-native";
import {Picker} from '@react-native-community/picker';


class PickerGrade extends Component {
   state = {
      grade: 0, 
      credit:0, 
      TotalCredit:0,
      TotalGrade:0,
      GPA:0,
      text: "",
      count:0
   }

   updateGrade = (grade) => {
      this.setState({grade: grade})
   }

   updateCredit = (credit) => {
      this.setState({credit: credit})
   }

   updateGPA = (GPA) => {
      this.setState({GPA: GPA})
   }

   updateTotalGrade = (TotalGrade) => {
      this.setState({TotalGrade: TotalGrade})
   }

   updateTotalCredit = (TotalCredit) => {
      this.setState({TotalCredit: TotalCredit})
   }

   changeCount = (count) => {
      this.setState({ count: count });
   };

   render() {
      return (
         <View>
            <Text>Course: </Text>
            <Text>Credit: </Text>
            <Picker selectedValue = {this.state.credit} onValueChange = {this.updateCredit}>
                <Picker.Item label = "6" value = {6} />
                <Picker.Item label = "5" value = {5} />
                <Picker.Item label = "4" value = {4} />
                <Picker.Item label = "3" value = {3} />
                <Picker.Item label = "2" value = {2} />
                <Picker.Item label = "1" value = {1} />
                <Picker.Item label = "0" value = {0} />
            </Picker>
            <Text>Grade: </Text>
            <Picker selectedValue = {this.state.grade} onValueChange = {this.updateGrade}>
               <Picker.Item label = "A+ (4.3)" value = {4.3} />
               <Picker.Item label = "A (4.0)" value = {4.0} />
               <Picker.Item label = "A- (3.7)" value = {3.7} />
               <Picker.Item label = "B+ (3.3)" value = {3.3} />
               <Picker.Item label = "B (3.0)" value = {3.0} />
               <Picker.Item label = "B- (2.7)" value = {2.7} />
               <Picker.Item label = "C+ (2.3)" value = {2.3} />
               <Picker.Item label = "C (2.0)" value = {2.0} />
               <Picker.Item label = "C- (1.7)" value = {1.7} />
               <Picker.Item label = "D (1.0)" value = {1.0} />
               <Picker.Item label = "F (0.0)" value = {0.0} />
            </Picker>

            <View style={{ flexDirection: 'row' }}><AwesomeButton 
               backgroundColor= "#FAFAFA"
               backgroundDarker= "#67cbc3"
               backgroundActive= "#e7fcfb"
               backgroundPlaceholder= "#b3e5e1"
               textColor= "#349890"
               backgroundProgress= "#c5ece8"
               borderWidth= {2}
               borderColor= "#b3e5e1"
               activityColor= "#349890"
               onPress = {() => {
                  const C1 = this.state.credit
                  const TC1 = this.state.TotalCredit
                  const tempTotalCredit = C1+TC1
                  const G1 = this.state.grade * this.state.credit
                  const TG1 = this.state.TotalGrade
                  const tempTotalGrade = G1+TG1
                  const tempCount = this.state.count + 1
                  this.setState({
                     TotalCredit : tempTotalCredit,
                     TotalGrade : tempTotalGrade,
                     GPA: tempTotalGrade/ tempTotalCredit,
                     count: tempCount,
                  })
               }}
            >Add Course
            </AwesomeButton>
            <AwesomeButton 
               backgroundColor= "#FAFAFA"
               backgroundDarker= "#67cbc3"
               backgroundActive= "#e7fcfb"
               backgroundPlaceholder= "#b3e5e1"
               textColor= "#349890"
               backgroundProgress= "#c5ece8"
               borderWidth= {2}
               borderColor= "#b3e5e1"
               activityColor= "#349890"
               onPress = {() => {
                  this.setState({
                     TotalCredit : 0,
                     TotalGrade : 0,
                     GPA: NaN,
                     count: 0
                  })
               }}  
            >Reset
            </AwesomeButton></View>
            <Text>Number of Courses: {this.state.count}</Text>
            <Text>Number of Credit: {this.state.TotalCredit}</Text>
            <Text>GPA: {this.state.GPA}</Text>
         </View>
      )
   }
}


export default PickerGrade


const styles = StyleSheet.create({
   
})