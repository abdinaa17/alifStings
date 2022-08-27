// Global Imports
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes,
  Route, } from 'react-router-dom'
// Local Imports
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {HomePage, AboutPage, ListingsPage, ErrorPage, SingleListingPage} from './pages'



function App() {

  return (
    <main>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='about' element={<AboutPage/>} />
          <Route path='listings' element={<ListingsPage/>} />
          <Route path='listings/:id' element={<SingleListingPage/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
