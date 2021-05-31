import React,{useState} from 'react';
import {Alert,Text,View,StyleSheet,FlatList,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from '../components/Header';
import Complains from '../components/Complains';
import AddComplain from '../components/AddComplain'

const Home =()=>{
    const [complains,setComplains] = useState([
        {text:'hardware complain',key:'1'},
        {text:'software complain',key:'2'},
        {text:'staff complain',key:'3'},

    ])

    const pressHandler = (key)=>{
        setComplains((prevComplain)=>{
            return prevComplain.filter(result => result.key != key);
        })  
    }

    const submitHandler = (text)=>{
        if(text.length > 3){
            setComplains((prevComplain)=>{
                return [
                    { text: text, key: Math.random().toString()},
                    ...prevComplain
                ];
            })
        }else{
            Alert.alert("Oops!","Complain must be greater than 3 char long",[
                {text:'understood',onPress:()=>console.log('alert closed')}
            ])
        }
        
    }
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
         <View style={styles.container}>
             <Header />
             <View style={styles.content}>
                 <AddComplain submitHandler={submitHandler} />
                <View style={styles.list}>
                    <FlatList
                        data={complains}
                        renderItem={({item})=>(
                            <Complains item={item} pressHandler={pressHandler} />
                        )} />
                </View>
             </View>
         </View>
         </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
     },
     content:{
        padding:40,
     },
     list:{
         marginTop:20,
     }

})

export default Home;