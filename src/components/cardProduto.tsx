import { LixeiraIcon } from "./icons/lixeira";
import imagePizza from "../img/image.png";
import { LapisEdicao } from "./icons/lapisEdicao";

export default function PizzaComboCard() {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md border w-full max-w-md">
      {/* Imagem da pizza com botão de edição */}
      <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <img
          src={imagePizza} // Caminho da imagem
          alt="Pizza"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-1 right-1 bg-black/60 p-1 rounded-full">
          {/* Ícone de lápis (edit) */}
         <LapisEdicao/>
        </div>
      </div>

      {/* Informações do produto */}
      <div className="flex-1">
        <h3 className="text-base font-semibold text-gray-900 leading-tight">
          Combo Pizza G (8 pedaços) + Refrigerante 2L
        </h3>
        <p className="text-orange-600 font-bold text-lg mt-1">R$ 86,80</p>
        <ul className="text-sm text-gray-600 mt-1 space-y-0.5">
          <li>1 Borda recheada Catupiry</li>
          <li>1 Coca-Cola sem açúcar 310ml</li>
        </ul>
      </div>

      {/* Botão de deletar */}
      <button className="text-red-600 hover:text-red-800 mt-1">
        <LixeiraIcon />
      </button>
    </div>
  );
}
