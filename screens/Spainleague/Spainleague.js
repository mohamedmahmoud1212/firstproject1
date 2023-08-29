import React,{useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function Spainleague (){
    const navigation =useNavigation();
    return (
        <View>
             <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
             <Image source={require('../../assets/messi.png')} style={{width : 77 , height : 51 , marginVertical : 20 , marginHorizontal : 315  }}/>
             </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/notfication.png')} style={{width : 44 , height : 30 , marginVertical : -55 , marginHorizontal : 280  }}/>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require('../../assets/back.png')} style={{width : 108 , height : 72 , marginVertical : -73 , marginHorizontal :-28 }}/>
        </TouchableOpacity>
             <Image source={require('../../assets/spnainleague.png')} style={{width :76 , height : 76 , marginLeft : 100 , marginTop : -70}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : -60 }}>La</Text>
            <Text style={{fontSize:18 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 180 , marginTop : 0 }}>league</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Barcelona')}>
             <Image source={require('../../assets/Barcelona.png')} style={{width :106 , height : 108 , marginLeft :20 , marginTop : 40}}/>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 130 , marginTop : -100 }}>Barcelona</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=> navigation.navigate('RealMadrid')}>
             <Image source={require('../../assets/Real_Madrid.png')} style={{width :96 , height : 130 , marginLeft :20 , marginTop : 40}}/>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 130 , marginTop : -120 }}>Real</Text>
            <Text style={{fontSize:48 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 130 , marginTop : -20 }}>Madrid</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=> navigation.navigate('Atleticomadrid')}>
             <Image source={require('../../assets/Atletico_Madrid.png')} style={{width :87 , height : 116 , marginLeft :25 , marginTop : 40}}/>
             <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 130 , marginTop : -120 }}>Atletico</Text>
            <Text style={{fontSize:48 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 130 , marginTop : -20 }}>Madrid</Text>
             </TouchableOpacity>
        </View>

    )

}