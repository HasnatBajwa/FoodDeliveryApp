import {useState} from 'react';
import { auth } from './Firebase';
export default function UseLogin() {
    
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const userSignUp =()=>{
        signUp(email,password);
    }
    const userLogin =()=>{
        login(email,password,phone,name);
    }

return[setemail,setpassword, userLogin, setname,setphone,userSignUp];

}
const login =(email,password)=>{
    try {
        const userCredential = auth.signInWithEmailAndPassword(email, password)
        var user = userCredential.user;
        console.log(user)
    } catch (error) {
        console.log("AuthActionError = ", error );
        alert("User Not Registered")
    }
}
const signUp =(email, password)=>{
    const userCredential =auth.createUserWithEmailAndPassword(email,password);
    var user = userCredential.user;
    console.log(user);
}