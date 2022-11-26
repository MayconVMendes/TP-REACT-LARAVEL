import axios from 'axios';
import {useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'

function Edit()
{
    const { id } = useParams();
    const [produto,setProduto] = useState({});
    const [status,setStatus] = useState('');
    useEffect(()=>{
        async function consultar() {
            const response = await axios.get(`http://localhost:8000/api/produtos/${id}`);
            setProduto(response.data.data);
        }
        consultar();
    },[]);
    async function gravar(e){
        e.preventDefault(); // cancela o submit
        try{
            const response = await axios.put(`http://localhost:8000/api/produtos/${id}`,produto);
            setStatus("Produto Atualizado");
        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
    return(
        <div>
            <form onSubmit={ gravar }>
                Nome: <input value={produto.nome} onChange={ (e)=>{setProduto({...produto,'nome':e.target.value})} } />
                Marca: <input value={produto.marca} onChange={ (e)=>{setProduto({...produto,'marca':e.target.value})} } />
                Preço: <input value={produto.preco} onChange={ (e)=>{setProduto({...produto,'preco':e.target.value})} } />
                Data validade: <input value={produto.dataValidade} onChange={ (e)=>{setProduto({...produto,'dataValidade':e.target.value})} } />
                Unidade: <input value={produto.unidade} onChange={ (e)=>{setProduto({...produto,'unidade':e.target.value})} } />
                <button type='submit'>Enviar</button>
                <Link to='/produto'>Voltar</Link>
            </form>
            <h3>{status}</h3>
        </div>
    )
}
export {Edit}