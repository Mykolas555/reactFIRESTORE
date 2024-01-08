import Register from "../register/Register"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () =>{
    return(

         <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Pradinis</a>
            <Link className="dropdown-item" to="/register">Registruotis</Link></li>
          </ul>
    )
}

export default Header