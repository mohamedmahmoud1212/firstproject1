import React from 'react'
import { View, Text ,Image, StyleSheet, SafeAreaView, TouchableOpacity, Button} from 'react-native'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
 
export default function WelcomeScreen () {
    const navigation = useNavigation();
  return (
    
    <SafeAreaView   style = {{ backgroundColor:'#7467ce',}}  >
    <View classname="Flex-1 bg-white px-8 pt-8" style={{backgroundColor:'#7467ce',height:1000,alignItems:'center',}}>
        <View  classname="Flex=1 Flex Justify-around My-4" style={{margin:10 ,alignItems:'center' ,justify:'around'}}>
            <Text 
                style={{ fontSize:35,fontWeight:'bold', textAlign: 'center',color:'#F5F4FB',resizeMode:'contain'}}> let's Get Started
            </Text>
            <View classname="Flex-row Justify-center"   style={{ backgroundColor:'#7467ce' ,alignItems:'center'}}  >
           <Image source={require ("../assets/images/Asset.png")}
           style={{ width : 500, height:400,margin : 50}}
           resizeMode='contain'
          />
 
   

    
         <View style={{width:200}}>
        <TouchableOpacity  
        classname="Py-3bg-yellow-400 Mx-7 Rounded-xl"
        onPress={()=> navigation.navigate('SignUp')}>
        <Button title='SignUp'  style={{rounded:'2xl', }}  color={'#facc15'}
            onPress={()=> navigation.navigate('SignUp')}
        />
            
        </TouchableOpacity>
        <View classname="Flex-row Justify-center" >
            <Text classname="Text-White Font-semibold" style={{alignItems:'center' ,color:'#F5F4FB',fontSize:15}}> Already have an account ? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                
                <Text style={{fontSize:20 ,textAlign:'right', color:'#facc15',fontWeight:'bold'}} > log in </Text>
                
            </TouchableOpacity>
            </View>
                </View>
            </View>
        </View> 
        </View>
       
    </SafeAreaView>
  );
}
const styles= StyleSheet.create({
container :{
    justifyContent : 'center',
    alignItems :'center',
    felx :1 ,
    margin:10,
    backgroundcolor:'877dfa'
}

}) ;