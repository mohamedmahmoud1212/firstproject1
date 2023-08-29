import React,{useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function Liverpool (){
    const navigation =useNavigation();
    return (
            <ScrollView>
                <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
            <Image source={require('../../assets/messi.png')} style={{width : 77 , height : 51 , marginVertical : 24 , marginHorizontal : 315}}/>
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require('../../assets/back.png')} style={{width : 108 , height : 72 , marginVertical : -90 , marginHorizontal :-28 }}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../assets/notfication.png')} style={{width : 44 , height : 30 , marginVertical : -60 , marginHorizontal : 280  }}/>
             </TouchableOpacity>
        <Image source={require('../../assets/tatics/Liver/liverpool.png')} style={{width :76 , height : 76 , marginLeft : 100 , marginTop : -70}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -50 }}>Liverpool</Text>
            <Image source={require('../../assets/tatics/Liver/liverpool.png')} style={{width :112 , height : 112 , marginHorizontal : 280  }}/>
            <Text style={{fontSize:55 , fontWeight : "bold" ,  marginVertical : -85 , marginHorizontal : 102 }}>1   -   3</Text>
            <Image source={require('../../assets/liverpoolR.png')} style={{width :65 , height : 85 , marginHorizontal : 15 , marginVertical : 10 }}/>
            <Image source={require('../../assets/tatics/Liver/staics.jpg')} style={{width :450 , height : 350 , marginHorizontal : -30 , marginVertical: -10 }}/>
            <Image source={require('../../assets/tatics/Liver/tatics.jpg')} style={{width :400 , height : 578 , marginHorizontal : -0 , marginVertical: -10 }}/>
            </ScrollView>
    )}