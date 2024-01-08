import Register from "../register/Register"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () =>{
    return(
    <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <div>
                    <a className="navbar-brand">Time Table App</a>
                </div>
                <div>
                    <ul>
                        <li><Link to='/register' element={<Register/>}>Registruotis</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Header