import React from "react";

type PizzaComboCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
};

export const SelecaoItemPedido: React.FC<PizzaComboCardProps> = ({
  imageUrl,
  title,
  description,
  price,
}) => {
  return (
    <div className="flex items-center justify-between border rounded-lg p-4 w-full max-w-xl shadow-sm hover:shadow-md transition">
      {/* Texto à esquerda */}
      <div className="flex-1 pr-4">
        <h3 className="font-semibold text-base">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="mt-1 font-medium text-sm text-gray-800">
          a partir de R$ {price}
        </p>
      </div>

      {/* Imagem à direita */}
      <img
        src={imageUrl}
        alt={title}
        className="w-20 h-20 rounded-full object-cover"
      />
    </div>
  );
};
