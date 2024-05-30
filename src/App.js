import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PaymentProvider } from "./context/payment-context";
import { AuthProvider } from "./context/auth-context";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import LoginPage from "./components/screens/login/Page";
import Layout from "./components/commons/Layout";

function App() {

  return (
    <AuthProvider>
        <PaymentProvider>
          <Router>
            <Routes >
              <Route path="/" element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              } />
              <Route path="/dashboard" element={
                <PrivateRoute>
                    <Layout />
                  </PrivateRoute>
              } />
            </Routes>
          </Router> 
        </PaymentProvider>
    </AuthProvider>
  );
}

export default App;
