import axios from 'axios';
import {useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'

function Delete()
{
    const { id } = useParams();
    const [produto,setProduto] = useState({});
    const [status,setStatus] = useState('');
    const [botaoStatus,setBotaoStatus] = useState(true);
    useEffect(()=>{
        async function consultar() {
            const response = await axios.get(`http://localhost:8000/api/produtos/${id}`);
            setProduto(response.data.data);
            setBotaoStatus(false);
        }
        consultar();
    },[]);
    async function confirmar(e){
        try{
            const response = await axios.delete(`http://localhost:8000/api/produtos/${id}`);
            setStatus("Produto Excluído");
            setProduto({});
        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
    return(
        <div>
            <h3>{produto.descricao}</h3>
            { status!='Produto Excluído' ? <button onClick={confirmar} disabled={botaoStatus}>Confirmar Exclusão</button> : '' }
            <Link to='/produto'>Voltar</Link>
            <h3>{status}</h3>
        </div>
    )
}
export {Delete}