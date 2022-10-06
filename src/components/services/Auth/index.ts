import axios from "axios";
import { apiService } from "../config/apiService";

export const AuthLogin = async (login: string, password: string) => {
  try {
    const result = await apiService.post("/autenticacao/login", {
      email: login,
      senha: password,
    });
    if (result.status === 200) {
      apiService.defaults.headers.common[
        "Authorization"
      ] = `${result.data.type} ${result.data.token}`;
      return { logged: true };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return { logged: false, message: "Usuário ou senha incorretos." };
      }
      if (error.response?.status === 403) {
        return { logged: false, message: "Operação ilegal." };
      }
      if (error.response?.status === 404) {
        return { logged: false, message: "Usuário não encontrado." };
      }
    }
  }
  return { logged: false, message: "error" };
};
