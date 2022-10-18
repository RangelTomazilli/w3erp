import axios from "axios";
import { apiService } from "../config/apiService";

export const AuthLogin = async (login: string, password: string) => {
  try {
    const response = await apiService.post("/autenticacao/login", {
      email: login,
      senha: password,
    });
    if (response.status === 200) {
      apiService.defaults.headers.common[
        "Authorization"
      ] = `${response.data.type} ${response.data.token}`;
      localStorage.setItem("token", JSON.stringify(response.data));
      return { logged: true }; //localstorage é usado para guardar os dados de forma local no navegador, para o site funcionar até dar refresh.
    } // para utilizar o dado salvo em outro arquivo, seria usado localStorage.getItem().
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
