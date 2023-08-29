import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function Arsenal  (){
    const navigation =useNavigation()
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
        <Image source={require('../../assets/tatics/Arsenal/Arsenal.png')} style={{width :58 , height : 69 , marginLeft : 80 , marginTop : -70}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -50 }}>Arsenal</Text>
            <Image source={require('../../assets/tatics/Arsenal/crystal.png')} style={{width :91 , height : 113 , marginHorizontal : 280  }}/>
            <Text style={{fontSize:55 , fontWeight : "bold" ,  marginVertical : -85 , marginHorizontal : 102 }}>1   -   0</Text>
            <Image source={require('../../assets/tatics/Arsenal/Arsenal.png')} style={{width :75 , height : 85 , marginHorizontal : 15 , marginVertical : 10 }}/>
            <Image source={require('../../assets/tatics/Arsenal/arsenalstaticas.jpg')} style={{width :430 , height : 330 , marginHorizontal : 8, marginVertical: -5,marginBottom:5 }}/>
            <Image source={require('../../assets/tatics/Arsenal/Atatics.jpg')} style={{width :405 , height : 578 , marginHorizontal : 8 , marginVertical: -8 }}/>
            </ScrollView>
    )}