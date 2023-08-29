import React,{useState,useEffect} from "react";
import { useNavigation } from '@react-navigation/native';
import { View , Text , Image , TouchableOpacity,ScrollView } from 'react-native';
//import { firebase } from "../config";
import edit from '../assets/edit.png';
const App = (props) => {
    const navigation = useNavigation();
     
    return (
        <ScrollView >
        <View style={{height:800}}>
        <TouchableOpacity>
            <Image source={require('../assets/edit.png')} style={{width : 38 , height : 31 , marginVertical : 24 , marginHorizontal : 340}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require('../assets/back.png')} style={{width : 108 , height : 72 , marginVertical : -73 , marginHorizontal :-28 }}/>
        </TouchableOpacity>
            <Image source={require('../assets/messi.png')} style={{width : 195 , height :130 , marginTop : 10 , marginLeft :-10 }} />
            <Text style={{fontSize:28 , fontWeight : "bold" , color : '877DFA' , marginLeft : 170 , marginTop : -100 }}>Username</Text>
            <Image source={require('../assets/call.png')} style={{width :29 , height : 19 , marginLeft : 21 , marginTop : 67}}/>
            <Text style={{fontSize:15 , color : "877DFA" , marginLeft :55 , marginTop : -17 }}>0114120411</Text>
            <Image source={require('../assets/maill.png')} style={{width :42 , height : 28 , marginLeft : 16 , marginTop : 7}}/>
            <Text style={{fontSize:15 , color : "877DFA" , marginLeft :57 , marginTop : -25 }}>userEmail@gimal.com</Text>
            <Image source={require('../assets/e.png')} style={{width :1042 , height : 516 , marginLeft : -100 , marginTop : -100}}/>
            <Image source={require('../assets/follower.png')} style={{width :55 , height : 40 , marginLeft : 30 , marginTop : -365}}/>
            <Text style={{fontSize:15 , color : "877DFA" , marginLeft :26 , marginTop : 0 }}>Followers</Text>
            <Text style={{fontSize:30 , color : "877DFA" , marginLeft :129 , marginTop : -60 }}>0</Text>
            <Text style={{fontSize:30 , color : "877DFA" , marginLeft :280 , marginTop : -40 }}>Hi</Text>
            <TouchableOpacity>
            <Image source={require('../assets/Heart.png')} style={{width :45 , height : 30 , marginLeft : 19 , marginTop : 50}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '877DFA' , marginLeft : 80 , marginTop : -32 }}>Your Favorite teams</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/Payment.png')} style={{width :90, height : 40 , marginBottom: 0 , marginTop : 15}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '877DFA' , marginLeft : 80 , marginTop : -32}}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/Frindes.png')} style={{width :45 , height : 30 , marginLeft : 24 , marginTop : 30}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '877DFA' , marginLeft : 80 , marginTop : -25 }}>Tell Tour Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/tech.png')} style={{width :60 , height : 40 , marginLeft : 15 , marginTop : 20}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '877DFA' , marginLeft : 80 , marginTop : -30 }}>Technical support</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/settings.png')} style={{width :50 , height : 35 , marginLeft : 25 , marginTop : 30}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : '877DFA' , marginLeft : 80 , marginTop : -25 }}>Settings</Text>
        </TouchableOpacity>
            <View style={{height : 1 , width : '100' , backgroundColor : '#ddd' , marginTop : 35}}  />
            <TouchableOpacity onPress={()=> navigation.navigate('Welcome')}>
            <Image source={require('../assets/Logout1.png')} style={{width :45 , height : 30, marginLeft : 16 , marginTop : 20}}/>
            <Text style={{fontSize:20 , fontWeight : "bold" , color : 'FF2A4C' , marginLeft : 80 , marginTop : -30}}>Logout</Text>
        </TouchableOpacity>           
        </View>
        </ScrollView>

    )


} 
export default App;