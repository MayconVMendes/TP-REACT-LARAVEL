import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Delete() {
  const { id } = useParams();
  const [produto, setProduto] = useState({});
  const [status, setStatus] = useState("");
  const [botaoStatus, setBotaoStatus] = useState(true);

  useEffect(() => {
    async function consultar() {
      const response = await axios.get(
        `http://localhost:8000/api/produtos/${id}`
      )
      setProduto(response.data.data);
      setBotaoStatus(false);
    }
    consultar();
  }, [id]);

  async function confirmar(e) {
    try {
      await axios.delete(`http://localhost:8000/api/produtos/${id}`);
      setStatus("Produto Excluído, em 5 segundos você será redirecionado");
      setProduto({});

      setTimeout(function () {
        window.location.href = "/produto";
      }, 5000);
    } catch (erro) {
      setStatus(`Falha: ${erro}`);
    }
  }

  return (
    <div>
      <h3>{status}</h3>

      <div className="container">
        <table border={1}>
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Marca</th>
              <th>Preço</th>
              <th>Data de Validade</th>
              <th>Unidade</th>
            </tr>
            {
              <tr className="line_table">
                <td>{produto.nome}</td>
                <td>{produto.marca}</td>
                <td>
                  <div className="td_price">
                    <span>R$</span>
                    {produto.preco}
                  </div>
                </td>
                <td>{produto.dataValidade}</td>
                <td>{produto.unidade}</td>
              </tr>
            }
          </tbody>
        </table>
        {status !==
        "Produto Excluído, em 5 segundos você será redirecionado" ? (
          <button onClick={confirmar} disabled={botaoStatus}>
            Confirmar Exclusão
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export { Delete };
