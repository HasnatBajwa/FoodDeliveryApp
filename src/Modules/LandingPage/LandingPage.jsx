import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Restaurants from '../../Components/Restaurants/Restaurants';
import Slider from "../../Components/Slider/Slider";
import Footer from "../Footer/Footer";
function LandingPage(params) {
  return(
      <div>
          <Navbar/>
          <Header/>
          <Slider/>
          <Restaurants/>
          <Footer/>
      </div>
  );  
}
export default LandingPage;