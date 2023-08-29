import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function Milan  (){
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
        <Image source={require('../../assets/tatics/Millan/Milan.png')} style={{width :46 , height : 73 , marginLeft : 120 , marginTop : -70}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -50 }}>Milan </Text>
            <View style= {{marginTop:50}}>
            <Image source={require('../../assets/tatics/Millan/Bolnia.png')} style={{width :53 , height : 88.27 , marginHorizontal : 300 , marginVertical : -20  }}/>
            <Text style={{fontSize:55 , fontWeight : "bold" ,  marginVertical : -85 , marginHorizontal : 106 }}> 2  -   0</Text>
            <View style={{marginTop :'auto'}}>
            <Image source={require('../../assets/tatics/Millan/Milan.png')} style={{width :56 , height : 87 , marginHorizontal : 15 , marginVertical : 20 }}/>
            <Image source={require('../../assets/tatics/Millan/Millanstaticas.jpg')} style={{width :420 , height : 330 , marginHorizontal : -10 , marginVertical: -10 }}/>
            <Image source={require('../../assets/tatics/Millan/Millantatics.jpg')} style={{width :400 , height : 578 , marginHorizontal : -0 , marginVertical: -10 }}/>
            </View>
            </View>
            </ScrollView>
    )}