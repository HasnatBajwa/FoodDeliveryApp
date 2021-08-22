import 'materialize-css/dist/css/materialize.min.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import getUser from '../../Components/Firebase/getUser';

import './Login.css';
function Login() {
    const[setemail,setpassword,userLogin]=getUser();
    
    return(
        <div>
           <Navbar/>
           <div id="Text">
           <h2>Welcome To Food Court</h2>
           <p>Please Login to Continue</p>
           </div>
           <div className="container" id="Login">
               <input type="text" placeholder="Type Your Email" onChange={(e)=>{setemail(e.target.value)}} />
               <input type="password" placeholder="Enter Password" onChange={(e)=>{setpassword(e.target.value)}} />
               <button onClick={userLogin}><VpnKeyIcon/> Login</button>
           </div>
           <Footer/>
    </div>
    )
}
export default Login;
