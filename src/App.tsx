import { GlobalStyle } from "./assets/globalStyles/GlobalStyles";
import { Products } from "./components/pages/products";
import { PredictionsDetail } from "./components/pages/predictionsDetail";
import { Preditions } from "./components/pages/preditions";
import { Dashboard } from "./components/pages/dashboard";
import { DashboardDetailProduct } from "./components/pages/deshboardDetalhamento";
import { Login } from "./components/pages/Login/Login";

function App() {
  return (
    <>
      <GlobalStyle />
      <Login eye={false} />
      <Dashboard />
      <DashboardDetailProduct />
      <Preditions />
      <PredictionsDetail />
      <Products />
    </>
  );
}
export default App;
