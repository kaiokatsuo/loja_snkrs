import { useState } from "react";
import { Link } from "react-router-dom";
import produtos from "../products";

function ProductList() {
  const [filtroMarca, setFiltroMarca] = useState("all");
  const [ordemPreco, setOrdemPreco] = useState("none");

  const filtrarPorMarca = (lista) => {
    if (filtroMarca === "all") return lista;
    return lista.filter((item) => item.marca === filtroMarca);
  };

  const ordenarPorPreco = (lista) => {
    if (ordemPreco === "menor") {
      return [...lista].sort((a, b) => a.precoNum - b.precoNum);
    }
    if (ordemPreco === "maior") {
      return [...lista].sort((a, b) => b.precoNum - a.precoNum);
    }
    return lista;
  };

  const listaFinal = ordenarPorPreco(filtrarPorMarca(produtos));

  return (
    <main className="main-content">
      <section className="filtros">
        <select
          value={filtroMarca}
          onChange={(e) => setFiltroMarca(e.target.value)}
        >
          <option value="all">Todas as marcas</option>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="New Balance">New Balance</option>
        </select>

        <select
          value={ordemPreco}
          onChange={(e) => setOrdemPreco(e.target.value)}
        >
          <option value="none">Ordenar por...</option>
          <option value="menor">Menor preço</option>
          <option value="maior">Maior preço</option>
        </select>
      </section>

      <section className="product-grid">
        {listaFinal.map((produto) => (
          <Link
            key={produto.id}
            to={`/produto/${produto.id}`}
            className="card-link"
          >
            <article className="product-card">
              <div className="image-container">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="product-image"
                />
              </div>

              <div className="product-info">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <span className="product-fabricante">
                  Fabricante: {produto.marca}
                </span>
                <strong>{produto.preco}</strong>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default ProductList;
