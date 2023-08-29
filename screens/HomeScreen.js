import { View, Text, SafeAreaView ,Platform,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import{ createNativeStackNavigator } from '@react-navigation/native-stack';
import  profilepage  from './profilepage.js' 
import Newspage from './Newspage.js';
//import firebase from 'react-native-firebase'
//import { firebaseConfig } from '../config'
const HomeScreen = () => {
  const navigation = useNavigation();
  //state = { currentUser: null }
    //const { currentUser } = this.state
    //state = { currentUser: null }

    //const componentDidMount =() => {
      //  const { currentUser } = firebase.auth()
       // this.setState({ currentUser })
    //}
     
 
    
    
     
 
    return (
      
          <View>
            <Text>123456</Text>
          </View> 
        )
}
 
 
 
   
export default HomeScreen ;
//<View style={styles.container}><Text>
//Hi {currentUser && currentUser.email}!
//</Text></View>