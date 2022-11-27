import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Create()
{
    const [produto,setProduto] = useState({});
    const [status,setStatus] = useState('');

    async function gravar(e){
        e.preventDefault();
        try{
            await axios.post('http://localhost:8000/api/produtos',produto);
            setStatus("Produto Cadastrado");
        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }

    return(
        <div>
            <form onSubmit={ gravar }>
                Nome: <input value={produto.nome} required onChange={ (e)=>{setProduto({...produto,'nome':e.target.value})} } />
                Marca: <input value={produto.marca} required onChange={ (e)=>{setProduto({...produto,'marca':e.target.value})} } />
                Preço: <input type={'number'} value={produto.preco} required onChange={ (e)=>{setProduto({...produto,'preco':e.target.value})} } />
                Data validade: <input type={'date'} value={produto.dataValidade} required onChange={ (e)=>{setProduto({...produto,'dataValidade':e.target.value})} } />
                Unidade: <input type={'number'} value={produto.unidade} required onChange={ (e)=>{setProduto({...produto,'unidade':e.target.value})} } />
                <button type='submit'>Enviar</button>
            </form>
            <h3>{status}</h3>
            <Link to='/produto'>Voltar</Link>
        </div>
    )
}
export {Create}