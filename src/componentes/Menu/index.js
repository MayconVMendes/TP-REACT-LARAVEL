import { Link } from "react-router-dom";
import {useEffect} from 'react';
import './style.css';

function Menu() {

    return(
        <div className="menu">
            <Link to="/">Pagina inicial</Link>
            <Link to="/cliente">Cadastrar Cliente</Link>
        </div>
    )
}
export default Menu