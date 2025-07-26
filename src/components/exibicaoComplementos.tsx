import { useEffect, useState } from "react";
import type { Complemento } from "../types/complemento";
import { Contador } from "./contador";

type GrupoComplementoProps = {
  titulo: string;
  complementos: Complemento[];
  minimo?: number;
  maximo?: number;
};

export const ListaComplementos = ({
  titulo,
  complementos,
  minimo = 0,
  maximo = Infinity,
}: GrupoComplementoProps) => {
  const [quantidades, setQuantidades] = useState<Record<number, number>>({});
  const [selecionados, setSelecionados] = useState<Set<number>>(new Set());

  useEffect(() => {
    console.log("minimo", minimo);
    console.log("maximo", maximo);
  });

  const handleIncrement = (id: number) => {
    const total = Object.values(quantidades).reduce((a, b) => a + b, 0);
    if (total >= maximo) return;

    setQuantidades((prev) => ({
      ...prev,
      [id]: (prev[id] || (minimo ?? 0)) + 1,
    }));
  };

  const handleDecrement = (id: number) => {
    setQuantidades((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  const handleRadioSelect = (id: number) => {
    setSelecionados(new Set([id]));
  };

  const handleCheckboxToggle = (id: number) => {
    setSelecionados((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (newSet.size >= maximo) return prev;
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full">
      <h3 className="font-semibold mb-2">{titulo}</h3>
      <ul className="space-y-2">
        {complementos.map((item) => {
          const isQuantitativo = item.quantitativo;
          const isRadio = !isQuantitativo && maximo === 1;
          const isCheckbox = !isQuantitativo && maximo > 1;
          const totalSelecionados = Object.values(quantidades).reduce(
            (a, b) => a + b,
            0
          );
          const disabledIncrement = totalSelecionados >= maximo;

          return (
            <li
              key={item.id}
              className="flex items-center justify-between border-b py-2"
            >
              <span>{item.nome}</span>

              {isQuantitativo && (
                <Contador
                  decrementar={() => handleDecrement(item.id)}
                  incrementar={() => handleIncrement(item.id)}
                  quantidades={quantidades}
                  itemId={item.id}
                  disabledIncrement={disabledIncrement}
                />
              )}

              {isRadio && (
                <input
                  type="radio"
                  name={`radio-${titulo}`}
                  checked={selecionados.has(item.id)}
                  onChange={() => handleRadioSelect(item.id)}
                  className="accent-red-500 w-5 h-5"
                />
              )}

              {isCheckbox && (
                <input
                  type="checkbox"
                  checked={selecionados.has(item.id)}
                  onChange={() => handleCheckboxToggle(item.id)}
                  className="accent-red-500 w-5 h-5"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
