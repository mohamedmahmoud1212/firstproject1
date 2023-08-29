import React,{useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function Dortmund  (){
    const navigation =useNavigation();
    return (
            <ScrollView>
                <TouchableOpacity onPress={()=> navigation.navigate('UserProfile')}>
            <Image source={require('../assets/messi.png')} style={{width : 77 , height : 51 , marginVertical : 24 , marginHorizontal : 315}}/>
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require('../assets/back.png')} style={{width : 108 , height : 72 , marginVertical : -90 , marginHorizontal :-28 }}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/notfication.png')} style={{width : 44 , height : 30 , marginVertical : -60 , marginHorizontal : 280  }}/>
             </TouchableOpacity>
        <Image source={require('../assets/tatics/Dortomld/BorussiaDortmund_.png')} style={{width :63 , height : 58 , marginLeft : 100 , marginTop : -70}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -50 }}>Borussia </Text>
            <Text style={{fontSize:18 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -5 }}>Dortmund</Text>
            <View style= {{marginTop:50}}>
            <Image source={require('../assets/tatics/Dortomld/BorussiaDortmund_.png')} style={{width :82 , height : 77.27 , marginHorizontal : 300 , marginVertical : -20  }}/>
            <Text style={{fontSize:55 , fontWeight : "bold" ,  marginVertical : -60 , marginHorizontal : 106 }}> 0  -   1</Text>
            <View style={{marginTop :'auto'}}>
            <Image source={require('../assets/tatics/Dortomld/Koeln.png')} style={{width :88.44 , height : 98 , marginHorizontal : 15 , marginVertical : -20 }}/>
            <Image source={require('../assets/tatics/Dortomld/DORTstaticas.jpg')} style={{width :420 , height : 330 , marginHorizontal : -10 , marginVertical: 40 }}/>
            <Image source={require('../assets/tatics/Dortomld/DORTttatics.jpg')} style={{width :400 , height : 578 , marginHorizontal : -0 , marginVertical: -10 }}/>
            </View>
            </View>
            </ScrollView>
    )}