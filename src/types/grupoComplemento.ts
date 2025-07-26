import type { Complemento } from "./complemento";

export interface GrupoComplemento {
  id: number;
  nome: string;
  minimo: number;
  maximo: number;
  complementos: Complemento[];
}
