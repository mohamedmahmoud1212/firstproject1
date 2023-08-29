import React from 'react'
import { View, Text, TouchableOpacity, TextInput , Image , StyleSheet ,Button} from 'react-native'
import {themeColors} from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { ScrollView } from 'react-native'
import WelcomeScreen from './WelcomeScreen'
//import firebase from 'react-native-firebase'
//import { firebaseConfig } from '../config'
 
const SignUpScreen= () => {
    const navigation = useNavigation();
   // state = { email: '', password: '', errorMessage: null }
 // handleSignUp = () => {
    // TODO: For Firebase athu
   // state = { email: '', password: '', errorMessage: null }
  //handleSignUp = () => {
   // firebase
     // .auth()
     // .createUserWithEmailAndPassword(this.state.email, this.state.password)
     // .then(() => this.props.navigation.navigate('Home'))
    //  .catch(error => this.setState({ errorMessage: error.message }))
 // }
 // }
  return (
   
    <SafeAreaView style={{ backgroundColor:'#7467ce'}}> 
       
       
    <View classname="Flex-1 bg-white px-8 pt-8" style={{backgroundColor:'#7467ce',height:1000,alignItems:'center'}}>
    <View style={{alignItems:'center'}}>
         <Image source={require("../assets/images/analysis.png")}
         style={{width :190  , height :195 , }}
         resizeMode='contain' 
         />

     
     
    <View classname="flex-1 bg-white px-8 pt-8"
         style={{borderTopLeftRadius:50 , borderTopRightRadius :50,width:430,height:645,backgroundColor:'#FAF9F6',alignItems:'center',marginTop:35}}>
 
    <View style={{marginBottom:10}}>
        <Text classname="text-gray-700 ml-4" style={styles.mode}>  full name</Text>
        <TextInput classname='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3' style={styles.bord}
         placeholder='enter name'
         />

        <Text classname="text-gray-700 ml-4" style={styles.mode}>  email address</Text>
        <TextInput classname='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3'
        style={styles.bord}
        placeholder='enter email'
        // onChangeText ={email => this.setState({ email })}
        //value={this.state.email}
        />
 
  
       <Text classname="text-gray-700 ml-4" style={styles.mode} >  password</Text>
       <TextInput classname='P-4 Bg-gray-100 Text-gray-700 Rounded-2xl Mb-7'
       style={styles.bord} 
       secureTextEntry
 
      placeholder='enter password'
      //onChangeText ={password => this.setState({ password })}
      //value={this.state.password}
      />
 
   
      <TouchableOpacity classname="py-3 bg-yellow-400 rounded-xl">
      <Button title='SignUp'  style={{rounded:'xl'}}  color={'#facc15'} 
            onPress={()=> navigation.navigate('Home')}/> 
        </TouchableOpacity>

   
    </View>
    <View style={{alignItems:'center'}}>
      <Text classname="text-xl text-gray-700 font-bold text-center py-5" style={{fontSize:20,fontWeight:'400'}} >
        Or
       </Text>
    </View>
    <View classname="flex-row justify-center spacey-x-12" style={{alignItems:'center'}}>
      <TouchableOpacity classname="p-2 bg-gray-100 rounded-2xl">
      
       <Image source={require('../assets/icon/google.png')}
        classname="w-10 h-10" style={{alignItems:'center', width:45,
         height:45,}} />
       
       </TouchableOpacity>
     
    
  
    <View classname="flex-row justify-center mt-7">
            <Text classname="text-gray-500 font-semibold" style={{ fontWeight:'400',fontSize:15}}>Already have an account ?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={{alignItems:'flex-end'}}>
                <Text classname="font-semibold text-yellow-400" style={{color:'#7467ce',fontWeight:'bold',fontSize:20,}}>      login</Text>
            </TouchableOpacity>
    </View>
    </View>
    </View>
    </View>
    </View>
   </SafeAreaView>
   
  );
}



export default SignUpScreen ;
 const styles = StyleSheet.create({
bord : {

    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:8,
    width:200,
    alignItems:'flex-start',
    

 
 

},
color:{
color:'#7467ce'


},
level:{
  width:35,
  height:35,
  alignItems:'flex-start'
  
},
level1:{
  width:35,
  height:35,
alignItems:'center'


 },

 level2:{
  width:35,
  height:35,
alignItems:'flex-end'

 },
mode:{
  marginTop:5,
  fontWeight:'400',
}



 


 })
 