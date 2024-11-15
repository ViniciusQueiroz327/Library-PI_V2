// import './App.css'
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import '../public/assets/styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App