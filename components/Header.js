import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';

export default function Header(){
        return(
            <View style={styles.header}>
                <Text style={styles.title}>Taj</Text>
            </View>    
        )
}

const styles = StyleSheet.create({
    header:{
        height:60,
        paddingTop:20,
        backgroundColor:'#333',

    },
    title:{
        textAlign:'center',
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',

    }
})