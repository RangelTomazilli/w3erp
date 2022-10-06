import { BrowserRouter, Route, Route as RoutesRouter } from "react-router-dom";
import { Dashboard } from "./components/pages/dashboard";
import { DashboardDetailClient } from "./components/pages/dashboardDetailClient";
import { DashboardDetailProduct } from "./components/pages/deshboardDetalhamento";
import { Login } from "./components/pages/Login/Login";
import { Preditions } from "./components/pages/preditions";
import { Products } from "./components/pages/products";

export const Routes = () => (
  <BrowserRouter>
    <RoutesRouter>
      <Route element={<Login eye={false} />} path="/login" />
      <Route element={<Dashboard />} path="/dashboard" />
      <Route
        element={<DashboardDetailClient />}
        path="/dashboard-detail-client"
      />
      <Route
        element={<DashboardDetailProduct />}
        path="/dashboard-detail-product"
      />
      <Route element={<Preditions />} path="/predictions" />
      <Route element={<Products />} path="/products" />
      <Route element={<Preditions />} path="/predicoes" />
    </RoutesRouter>
  </BrowserRouter>
);
