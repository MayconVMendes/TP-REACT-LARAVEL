import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [produto, setProduto] = useState({});
  const [status, setStatus] = useState("");
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    async function consultar() {
      const response = await axios.get(
        `http://localhost:8000/api/produtos/${id}`
      );
      setProduto(response.data.data);
    }
    consultar();
  }, [id]);

  async function gravar(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/produtos/${id}`, produto);
      setStatus("Produto Atualizado, em alguns segundos você será redirecionado");
      setBtn(true);
      setTimeout(function () {
        window.location.href = "/produto";
      }, 4000);
    } catch (erro) {
      setStatus(`Falha: Por favor, certifique que os campos foram preenchidos corretamente`);
    }
  }

  return (
    <div>
      <h3>{status}</h3>
      <form onSubmit={gravar}>
        <div className="_forms-create">
          <h2>Preencha os campos</h2>
          <div className="inputs">
            <span>Nome: </span>
            <input
              value={produto.nome}
              required
              maxLength={20}
              onChange={(e) => {
                setProduto({ ...produto, nome: e.target.value });
              }}
            />
          </div>
          <div className="inputs">
            <span>Marca: </span>
            <input
              value={produto.marca}
              required
              maxLength={20}
              onChange={(e) => {
                setProduto({ ...produto, marca: e.target.value });
              }}
            />
          </div>
          <div className="inputs">
            <span>Preço: </span>
            <input
              type={"number"}
              value={produto.preco}
              required
              onChange={(e) => {
                setProduto({ ...produto, preco: e.target.value });
              }}
            />
          </div>
          <div className="inputs">
            <span>Data validade: </span>
            <input
              type={"date"}
              value={produto.dataValidade}
              required
              onChange={(e) => {
                setProduto({ ...produto, dataValidade: e.target.value });
              }}
            />
          </div>
          <div className="inputs">
            <span>Unidade: </span>
            <input
              type={"number"}
              value={produto.unidade}
              required
              onChange={(e) => {
                setProduto({ ...produto, unidade: e.target.value });
              }}
            />
          </div>
          {btn !== true ? <button type="submit">Enviar</button> : ""}
        </div>
      </form>
    </div>
  );
}
export { Edit };
