import { useNavigate } from "react-router-dom";
import { SelecaoItemPedido } from "../../components/cardSelecaoItemPedido";
import { SelecaoItemPedidoMock } from "../../app/mock";

export const Pedido = () => {
  const navegar = useNavigate();
  return (
    <div className="p-4 space-y-4">
      {SelecaoItemPedidoMock.map((combo) => (
        <SelecaoItemPedido
          key={combo.id}
          imageUrl={combo.imageUrl}
          title={combo.title}
          description={combo.description}
          price={combo.price}
        />
      ))}
    </div>
  );
};
