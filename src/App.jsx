import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Routes >
        <Route element={<Navbar />}>
         <Route path="/login" element={<Login />}/>
         <Route path="/register" element={<Register />}/>
         </Route>
      </Routes>
    </div>
  )
}

export default App