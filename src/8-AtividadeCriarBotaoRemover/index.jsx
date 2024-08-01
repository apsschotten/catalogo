import { useState } from "react";

export default function Home() {

  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Flatwoods Monster: Além de Fallout 76', preço: 'R$ 19,52' },
    { id: 2, nome: 'Indrid Cold: O Humanóide de Lanulos', preço: 'R$ 19,66' },
    { id: 3, nome: 'Mothman: As Profecias', preço: 'R$ 19,66' },
    { id: 4, nome: 'Owlman: O Mothman Britânico', preço: 'R$ 19,76' },
    { id: 5, nome: 'Melon Heads: Canibais Americanos', preço: 'R$ 19,60' },
    { id: 6, nome: 'Criptozoologia: Guia Completo', preço: 'R$ 19,53' }
  ]);

  const [listaPedidos, setListaPedidos] = useState([]);

  const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos, objeto])
  }

  const removerPedido = (id) => {
    let remover = false;
    let listaAux = listaPedidos.filter((produto) => {
      if (remover == false) {
        if (produto.id !== id) {
          return produto
        } else {
          remover = true;
          return null
        }
      } else {
        return produto
      }
    });
    setListaPedidos(listaAux);
  }

  return (
    <div>
      <h1>Livros sobre Criptídeos</h1>

      {
        listaProdutos.map((produto) =>
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preço}</p>
            <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
          </div>
        )
      }
      {
        listaPedidos.map((produto) =>
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preço}</p>
            <button onClick={() => removerPedido(produto.id)}>Remover</button>
          </div>
        )
      }
    </div>
  );
}
