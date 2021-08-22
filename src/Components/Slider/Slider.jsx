import { useState } from "react";
import "./Slider.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import S1 from '../../Assets/S1.jpg';
import S2 from '../../Assets/S2.jpg';
import S3 from '../../Assets/S3.jpg';
import S4 from '../../Assets/S4.jpg';
const imgCollection=[S1,S2,S3,S4];
function Slider() {
    const [slide, setSlider] = useState(0);
    if (slide < 0) {
      setSlider(3);
    } else if (slide > 3) {
      setSlider(0);
    }
    return (
      <div id="carosel">
        <img src={imgCollection[slide]} alt="" />
        <button onClick={() => setSlider(slide - 1)} className="left">
          <ArrowBackIosIcon />
        </button>
        <button onClick={() => setSlider(slide + 1)} className="right">
          <ArrowForwardIosIcon />
        </button>
      </div>
    );
  }
  export default Slider;
  