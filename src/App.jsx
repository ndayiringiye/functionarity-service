import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Routes >
         <Route  path="/" element={<Navbar />}/>
      </Routes>
    </div>
  )
}

export default App