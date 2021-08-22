import 'materialize-css/dist/css/materialize.min.css';
import Logo from '../../Assets/Logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
	return (
		<div className="container-fluid" id="Navbar">
			<div className="row">
				<div className="col s12 m6 l1">
					<img src={Logo} alt="" />
				</div>
				<div className="col s12 m6 l8">
					<button> <Link to="/">Home</Link></button>
					<button><Link to="/Deals">Deals!</Link> </button>
					<button><Link to="/Dishes">Dishes</Link> </button>
					<button><Link to="/Restaurants">Restaurants</Link> </button>
					<button> <Link to="/About">AboutUs</Link> </button>
					<button><Link to="/ContactUs">ContactUs</Link> </button>
				</div>
				<div className="col s12 m6 l3">
					<button> <Link to="/Login">Login</Link> </button>
					<button> <Link to="/Signup">SignUp</Link> </button>
				</div>
			</div>
		</div>
	);
}
export default Navbar;
