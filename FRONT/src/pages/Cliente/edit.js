import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [cliente, setCliente] = useState({});
  const [status, setStatus] = useState("");
  useEffect(() => {
    async function consultar() {
      const response = await axios.get(
        `http://localhost:8000/api/clientes/${id}`
      );
      setCliente(response.data.data);
    }
    consultar();
  }, []);
  async function gravar(e) {
    e.preventDefault(); // cancela o submit
    try {
      const response = await axios.put(
        `http://localhost:8000/api/clientes/${id}`,
        cliente
      );
      setStatus("Cliente Atualizado");
    } catch (erro) {
      setStatus(`Falha: ${erro}`);
    }
  }
  return (
    <div>
      <button><Link to="/cliente">Voltar</Link></button>
      <form onSubmit={gravar}>
        Descrição:{" "}
        <input
          value={cliente.descricao}
          onChange={(e) => {
            setCliente({ ...cliente, descricao: e.target.value });
          }}
        />
        Preço:{" "}
        <input
          value={cliente.preco}
          onChange={(e) => {
            setCliente({ ...cliente, preco: e.target.value });
          }}
        />
        <button type="submit">Enviar</button>    
      </form>
      <h3>{status}</h3>
    </div>
  );
}
export { Edit };
