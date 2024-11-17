import { Home } from './Pages/Home/Home'
import { About } from './Pages/About/About'
import { BookRegister } from './Pages/BookRegister/BookRegister'
import { BookSearch } from './Pages/BookSearch/BookSearch'
import { InfoLivros } from './Pages/InfosLivro/InfosLivro'
import { Profile } from './Pages/Profile/Profile'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        {/* <Route path='/login' element={< />}/>
        <Route path='/register' element={< />}/> */}
        <Route path="/about" element={<About />}/>
        <Route path="/bookregister" element={<BookRegister />}/>
        <Route path="/booksearch" element={<BookSearch />}/>
        <Route path="/infolivros" element={<InfoLivros />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </Router>
  )
}

export default App
