import { useNavigate } from "react-router-dom";
import { SelecaoItemPedido } from "../../components/cardSelecaoItemPedido";
import { SelecaoItemPedidoMock } from "../../app/mock";

export const Pedido = () => {
  const navegar = useNavigate();
  return (
    <div className=" flex flex-col p-4 space-y-4 items-center justify-center overflow-scroll">
      {SelecaoItemPedidoMock.map((combo) => (
        <SelecaoItemPedido
          key={combo.id}
          imageUrl={combo.imageUrl}
          title={combo.title}
          description={combo.description}
          price={combo.price}
          onClick={() => navegar("/detalhes-item-selecionado")}
        />
      ))}
    </div>
  );
};
