import React,{useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function RealMadrid  (){
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
        <Image source={require('../assets/tatics/REALMADRID/Real_Madrid.png')} style={{width :62 , height : 86 , marginLeft : 100 , marginTop : -70}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -50 }}>Real </Text>
            <Text style={{fontSize:18 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -5 }}>Madrid</Text>
            <View style= {{marginTop:50}}>
            <Image source={require('../assets/tatics/REALMADRID/CeltaVigo.png')} style={{width :53 , height : 103 , marginHorizontal : 300 , marginVertical : -20  }}/>
            <Text style={{fontSize:55 , fontWeight : "bold" ,  marginVertical : -85 , marginHorizontal : 106 }}> 1  -   0</Text>
            <View style={{marginTop :'auto'}}>
            <Image source={require('../assets/tatics/REALMADRID/Real_Madrid.png')} style={{width :74 , height : 100 , marginHorizontal : 15 , marginVertical : 0 }}/>
            <Image source={require('../assets/tatics/REALMADRID/REALstaticas.jpg')} style={{width :420 , height : 330 , marginHorizontal : -10 , marginVertical: 10 }}/>
            <Image source={require('../assets/tatics/REALMADRID/REALtatics.jpg')} style={{width :400 , height : 578 , marginHorizontal : -0 , marginVertical: -10 }}/>
            </View>
            </View>
            </ScrollView>
    )}