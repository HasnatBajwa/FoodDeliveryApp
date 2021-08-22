import Navbar from "../Navbar/Navbar";
import './Dishes.css';
import Footer from '../Footer/Footer';
import Restaurants from "../../Components/Restaurants/Restaurants";

function Dishes() {
    return(
        <div>
            <Navbar/>
            <Restaurants/>
            <Restaurants/>
            <Restaurants/>

            <Footer/>
            
        </div>
    );
}
export default Dishes;