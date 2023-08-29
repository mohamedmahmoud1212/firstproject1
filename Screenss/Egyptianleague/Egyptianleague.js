import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView} from 'react-native';
export default  function Egyptianleague (){
    const navigation =useNavigation()
    return (
        <View>
             <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
             <Image source={require('../../assets/messi.png')} style={{width : 77 , height : 51 , marginVertical : 10 , marginHorizontal : 315  }}/>
             </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/notfication.png')} style={{width : 44 , height : 30 , marginVertical : -45 , marginHorizontal : 280  }}/>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require('../../assets/back.png')} style={{width : 108 , height : 72 , marginVertical : -73 , marginHorizontal :-28 }}/>
        </TouchableOpacity>
        <Image source={require('../../assets/egyptian.png')} style={{width :104 , height : 104 , marginLeft : 100 , marginTop : -70 , marginLeft : 50}}/>
             <Text style={{fontSize:20 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 170 , marginTop : -85 }}>Egyptian</Text>
             <Text style={{fontSize:18 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 170 , marginTop : 0 }}>league</Text>
             <TouchableOpacity onPress={()=> navigation.navigate('Alahly')}>
             <Image source={require('../../assets/Alahaly.png')} style={{width :95 , height : 146 , marginLeft : 25 , marginTop :50}}/>
             <Text style={{fontSize:45 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -115 }}>Alahly</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('Elzamalek')}>
             <Image source={require('../../assets/Alzmalk.png')} style={{width :92.58 , height : 121 , marginLeft : 25 , marginTop :70}}/>
             <Text style={{fontSize:45 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -115 }}>Elzamalek</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Pyramids')}>
             <Image source={require('../../assets/Pyramids.png')} style={{width :113 , height : 108 , marginLeft : 20 , marginTop :70}}/>
             <Text style={{fontSize:45 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -90 }}>Pyramids</Text>
            </TouchableOpacity>
            
        </View>
    )}