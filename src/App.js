import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import MenuBar from "./components/commons/Menu";
import { UserProvider } from "./context/user-context";
import { PaymentProvider } from "./context/payment-context";

function App() {

  return (
    <UserProvider>
      <PaymentProvider>
        <Router>
          <MenuBar />
          <Routes>
            <Route path="/" element={<MainLayout />} />
          </Routes>
        </Router> 
      </PaymentProvider>
    </UserProvider>
  );
}

export default App;
