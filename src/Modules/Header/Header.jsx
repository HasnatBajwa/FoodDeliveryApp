import 'materialize-css/dist/css/materialize.min.css';
import './Header.css';
function Header() {
    return(
        <div>
        <div className="container-fluid" id="Header">
            <div className="row">
            <h2>Welcome To Food Court</h2>
            <input type="text" placeholder="Search Your Favorite Food Here" />
            <button>Search</button>
            </div>
        </div>
    </div>
    )
    
}
export default Header;