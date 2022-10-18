import axios from "axios";
import { apiService } from "../config/apiService";

export type GetDashboardResumeProps = {
  percentualTotalClientesAlta: number;
  percentualTotalClientesBaixa: number;
  percentualTotalProdutosAlta: number;
  percentualTotalProdutosBaixa: number;
  percentualVariacaoClientesAlta: number;
  percentualVariacaoClientesBaixa: number;
  percentualVariacaoProdutosAlta: number;
  percentualVariacaoProdutosBaixa: number;
  quantidadeClientesAlta: number;
  quantidadeClientesBaixa: number;
  quantidadeProdutosAlta: number;
  quantidadeProdutosBaixa: number;
};

export const GetDashboardResume = async (
  dataFim: string,
  dataInicio: string
): Promise<GetDashboardResumeProps> => {
  try {
    const result = await apiService.get("/dashboard/resumo", {
      params: {
        dataFim,
        dataInicio,
      },
    });
    if (result.status === 200) {
      return result.data;
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

export type StyledTableProps = {
  id?: number;
  nome?: string;
  percentual?: number;
}[];

export const GetDashboardTableProduct = async (
  dataFim: string,
  dataInicio: string,
  classificacao: "EM_ALTA" | "EM_BAIXA"
): Promise<StyledTableProps> => {
  try {
    const result = await apiService.get("/dashboard/produtos", {
      params: {
        dataFim,
        dataInicio,
        classificacao,
      },
    });
    if (result.status === 200) {
      return result.data;
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

export const GetDashboardTableClient = async (
  dataFim: string,
  dataInicio: string,
  classificacao: "EM_ALTA" | "EM_BAIXA"
): Promise<StyledTableProps> => {
  try {
    const result = await apiService.get("/dashboard/clientes", {
      params: {
        dataFim,
        dataInicio,
        classificacao,
      },
    });
    if (result.status === 200) {
      return result.data;
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
