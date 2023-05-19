import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signin from "../Pages/Signin/Map";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/Error/NotFound";
import PaymentDetail from "../Pages/PaymentDetail";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/sign" element={<Signin />} />
        <Route path="/" element={<PaymentDetail />} />
        <Route path="/dash-board" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
