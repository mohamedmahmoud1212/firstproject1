import React from 'react';
import { View , Text , ScrollView, TouchableOpacity,Image } from 'react-native';
import {Button, Card} from 'react-native-paper';
import { useState , useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

const Newspage = () => {
  const navigation=useNavigation  ()
  const [data,setData] = useState ([])
    console.log(data)
    const url="https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=5a7a58387a4d4dcdbc83f98678e5daf0";
    //"https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=5a7a58387a4d4dcdbc83f98678e5daf0";

    const getArticles= () => {
      fetch(url)
      .then((res) => res.json())
      .then((json) =>setData(json))
      .catch((err) => console.log(err))  
    };
    useEffect(() => {
    getArticles();
    },[]);
    return (
      <>
     
        {Object.keys(data).length > 0 && (
          
    <ScrollView>
    <View style={{width:70,height:50}}>
       <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require('../assets/back.png')} style={{width : 108 , height : 72 ,marginTop:8 }}/>
        </TouchableOpacity>
        </View>
    <View style={{
               
              justifyContent: "space-around",
              alignItems: "center",
              width:400,
              backgroundColor:'#7467ce',
              margin:20,
              marginTop:20,
              padding:1,
              borderColor:'#7467ce'
            
                
            }} >
       
        {data.articles.map((article, index) => (
          <Card key={index} style={{margin:0.5,Color:'#7467ce', }}>
            <View style={{
                    width:390,
                    height:30,
                    justifyContent:"space-around",
                    alignItems:"center",
                    margin:20,
                   
                  
                  }}
>
               <View>
              <Text style={{ fontSize: 15, fontWeight: "bold",margin:-5, }}>
               {article.title} 
               </Text>
               </View>
              <View style={{height:50,padding:10,margin:-5, }}>

              </View>
             
            </View> 
           
            <Text style={{marginTop:-1}}> {article.description} </Text>
              <Text style={{margin:15}}> {article.publishedAt } </Text>
               
          </Card>
          
          
        ))
      }
    </View> 
    </ScrollView>
  )
}
</>
);
}
export default Newspage;
//style={{fontSize:18,fontWeight:"bold",flex:1}}
//style={{fontSize:16}}
// style ={{flexDirection :"row",justifyContent:"center",alignItems:"center",marginVertical:15}}>