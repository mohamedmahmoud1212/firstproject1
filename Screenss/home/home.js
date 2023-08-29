import React from 'react'
import { View , Text , Image , TouchableOpacity , Alert , TextInput , StyleSheet , ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native';
import Premierleague from '../Premierleague/Premierleague';
 
const Home = () => {
    const navigation = useNavigation()
    return (
            
         <ScrollView>
         <SafeAreaView>
         <View> 
         <TouchableOpacity onPress={()=> navigation.navigate('News')}>
            <Image source={require("../../assets/News.png")} style={{width : 61 , height : 61 , marginVertical : 30 , marginHorizontal :10 }} />
              </TouchableOpacity>

           <TouchableOpacity onPress={()=> navigation.navigate('Profile')} >
             <Image source={require('../../assets/messi.png')} style={{width : 77 , height : 51 , marginVertical : -110 , marginHorizontal : 350}}/>
             </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/notfication.png')} style={{width : 44 , height : 30 , marginVertical : -84 , marginHorizontal : 280  }}/>
             </TouchableOpacity>
             </View>
             <Text style={{fontSize:30 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 100 , marginTop : -100 }}>Discover The</Text>
            <Text style={{fontSize:27 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -5 }}>leagues</Text>
             <View style={{marginTop :10}}>
             <Image source={require('../../assets/Frame1.png')} style={{width : 373 , height : 41 , padding : 5,marginLeft:10  }}/>
                <TextInput style={styles.input}/>
                <TouchableOpacity style={{width :2}}>
                <Image source={require('../../assets/searchBtn.png')} style={{width : 50, height : 40, marginHorizontal : 337, marginVertical : 0 }}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Premierleague')}>
            <Image source={require('../../assets/EnglishPremierLeague.png')} style={{width :110 , height : 110, marginLeft : 12 , marginTop : 20}}/>
            <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -110 }} >Premier</Text>
            <Text style={{fontSize:48 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -20 }}>league</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Spainleague')} >
            <Image source={require('../../assets/spnainleague.png')} style={{width :110 , height : 110 , marginLeft : 16 , marginTop : 20}}/>
            <Text style={{fontSize:55 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -110 }}>La</Text>
            <Text style={{fontSize:48 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -20 }}>league</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Italianleague')} >
            <Image source={require('../../assets/Italian-Serie-A-Logo.png')} style={{width :250, height : 125 , marginLeft : -50 , marginTop : 20}}/>
            <Text style={{fontSize:50 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -115 }}>Serie A</Text>
            <Text style={{fontSize:40 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -20 }}>league</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Germanleague')} >
            <Image source={require('../../assets/germanleague.png')} style={{width :230 , height : 150 , marginLeft : -40 , marginTop : 20}}/>
            <Text style={{fontSize:40 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -135 }}>bundesliga</Text>
            <Text style={{fontSize:40 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 140 , marginTop : -20 }}>league</Text>
            </TouchableOpacity>
            <View style={{height:200}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Egyptianleague')} >
            <Image source={require('../../assets/egyptian.png')} style={{width :160, height : 177 , marginLeft : -10 , marginTop : 40}}/>
            <Text style={{fontSize:48 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 150 , marginTop : -165 }}>Egyptian</Text>
            <Text style={{fontSize:48 , fontWeight : "bold" , color : '#877DFA' , marginLeft : 150, marginTop : -20 }}>league</Text>
            </TouchableOpacity>
            </View>
             </View>
             </SafeAreaView>
             </ScrollView>
        
           
        )
}
export default Home;
const styles =StyleSheet.create({
input:{
  borderWidth : 1,  
  width : 373 ,
  height : 40 ,
  padding : 8 ,
  gab : 8 ,
  marginVertical : -40 ,
  marginLeft:10
},
  HomeTextSmall:{
    fontSize : 48 , 
    fontWeight : "bold" ,
     color : '#877DFA' ,
     marginLeft : 140 ,
      marginTop : -20 ,
      HomeTextReg :{
        fontSize:55 , 
        fontWeight : "bold" , 
        color : '#877DFA' ,
         marginLeft : 140 ,
          marginTop : -110 ,
          HeaderStyle:{
            width :69 ,
             height : 69 , 
             marginLeft : 100 ,
              marginTop : -70 ,
          }
      }
  }
}

)