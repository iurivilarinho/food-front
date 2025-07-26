import React from "react";
import { cn } from "../utils/cn";

type AdicionarItemProps = {
  quantity: number;
  price: number | string;
  onIncrement: () => void;
  onDecrement: () => void;
  onAdd: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const AdicionarItem: React.FC<AdicionarItemProps> = ({
  quantity,
  price,
  onIncrement,
  onDecrement,
  onAdd,
  className,
  ...rest
}) => {
  return (
    <div className={cn("flex items-center gap-2 w-full", className)} {...rest}>
      {/* Counter */}
      <div className="flex items-center border rounded-md px-2 py-1">
        <button
          onClick={onDecrement}
          className="text-gray-500 text-lg px-1"
          aria-label="Diminuir"
        >
          –
        </button>
        <span className="px-2 text-sm font-medium">{quantity}</span>
        <button
          onClick={onIncrement}
          className="text-orange-500 text-lg px-1"
          aria-label="Aumentar"
        >
          +
        </button>
      </div>

      {/* Botão Adicionar */}
      <button
        onClick={onAdd}
        className="flex-1 flex justify-between items-center bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md px-4 py-2 transition-colors"
      >
        <span>Adicionar</span>
        <span className="ml-4 font-semibold">
          R${" "}
          {typeof price === "number"
            ? price.toFixed(2).replace(".", ",")
            : price}
        </span>
      </button>
    </div>
  );
};
