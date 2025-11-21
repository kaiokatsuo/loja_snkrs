import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import produtos from "../products";

function ProductPage() {
  const { id } = useParams();
  const produto = produtos.find((item) => item.id === Number(id));

  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [erroCep, setErroCep] = useState("");

  async function buscarCEP() {
    setCidade("");
    setErroCep("");

    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      setErroCep("Digite um CEP válido com 8 números.");
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const dados = await response.json();

      if (dados.erro) {
        setErroCep("CEP não encontrado.");
      } else {
        setCidade(`${dados.localidade} - ${dados.uf}`);
      }
    } catch (error) {
      setErroCep("Erro ao buscar o CEP. Tente novamente.");
    }
  }

  if (!produto) {
    return (
      <main className="main-content">
        <div className="product-page">
          <p>Produto não encontrado.</p>
          <Link to="/produtos" className="btn-voltar">
            Voltar para produtos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="main-content">
      <div className="product-page">
        <div className="product-page-image">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="product-page-img"
          />
        </div>

        <div className="product-page-info">
          <h1>{produto.nome}</h1>
          <p className="product-page-fabricante">
            Fabricante: <strong>{produto.marca}</strong>
          </p>
          <p className="product-page-preco">{produto.preco}</p>

          <h3>Descrição</h3>
          <p>{produto.descricao}</p>

          <hr />

          <h3>Consultar CEP de entrega</h3>
          <div className="cep-row">
            <input
              type="text"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <button onClick={buscarCEP}>Buscar</button>
          </div>

          {erroCep && <p className="erro-cep">{erroCep}</p>}
          {cidade && (
            <p className="cidade-resultado">
              Cidade encontrada: <strong>{cidade}</strong>
            </p>
          )}

          <Link to="/produtos" className="btn-voltar">
            ⟵ Voltar para produtos
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
