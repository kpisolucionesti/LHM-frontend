import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PaymentProvider } from "./context/payment-context";
import { AuthProvider } from "./context/auth-context";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import MainLayout from "./components/MainLayout";
import LoginPage from "./components/screens/login/Page";

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
                    <MainLayout />
                  </PrivateRoute>
              } />
            </Routes>
          </Router> 
        </PaymentProvider>
    </AuthProvider>
  );
}

export default App;
