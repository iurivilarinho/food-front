import { useState } from "react";
import { VariacaoItem } from "../../components/cardVariacaoItemPedido";
import { mockDetalheItem } from "../../app/mock";
import { AdicionarItem } from "../../components/adicionarItem";

export const DetalheItemSelecionado = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [qtd, setQtd] = useState(1);

  // Encontra o item selecionado no array
  const selectedItem = mockDetalheItem.find((item) => item.id === selectedId);

  // Calcula preço total
  const precoUnitario = selectedItem
    ? parseFloat(selectedItem.price.replace(",", "."))
    : 0;
  const precoTotal = precoUnitario * qtd;

  const handleAdd = () => {
    if (!selectedItem) return;
    console.log(
      `Adicionado ${qtd}x ${selectedItem.title} (total: R$ ${precoTotal.toFixed(
        2
      )})`
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Conteúdo com rolagem */}
      <div className="flex-1 overflow-auto pb-36 px-4">
        {mockDetalheItem.map((item) => (
          <div key={item.id} className="flex py-2 justify-center">
            <VariacaoItem
              description={item.description}
              imageUrl={item.imageUrl}
              price={item.price}
              title={item.title}
              selected={selectedId === item.id}
              onSelect={() => setSelectedId(item.id)}
            />
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
