import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Delete() {
  const { id } = useParams();
  const [cliente, setCliente] = useState({});
  const [status, setStatus] = useState("");
  const [botaoStatus, setBotaoStatus] = useState(true);
  useEffect(() => {
    async function consultar() {
      const response = await axios.get(
        `http://localhost:8000/api/clientess/${id}`
      );
      setCliente(response.data.data);
      setBotaoStatus(false);
    }
    consultar();
  }, []);
  async function confirmar(e) {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/clientess/${id}`
      );
      setStatus("Cliente Excluído");
      setCliente({});
    } catch (erro) {
      setStatus(`Falha: ${erro}`);
    }
  }
  return (
    <div>
      <button><Link to="/cliente">Voltar</Link></button>
      <h3>{cliente.descricao}</h3>
      {status != "Cliente Excluído" ? (
        <button onClick={confirmar} disabled={botaoStatus}>
          Confirmar Exclusão
        </button>
      ) : (
        ""
      )}
      <h3>{status}</h3>
    </div>
  );
}
export { Delete };
