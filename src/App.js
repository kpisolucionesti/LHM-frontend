import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import MenuBar from "./components/commons/Menu";
import UserContext, { user } from "./context/user-context";

function App() {

  return (
    <UserContext value={{ user }}>
      <Router>
        <Routes>
          <MenuBar />
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </Router>
    </UserContext> 
  );
}

export default App;
