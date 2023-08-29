import React from 'react'
import { View, Text,  TouchableOpacity, TextInput , Image, StyleSheet,Button,Alert} from 'react-native'
import {themeColors} from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useState } from 'react';
//import firebase from 'react-native-firebase'
//import { firebaseConfig } from '../config'
  

const LoginScreen=() => {
  const navigation = useNavigation()
   
 
 // state = { email: '', password: '', errorMessage: null }
  //handleLogin = () => {
    // TODO: Firebase stuff...
   // firebase
    //.auth()
    //.signInWithEmailAndPassword(email, password)
    //.then(() => this.props.navigation.navigate('Home'))
    //.catch(error => this.setState({ errorMessage: error.message }))
 // }
  return (

    <SafeAreaView classname=" Flex-row Justify-start  Bg-white" style={{ alignItems: 'center', backgroundColor: '#7467ce', }}>

      <View classname="Flex-1 bg-white px-8 pt-8" style={{ backgroundColor: '#7467ce', height: 1000, alignItems: 'center' }}>

        <View classname="flex-row Justify-center">
          <Image source={require('../assets/images/Assetd.png')}
            style={{ width: 120, height: 200, alignItems: 'center' }}
            resizemode='contain' />
        </View>

        <View classname="Flex-1 bg-white px-8 pt-8"
          style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, width: 430, height: 600, backgroundColor: '#FAF9F6', alignItems: 'center', marginTop: 25 }}>

        <View classname="Form sapcey-y-2">
            <Text classname=" Text-gray-700 ml-4">  email address</Text>
            <TextInput classname="p-4 bg-gray-100 Text-gray-700 rounded-2xl mb-3"
              style={styles.box}
              placeholder='Email'
              //onChangeText={email => this.setState({ email })}
              //value={this.state.email}
            
                 />
              
             
            <Text classname="Text-gray-700 ml-4">  password</Text>
            <TextInput classname="p-4 bg-gray-100 Text-gray-700 rounded-2xl"
            
              style={styles.box}
              placeholder="Password"
              //onChangeText={password => this.setState({ password })}
              //value={this.state.password}
              
             />
            
            <Text classname="Text gray-700"> forgot password?</Text>
            
              <Button title='Log In' style={{ rounded: 'xl', }} color={'#facc15'}
               onPress ={()=> navigation.navigate('Home')} />
           




        </View>

          <Text classname="text-xl text-gray-700 font-bold text-center py-5" style={{ textAlign: 'center', fontSize: 20, fontWeight: '400', margin: 15 }}>
            Or
          </Text>
          <View classname="flex-row justify-center spacey-x-12">
            <TouchableOpacity classname="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icon/google.png')}
                classname="w-10 h-10" style={{ marginTop: 15, width: 45, height: 45 }} />
            </TouchableOpacity>

          </View>


          <SafeAreaView classname="flex-row justify-center mt-7">
            <Text classname="text-gray-500 font-semibold"> Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ alignItems: 'flex-end' }}>
              <Text classname="font-semibold text-yellow-400" style={{ color: '#7467ce', fontWeight: 'bold', alignItems: 'flex-end', fontSize: 20 }}>    SignUp</Text>
            </TouchableOpacity>
          </SafeAreaView>

        </View>
      </View>
    </SafeAreaView>


  )
}
 

export default LoginScreen ;

 const styles = StyleSheet.create({
  box : {
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
    alignItems:'center'

  }
  })