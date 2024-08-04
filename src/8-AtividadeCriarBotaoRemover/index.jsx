import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {

  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Flatwoods Monster: Além de Fallout 76', preço: 'R$ 19,52', imagem: 'src/8-AtividadeCriarBotaoRemover/components/images/FlatWoods.png' },
    { id: 2, nome: 'Indrid Cold: O Humanóide de Lanulos', preço: 'R$ 19,66', imagem: 'src/8-AtividadeCriarBotaoRemover/components/images/IndridCold.png' },
    { id: 3, nome: 'Mothman: As Profecias', preço: 'R$ 19,66', imagem: 'src/8-AtividadeCriarBotaoRemover/components/images/Mothman.png' },
    { id: 4, nome: 'Owlman: O Mothman Britânico', preço: 'R$ 19,76', imagem: 'src/8-AtividadeCriarBotaoRemover/components/images/Owlman.png' },
    { id: 5, nome: 'Melon Heads: Canibais Americanos', preço: 'R$ 19,60', imagem: 'src/8-AtividadeCriarBotaoRemover/components/images/MelonHeads.png' },
    { id: 6, nome: 'Criptozoologia: Guia Completo - Box com as Três Edições!!', preço: 'R$ 19,53', imagem: 'src/8-AtividadeCriarBotaoRemover/components/images/Box.png'}
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
    <div id="TSB">
      <div id="Top">
        <img src="src/8-AtividadeCriarBotaoRemover/components/images/Logo.png" id="Logo" />
        <img src="src/8-AtividadeCriarBotaoRemover/components/images/SiteName.png" id="Name" />
      </div>

      <div id="Switch">
        <img src="src/8-AtividadeCriarBotaoRemover/components/images/Stars.gif" id="Stars" />
        <img src="src/8-AtividadeCriarBotaoRemover/components/images/Stars.gif" id="Stars" />
        <Header title={"Livros sobre Criptídeos"} />
        {
          listaProdutos.map((produto) =>
            <div key={produto.id} id="Prod">
              <img src={produto.imagem} id="ProdImages" />
              <p>{produto.nome}</p>
              <p id="Price">{produto.preço}</p>
              <button onClick={() => adicionarItemPedidos(produto)}>Adicionar ao Carrinho!</button>
            </div>
          )
        }
        {
          listaPedidos.map((produto) =>
            <div key={produto.id} id="Prod">
              <img src={produto.imagem} id="ProdImages" />
              <p>{produto.nome}</p>
              <p id="Price">{produto.preço}</p>
              <button onClick={() => removerPedido(produto.id)}>Remover</button>
            </div>
          )
        }
      </div>

      <div id="Bottom">
        <img src="src\8-AtividadeCriarBotaoRemover\components\images\Berries.png" class="Berries"/>
        <Footer desenvolvedor={"Ana Paula S. Schotten - INFO 3B"} />
        <img src="src\8-AtividadeCriarBotaoRemover\components\images\Berries02.png" class="Berries"/>
      </div>
    </div>
  );
}