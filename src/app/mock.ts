export type SelecaoItemPedidoProps = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
};

export const SelecaoItemPedidoMock: SelecaoItemPedidoProps[] = [
  {
    id: "combo-001",
    imageUrl: "/images/pizza-bolognesa.png",
    title: "Bolognesa G (8 pedaços) + Refrí 2L",
    description:
      "Queijo mozarella, tradicional molho à bolognesa, alho e cebola ralada",
    price: "79,90",
  },
  {
    id: "combo-002",
    imageUrl: "/images/pizza-calabresa.png",
    title: "Calabresa G (8 pedaços) + Refrí 2L",
    description: "Calabresa fatiada, queijo, cebola e molho especial da casa",
    price: "82,50",
  },
  {
    id: "combo-003",
    imageUrl: "/images/pizza-frango-catupiry.png",
    title: "Frango com Catupiry G + Refrí 2L",
    description:
      "Frango desfiado, catupiry original e molho de tomate artesanal",
    price: "84,90",
  },
  {
    id: "combo-004",
    imageUrl: "/images/pizza-portuguesa.png",
    title: "Portuguesa G + Refrí 2L",
    description: "Presunto, ovo, cebola, pimentão, azeitona, ervilha e queijo",
    price: "86,00",
  },
];
