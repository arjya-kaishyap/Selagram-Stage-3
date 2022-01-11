import React from "react";
import {View,Text,StyleSheet,SafeAreaView,Platform,StatusBar,Image,FlatList, ScrollView} from "react-native";
import { createDropDownNavigator } from "@react-navigation/drawer";
import { TextInput } from "react-native-gesture-handler";

 
export default class CreatePost extends Component {
  render(){
  return (
    <View style={styles.container}>
    <SafeAreaView style = {styles.droidSafeArea} />
    <View style = {styles.appTitle} >
     <View style = {styles.appIcon}>
         <Image source={require("../assets/logo.png")} style = {styles.iconImage}
         ></Image>
     </View>
        <View style = {styles.appTitleTextContainer}>
            <Text style = {styles.appTitleText}> New Post </Text>
        </View>
           </View>
           <View style = {Styles.fieldsContainer}>
             <ScrollView>
               <Image source={preview_Image[this.state.previewImage]}
               style = {Styles.previewImage}
               ></Image>
              <View style = {{height:
              RFValue(this.state.dropdownHeight)}}>
                <DropDownPicker
                items = {[
                 {lebel: "Image 1", value: "image_1"},
                 {lebel: "Image 2", value: "image_2"},
                 {lebel: "Image 3", value: "image_3"},
                 {lebel: "Image 4", value: "image_4"},
                 {lebel: "Image 5", value: "image_5"},
                 {lebel: "Image 6", value: "image_6"},
                 {lebel: "Image 7", value: "image_7"}

                ]}
                defaultValue = {this.state.previewImage}
                containerStyle = {{
                  height: 40,
                  borderRadius: 20,
                  marginBottom: 10
                }}
                onOpen = {() => {
                  this.setState({dropdownHeight: 170});
                }}
                onClose = {() => {
                  this.setState({dropdownHeight: 40});
                }}
                style = {{backgroundcolor: "transparent"}}
                itemStyle = {{justifyContent: "flex-start"}}
                dropDownStyle = {{backgroundcolor: "#2a2a2a"}}
                lebelStyle = {{color: "white"}}
                arrowStyle = {{color: "white"}}
                onChangeItem = {item =>
                this.setState({previewImage: item.value})} />
                </View>
                  <TextInput style = {Styles.inputFont}
                   onChangeText={caption => this.setState({caption})}
                   placeholder={"Caption"}
                   placeholderTextColor={"white"} />

             </ScrollView>
           </View>
          <View style = {{flex: 0.08}} />
      </View>
  )

}
}
