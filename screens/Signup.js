import React , {useState} from 'react';
import { Input,Button,Text } from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
import firebase from '../firebase/firebase';

const Signup = ({navigation})=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');

    const signUpFirebase = async()=>{
        try{
            const response = await firebase.auth().createUserWithEmailAndPassword(email,password);
            navigation.navigate('Signin'); 
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
        <Button title="SignUp" onPress={()=> signUpFirebase() } />
        <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
            <Text>Already have an account ? Sign in</Text>
        </TouchableOpacity>
    </>
};

export default Signup;