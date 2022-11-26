import BemVindo from "../../componentes/BemVindo";
import {Link} from 'react-router-dom';
import {useState} from 'react';
function HomePage() {

    {/*const [contador,setContador]=useState(0)*/}

    return(
        <div>
            <BemVindo nome="João" endereco="Rua X"/>
            {/* <Link to="/produto">Produto</Link>
            <p>{contador}</p>
            <button onClick={ ()=>{ setContador(contador+1) }  }>Soma1</button> */}
        </div>
    )
}
export default HomePage