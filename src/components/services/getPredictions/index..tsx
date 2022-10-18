import axios from "axios";
import { apiService } from "../config/apiService";

export type StyledPredictionsProps = {
  id: number;
  nome: string;
  produtos: {
    nome: string;
    proximaCompra: string;
  }[];
}[];

export const GetPredictions = async () => {
  try {
    const result = await apiService.get("/predicao", {});
    if (result.status === 200) {
      return result.data.content;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error("Não autorizado.");
      }
      if (error.response?.status === 403) {
        throw new Error("Acesso não permitido");
      }
      if (error.response?.status === 404) {
        throw new Error("URL não encontrada");
      }
    }
  }
  throw new Error("Manutenção em andamento. Aguarde...");
};
