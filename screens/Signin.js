import React , {useState} from 'react';
import { Input,Button,Text } from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
import firebase from '../firebase/firebase';


const Signin = ({navigation})=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');

    const signInFirebase = async()=>{
        try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password);
            navigation.navigate('Home'); 
        }catch(err){
            setError(err.message);
        }
    }
    return <>
        <Input label = "Email" value={email} onChangeText={setEmail} />
        <Input label = "Password" value={password} onChangeText={setPassword} secureTextEntry />
        {
            error?
            <Text style={{color:'red'}}>{error}</Text>
            : null
        }
        <Button title="SignIn" onPress={()=> signInFirebase() } />
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Text>Don't have an account ? Sign Up</Text>
        </TouchableOpacity>
    </>
};

export default Signin;