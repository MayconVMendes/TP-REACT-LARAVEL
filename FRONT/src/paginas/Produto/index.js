import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./style.css"

function Produto() {

    const axios = require('axios');
    const [produto, setProduto] = useState([])

    useEffect(() => {
        async function consultar() {
            const resposta = await axios.get("http://localhost:8000/api/produtos");
            
            setProduto(resposta.data.data)
        }

        consultar();

    }, [axios])

    function converter(props) {
        let dt_eua = props
        let dt_br = dt_eua.split('-').reverse().join('/');

        return dt_br;
    }

    return (
        <div className='container'>
            <table border={1}>
                <caption>Produtos</caption>
                <tr>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Preço</th>
                    <th>Data de Validade</th>
                    <th>Unidade</th>
                </tr>
                {produto.map((p) => <tr className='line_table' key={p.id}>
                    <td>{p.nome}</td>
                    <td>{p.marca}</td>
                    <td><div className='td_price'><span>R$</span>{p.preco}</div></td>
                    <td>{converter(p.dataValidade)}</td>
                    <td>{p.unidade}</td>
                    <td className='td-btn'><button className='btn_edit' ><Link to={'/produto/edit/' + p.id}>Editar</Link></button></td>
                    <td className='td-btn'><button className='btn_del'><Link to={'/produto/delete/' + p.id}>Excluir</Link></button></td>
                </tr>)}
            </table>
        </div>
    )
}
export default Produto