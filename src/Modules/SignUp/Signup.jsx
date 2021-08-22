import Navbar from "../Navbar/Navbar";
import './Signup.css';
import Footer from '../Footer/Footer';
import getUser from '../../Components/Firebase/getUser';

function Signup() {
    const[setemail,setpassword, setname,setphone,userSignUp]=getUser();
    return(
        <div>
            <Navbar/>
            <div id="signuppage">
           <h2>Welcome To The SignUp page</h2>
           <p>SignUp to Enjoy the Worlds Best Food Delivery App</p>
           </div>
            <div id="SignUp">
            <input type="text" placeholder="Enter Your Name" onChange={(e)=>{setname(e.target.value)}}/>
            <input type="text" placeholder="Enter Your Email" onChange={(e)=>{setemail(e.target.value)}} />
            <input type="text" placeholder="Enter Your Phone Number" onChange={(e)=>{setphone(e.target.value)}} />
            <input type="password" placeholder="Enter Your Password" onChange={(e)=>{setpassword(e.target.value)}} />
            <button onClick={userSignUp}>Signup!</button>
            </div>
            <Footer/>
        </div>
    );
}
export default Signup;