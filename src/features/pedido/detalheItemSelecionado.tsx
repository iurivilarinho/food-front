import { useState } from "react";
import { AdicionarItem } from "../../components/adicionarItem";
import { VariacaoItem } from "../../components/cardVariacaoItemPedido";
import { listaDeProdutosComGrupos } from "../../mocks/produto";
import { ListaComplementos } from "../../components/exibicaoComplementos";

export const DetalheItemSelecionado = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [qtd, setQtd] = useState(1);

  // Encontra o item selecionado no array
  const selectedItem = listaDeProdutosComGrupos.find(
    (item) => item.id === selectedId
  );

  // Calcula preço total
  const precoUnitario = selectedItem ? selectedItem.valor : 0;
  const precoTotal = precoUnitario * qtd;

  const handleAdd = () => {
    if (!selectedItem) return;
    console.log(
      `Adicionado ${qtd}x ${selectedItem.nome} (total: R$ ${precoTotal.toFixed(
        2
      )})`
    );
  };

  return (
    <div className="min-h-screen flex flex-col  items-center">
      {/* Conteúdo com rolagem */}
      <div className="flex-1 overflow-auto pb-36 px-4 items-center">
        {listaDeProdutosComGrupos.map((item) => (
          <div key={item.id} className="flex py-2  flex-col items-center">
            <VariacaoItem
              description={item.descricao}
              imageUrl={item.imagem.contentType}
              price={item.valor}
              title={item.nome}
              selected={selectedId === item.id}
              onSelect={() => setSelectedId(item.id)}
            />
            <div className="w-full ">
              {item.gruposComplementos?.map((grupo) => (
                <ListaComplementos
                  complementos={grupo.complementos}
                  titulo={grupo.nome}
                  minimo={grupo.minimo}
                  maximo={grupo.maximo}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Barra fixa */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-3 z-50">
        <AdicionarItem
          quantity={qtd}
          price={precoTotal}
          onIncrement={() => setQtd((q) => q + 1)}
          onDecrement={() => setQtd((q) => Math.max(1, q - 1))}
          onAdd={handleAdd}
          className="w-full"
        />
      </div>
    </div>
  );
};
