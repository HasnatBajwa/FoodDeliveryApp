import 'materialize-css/dist/css/materialize.min.css';
import RestData from '../../Data/RestData/RestData';
import './Restaurants.css';
function Restaurants() {
	return (
		<div className="container-fluid" id="Restaurant">
			<div className="row">
				<div className="col s12 m6 l3">
					<img src={RestData.Rest1.Image} alt="" />
                    <h6>{RestData.Rest1.description}</h6>
                    <p>{RestData.Rest1.Price}</p>
                    <button>Order Now!</button>
				</div>
				<div className="col s12 m6 l3">
                <img src={RestData.Rest2.Image} alt="" />
                    <h6>{RestData.Rest2.description}</h6>
                    <p>{RestData.Rest2.Price}</p>
                    <button>Order Now!</button>

				</div>
				<div className="col s12 m6 l3">
                <img src={RestData.Rest3.Image} alt="" />
                    <h6>{RestData.Rest3.description}</h6>
                    <p>{RestData.Rest3.Price}</p>
                    <button>Order Now!</button>

				</div>
				<div className="col s12 m6 l3">
                <img src={RestData.Rest4.Image} alt="" />
                    <h6>{RestData.Rest4.description}</h6>
                    <p>{RestData.Rest4.Price}</p>
                    <button>Order Now!</button>

				</div>
			</div>
		</div>
	);
}
export default Restaurants;
