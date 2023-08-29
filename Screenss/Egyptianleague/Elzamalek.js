import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function Elzamalek  (){
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
        <Image source={require('../../assets/tatics/Alzmalk/Alzmalk.png')} style={{width :57 , height : 75 , marginLeft : 100 , marginTop : -70}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 170 , marginTop : -50 }}>Elzamalek </Text>
            <View style= {{marginTop:50}}>
            <Image source={require('../../assets/tatics/Alzmalk/Alzmalk.png')} style={{width :75 , height : 101 , marginHorizontal : 300 , marginVertical : -20  }}/>
            <Text style={{fontSize:55 , fontWeight : "bold" ,  marginVertical : -60 , marginHorizontal : 106 }}> 1  -   1</Text>
            <View style={{marginTop :'auto'}}>
            <Image source={require('../../assets/tatics/Alzmalk/Al_Nassr_.png')} style={{width :93 , height : 116 , marginHorizontal : 15 , marginVertical : -40 }}/>
            <Image source={require('../../assets/tatics/Alzmalk/Alzmalkstaticas.jpg')} style={{width :420 , height : 330 , marginHorizontal : -10 , marginVertical: 60 }}/>
            <Image source={require('../../assets/tatics/Alzmalk/Alzmalktatics.jpg')} style={{width :400 , height : 578 , marginHorizontal : -0 , marginVertical: -10 }}/>
            </View>
            </View>
            </ScrollView>
    )}