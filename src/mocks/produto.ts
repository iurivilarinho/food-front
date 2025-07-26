import type { Produto } from "../types/produto";

export const SelecaoItemPedidoMock: Produto[] = [
  {
    id: 1,
    imagem: { contentType: "jpg", id: 1, nome: "pizza", documento: "" },
    nome: "Bolognesa G (8 pedaços) + Refrí 2L",
    descricao:
      "Queijo mozarella, tradicional molho à bolognesa, alho e cebola ralada",
    valor: 79.9,
  },
  {
    id: 2,
    imagem: {
      contentType: "png",
      id: 2,
      nome: "pizza-calabresa",
      documento: "/images/pizza-calabresa.png",
    },
    nome: "Calabresa G (8 pedaços) + Refrí 2L",
    descricao: "Calabresa fatiada, queijo, cebola e molho especial da casa",
    valor: 82.5,
  },
  {
    id: 3,
    imagem: {
      contentType: "png",
      id: 3,
      nome: "pizza-frango-catupiry",
      documento: "/images/pizza-frango-catupiry.png",
    },
    nome: "Frango com Catupiry G + Refrí 2L",
    descricao: "Frango desfiado, catupiry original e molho de tomate artesanal",
    valor: 84.9,
  },
  {
    id: 4,
    imagem: {
      contentType: "png",
      id: 4,
      nome: "pizza-portuguesa",
      documento: "/images/pizza-portuguesa.png",
    },
    nome: "Portuguesa G + Refrí 2L",
    descricao: "Presunto, ovo, cebola, pimentão, azeitona, ervilha e queijo",
    valor: 86.0,
  },
];

export const listaDeProdutosComGrupos: Produto[] = [
  {
    id: 1,
    nome: "Pizza Frango com Catupiry",
    valor: 79.9,
    descricao: "Pizza com frango desfiado e catupiry original.",
    imagem: {
      id: 101,
      nome: "pizza-frango-catupiry",
      contentType: "image/png",
      documento: "/images/pizza-frango-catupiry.png",
    },
    gruposComplementos: [
      {
        id: 1,
        nome: "Escolha sua borda",
        minimo: 1,
        maximo: 1,
        complementos: [
          {
            id: 11,
            nome: "Borda Recheada Catupiry",
            descricao: "Com catupiry original",
            valor: 5,
            quantitativo: false,
            imagem: {
              id: 201,
              nome: "borda-catupiry",
              contentType: "image/png",
              documento: "/images/borda-catupiry.png",
            },
          },
          {
            id: 12,
            nome: "Sem Borda",
            descricao: "Tradicional, sem recheio",
            valor: 0,
            quantitativo: false,
            imagem: {
              id: 202,
              nome: "sem-borda",
              contentType: "image/png",
              documento: "/images/sem-borda.png",
            },
          },
        ],
      },
      {
        id: 2,
        nome: "Molhos Extras",
        minimo: 0,
        maximo: 2,
        complementos: [
          {
            id: 21,
            nome: "Molho Barbecue",
            descricao: "Doce e defumado",
            valor: 2,
            quantitativo: false,
            imagem: {
              id: 301,
              nome: "molho-barbecue",
              contentType: "image/png",
              documento: "/images/molho-barbecue.png",
            },
          },
          {
            id: 22,
            nome: "Molho Picante",
            descricao: "Feito com pimentas selecionadas",
            valor: 2,
            quantitativo: false,
            imagem: {
              id: 302,
              nome: "molho-picante",
              contentType: "image/png",
              documento: "/images/molho-picante.png",
            },
          },
        ],
      },
    ],
  },

  {
    id: 2,
    nome: "Pizza Calabresa",
    valor: 74.9,
    descricao: "Calabresa fatiada, queijo mussarela, cebola e molho da casa.",
    imagem: {
      id: 102,
      nome: "pizza-calabresa",
      contentType: "image/png",
      documento: "/images/pizza-calabresa.png",
    },
    gruposComplementos: [
      {
        id: 3,
        nome: "Adicionais",
        minimo: 0,
        maximo: 3,
        complementos: [
          {
            id: 31,
            nome: "Azeitona Preta",
            descricao: "Fatias generosas de azeitonas pretas",
            valor: 2.5,
            quantitativo: true,
            imagem: {
              id: 303,
              nome: "azeitona",
              contentType: "image/png",
              documento: "/images/azeitona.png",
            },
          },
          {
            id: 32,
            nome: "Cebola Caramelizada",
            descricao: "Cebola refogada no açúcar mascavo",
            valor: 3.5,
            quantitativo: true,
            imagem: {
              id: 304,
              nome: "cebola-caramelizada",
              contentType: "image/png",
              documento: "/images/cebola-caramelizada.png",
            },
          },
        ],
      },
    ],
  },

  {
    id: 3,
    nome: "Pizza Marguerita",
    valor: 69.9,
    descricao: "Queijo, tomate, manjericão fresco e azeite de oliva.",
    imagem: {
      id: 103,
      nome: "pizza-marguerita",
      contentType: "image/png",
      documento: "/images/pizza-marguerita.png",
    },
    gruposComplementos: [
      {
        id: 4,
        nome: "Acompanhamentos",
        minimo: 0,
        maximo: 2,
        complementos: [
          {
            id: 41,
            nome: "Refrigerante Lata",
            descricao: "Coca-Cola, Guaraná ou Pepsi (350ml)",
            valor: 6.0,
            quantitativo: true,
            imagem: {
              id: 305,
              nome: "refrigerante",
              contentType: "image/png",
              documento: "/images/refrigerante.png",
            },
          },
          {
            id: 42,
            nome: "Água com gás",
            descricao: "Garrafa 500ml",
            valor: 4.0,
            quantitativo: true,
            imagem: {
              id: 306,
              nome: "agua-com-gas",
              contentType: "image/png",
              documento: "/images/agua-com-gas.png",
            },
          },
        ],
      },
    ],
  },
];
