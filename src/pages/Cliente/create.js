import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Create() {
  const [cliente, setCliente] = useState({});
  const [status, setStatus] = useState("");
  async function gravar(e) {
    e.preventDefault(); // cancela o submit
    try {
      const response = await axios.post(
        "http://localhost:8000/api/clientes",
        cliente
      );
      setStatus("Cliente Cadastrado");
    } catch (erro) {
      setStatus(`Falha: ${erro}`);
    }
  }
  return (
    <div>
      <button><Link to="/cliente">Voltar</Link></button>
      <form onSubmit={gravar}>
        <div className="_forms-create">
        <h2>Preencha os campos</h2>
          <div className="inputs">
            <span>Nome: </span>
            <input
              value={cliente.nome}
              onChange={(e) => {
                setCliente({ ...cliente, nome: e.target.value });
              }}
            />
          </div>
          <div className="inputs">
            <span>Sobrenome: </span>
            <input
              value={cliente.sobrenome}
              onChange={(e) => {
                setCliente({ ...cliente, sobrenome: e.target.value });
              }}
            />
          </div>
          <div className="inputs">
            <span>Telefone: </span>
            <input
              value={cliente.telefone}
              onChange={(e) => {
                setCliente({ ...cliente, telefone: e.target.value });
              }}
            />
          </div>
          <div className="inputs">
            <span>Data de Nascimento: </span>
            <input
              value={cliente.dataNascimento}
              onChange={(e) => {
                setCliente({ ...cliente, dataNascimento: e.target.value });
              }}
            />
          </div>
          <div className="inputs">
            <span>Salario: </span>
            <input
              value={cliente.salario}
              onChange={(e) => {
                setCliente({ ...cliente, salario: e.target.value });
              }}
            />
          </div>
          <button type="submit">Enviar</button>
        </div>
      </form>
      <h3>{status}</h3>
    </div>
  );
}
export { Create };
