import type { Documento } from "./documento";
import type { GrupoComplemento } from "./grupoComplemento";

export interface Produto {
  id: number;
  nome: string;
  valor: number;
  etiqueta?: string;
  descricao: string;
  imagem: Documento;
  categoria?: string;
  destaque?: boolean;
  disponivel?: boolean;
  variacoes?: Variacao[];
  tempoPreparoMin?: number;
  precoPromocional?: number;
  gruposComplementos?: GrupoComplemento[];
}

interface Variacao {
  nome: string;
  valor: number;
}
