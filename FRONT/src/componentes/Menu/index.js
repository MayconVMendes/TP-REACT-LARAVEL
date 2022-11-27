import { Link } from "react-router-dom";
import './style.css';

function Menu() {

    return(
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/produto">Visualizar Produtos</Link>
            <Link to="/produto/create">Criar Novo Produto</Link>
        </div>
    )
}
export default Menu