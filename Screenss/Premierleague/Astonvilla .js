import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function Astonvilla (){
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
        <Image source={require('../../assets/tatics/AstonVilla/Astonvella.png')} style={{width :50 , height : 69 , marginLeft : 110 , marginTop : -70}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -50 }}>Aston </Text>
            <Text style={{fontSize:18 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -5 }}>villa </Text>
            <Image source={require('../../assets/tatics/AstonVilla/Hibernian.png')} style={{width :75 , height : 82 , marginHorizontal : 300  }}/>
            <Text style={{fontSize:55 , fontWeight : "bold" ,  marginVertical : -85 , marginHorizontal : 110 }}>5   -   0</Text>
            <Image source={require('../../assets/tatics/AstonVilla/Astonvella.png')} style={{width :70 , height : 93 , marginHorizontal : 15 , marginVertical : 10 }}/>
            <Image source={require('../../assets/tatics/AstonVilla/ASstaics.jpg')} style={{width :424 , height : 328 , marginHorizontal : -15 , marginVertical: -10 }}/>
            <Image source={require('../../assets/tatics/AstonVilla/ASStatics.jpg')} style={{width :370 , height : 520 , marginHorizontal : 10 , marginVertical: -10 }}/>
            </ScrollView>
    )}