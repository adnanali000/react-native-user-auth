import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default function Sandbox(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>


        </View>    
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        backgroundColor:"#ddd",

    },
    boxOne:{
        backgroundColor:'skyblue',
        padding:10,

    },
    boxTwo:{
         backgroundColor:'red',
        padding:10,

    }, boxThree:{
        backgroundColor:'blue',
        padding:10,

    }, boxFour:{
        backgroundColor:'green',
        padding:10,

    },
})