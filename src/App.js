import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/user-context";
import { PaymentProvider } from "./context/payment-context";
import MainLayout from "./components/MainLayout";
import LoginPage from "./components/screens/login/Page";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";

function App() {

  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;
