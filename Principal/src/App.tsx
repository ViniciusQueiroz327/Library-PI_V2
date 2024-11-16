// import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
//import { AppRoutes } from "./routes"
import '../public/assets/styles/App.css'

import { Home } from './Pages/Home'; 
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { InfosLivro } from "./Pages/InfosLivro";
import { BookRegister } from "./Pages/BookRegister";
import { BookSearch } from "./Pages/BookSearch";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/infosLivro" element={<InfosLivro/>}/>
            <Route path="/bookRegister" element={<BookRegister/>}/>
            <Route path="/bookSearch" element={<BookSearch/>}/>
      </Routes>
    </Router>
  )
}

export default App