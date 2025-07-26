import type { Documento } from "./documento";

export interface Complemento {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  quantitativo: boolean;
  imagem: Documento;
}
