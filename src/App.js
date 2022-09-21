
import Register from "../src/pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./style.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
}from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {

  const {currentUser} = useContext(AuthContext)
  
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login" />
    }

    return children
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
