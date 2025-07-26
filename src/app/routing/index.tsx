import { Route, Routes } from "react-router-dom";
import { SelecaoItemPedido } from "../../components/cardSelecaoItemPedido";
import BottomNavLayout from "../../components/mainLayout";
import { DetalheItemSelecionado } from "../../features/pedido/detalheItemSelecionado";
import { Pedido } from "../../features/pedido/pedido";

export const AppRouter = () => {
  return (
   
    <Routes>
      <Route
        path="/detalhes-item-selecionado"
        element={<DetalheItemSelecionado />}
      />
      <Route path="/" element={<BottomNavLayout />}>
        <Route path="/" element={<Pedido />} />

        <Route
          path="/teste3"
          element={
            <SelecaoItemPedido
              imageUrl="/pizza-bolognesa.png"
              title="Bolognesa G (8 pedaços) + Refrí 2L"
              description="Queijo mozarella, tradicional molho à bolognesa, alho e cebola ralada"
              price="79,90"
            />
          }
        />
      </Route>
    </Routes>
  );
};
