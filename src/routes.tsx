import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/pages/dashboard/dasboardBlueBarData/Dashboard";
import { DashboardDetailClient } from "./components/pages/dashboardDetailClient";
import { DashboardDetailProduct } from "./components/pages/deshboardDetalhamento";
import { Login } from "./components/pages/Login/Login";
import { Preditions } from "./components/pages/preditions";
import { Products } from "./components/pages/products";
import { AuthContext, AuthProvider } from "./contexts/AuthContext/AuthContext";
import { useContext } from "react";

function PrivateRoutes({ children }: { children: React.ReactNode }) {
  const { authentified } = useContext(AuthContext);

  if (!authentified) {
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
}
export const RoutesProject = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route element={<Login eye={false} />} path="/" />
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
        <Route
          element={
            <PrivateRoutes>
              <DashboardDetailClient />
            </PrivateRoutes>
          }
          path="/dashboard-detail-client"
        />
        <Route
          element={
            <PrivateRoutes>
              <DashboardDetailProduct />
            </PrivateRoutes>
          }
          path="/dashboard-detail-product"
        />
        <Route
          element={
            <PrivateRoutes>
              <Preditions />
            </PrivateRoutes>
          }
          path="/predictions"
        />
        <Route
          element={
            <PrivateRoutes>
              <Products />
            </PrivateRoutes>
          }
          path="/products"
        />
        <Route
          element={
            <PrivateRoutes>
              <Preditions />
            </PrivateRoutes>
          }
          path="/predicoes"
        />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
