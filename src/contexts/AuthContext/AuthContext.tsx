import { createContext, useState, useEffect } from "react";
import { TitleBox } from "../../components/pages/Login/Login.Style";
import { apiService } from "../../components/services/config/apiService";

type ContextType = {
  authentified: boolean;
  loading: boolean;
};

export const AuthContext = createContext<ContextType>({
  authentified: false,
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [authentified, setAuthentified] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const conversion = JSON.parse(token);
      apiService.defaults.headers.common[
        "Authorization"
      ] = `${conversion.type} ${conversion.token}`;
      setAuthentified(true);
    } else {
      setAuthentified(false);
    }
    setLoading(false);
  }, []);
  if (loading) {
    return <TitleBox>Carregando...</TitleBox>;
  }
  return (
    <AuthContext.Provider value={{ authentified, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
