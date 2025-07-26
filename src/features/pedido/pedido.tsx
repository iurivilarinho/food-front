import { useNavigate } from "react-router-dom";
import { SelecaoItemPedido } from "../../components/cardSelecaoItemPedido";
import { listaDeProdutosComGrupos } from "../../mocks/produto";

export const Pedido = () => {
  const navegar = useNavigate();
  return (
    <div className=" flex flex-col p-4 space-y-4 items-center justify-center overflow-scroll">
      {listaDeProdutosComGrupos.map((combo) => (
        <div>
          <SelecaoItemPedido
            key={combo.id}
            imageUrl={combo.imagem.contentType}
            title={combo.nome}
            description={combo.descricao}
            price={combo.valor}
            onClick={() => navegar("/detalhes-item-selecionado")}
          />
        </div>
      ))}
    </div>
  );
};
