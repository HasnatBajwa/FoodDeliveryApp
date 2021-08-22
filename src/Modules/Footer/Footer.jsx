import 'materialize-css/dist/css/materialize.min.css';
import './Footer.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
function Footer() {
    return(
        <div className="container-fluid" id="Footer">
            <div className="row">
                <div className="col s12 m12 l12">
                   <p>Built by Hasnat With <FavoriteIcon/> Using React &copy; CopyRight Registered || 2021</p>
                   
                </div>
            </div>
        </div>
    );
}
export default Footer;