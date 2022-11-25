import Lista from "../../componentes/List";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Cliente() {
  const axios = require("axios");
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    async function consultar() {
      const resposta = await axios.get("http://localhost:8000/api/clientes");
      //console.log(resposta);
      setCliente(resposta.data.data);
    }

    consultar();
  }, []);

  return (
    <div>
      <button><Link to="/cliente/create">Criar Novo Cliente</Link></button>
      <table>
        <caption>Clientes</caption>
        <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
        </tr>
        {cliente.map((p) => (
          <tr key={p.id}>
            <td>{p.nome}</td>
            <td>{p.sobrenome}</td>
            <td>
              <Link to={"/cliente/edit/" + p.id}>Editar</Link>
            </td>
            <td>
              <Link to={"/cliente/delete/" + p.id}>Excluir</Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Cliente;
