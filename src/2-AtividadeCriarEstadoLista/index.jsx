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

  return (
    <div>
      <h1>Livros sobre Criptídeos</h1>
    </div>
  );
}
