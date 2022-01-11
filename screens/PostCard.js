import React, { Component } from "react";
import {View,Text,Styles,StyleSheet,SafeAreaView,Platform,StatusBar,Image,Dimensions} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons'


import AppLoading from "expo-app-loading";

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }
  render(){
       return(
      <View style = {Styles.container}>
        <View style = {Styles.cardContainer}>
          <View style = {Styles.authorContainer}>
            <View style = {Styles.authorImageContainer}>
                <Image 
                source = {require("../assets/profile_img.png")}
                style = {Styles.profileImage}
                ></Image>
                   </View>
                   <View style = {Styles.authorNameContainer}>
                   <Text style = {Styles.authorNameText}> {this.props.post.author} </Text>
                   </View>
                   </View>
                   <Image source={require("../assets/post.jpeg")} style = {Styles.postImage} />
                   <View style = {Styles.captionContainer}>
                    <Text style = {Styles.captionText}>
                      {this.props.post.caption}
                    </Text>
                  </View>
                  <View style = {Styles.ationContainer}>
                    <View style = {Styles.likeButton}>
                      <Ionicons name = {"heart"} size={RFValue(30)} color={"white"}/>
                      <Text style = {Styles.likeText} > 12k </Text>
                    </View>
                  </View>
                </View>
              </View>
           );

    }
  
  
  
  
  
  
  
  
  
  
  
  
  }