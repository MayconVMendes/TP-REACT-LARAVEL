import axios from 'axios';
import {useState} from 'react';
import "./style.css";

function Create()
{
    const [produto,setProduto] = useState({});
    const [status,setStatus] = useState('');
    const [btn, setBtn] = useState(false);

    async function gravar(e){
        e.preventDefault();
        try{
            await axios.post('http://localhost:8000/api/produtos',produto);
            setStatus("Produto Cadastrado");
            setBtn(true)

            setTimeout(function() {
                window.location.href = "/produto";
            }, 5000);

        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }

    return(
        <div>
            <h3>{status}</h3>
            <form onSubmit={ gravar }>
                <div className="_forms-create">
                    <h2>Preencha os campos</h2>
                    <div className="inputs">
                        <span>Nome: </span>
                        <input value={produto.nome} required onChange={ (e)=>{setProduto({...produto,'nome':e.target.value})} } />
                    </div>
                    <div className="inputs">
                        <span>Marca: </span>
                        <input value={produto.marca} required onChange={ (e)=>{setProduto({...produto,'marca':e.target.value})} } />
                    </div>
                    <div className="inputs">
                        <span>Preço: </span>
                        <input type={'number'} value={produto.preco} required onChange={ (e)=>{setProduto({...produto,'preco':e.target.value})} } />
                    </div>
                    <div className="inputs">
                        <span>Data validade: </span>
                        <input type={'date'} value={produto.dataValidade} required onChange={ (e)=>{setProduto({...produto,'dataValidade':e.target.value})} } />
                    </div>
                    <div className="inputs">
                        <span>Unidade: </span>
                        <input type={'number'} value={produto.unidade} required onChange={ (e)=>{setProduto({...produto,'unidade':e.target.value})} } />
                    </div>
                    
                    {btn !== true ? <button type='submit'>Enviar</button> : ''}
                </div>
            </form>
        </div>
    )
}
export {Create}