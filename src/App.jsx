// Global Imports
// import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes,
  Route, } from 'react-router-dom'
// Local Imports
import './App.css'
import {Navbar, Footer }from './components'
import {HomePage, AboutPage, ListingsPage, ErrorPage, SingleListingPage, ComingSoon, NewListingPage} from './pages'
import Header from './components/Header/Header'



function App() {

  return (
    <main>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='about' element={<AboutPage/>} />
          <Route path='listings' element={<ListingsPage/>} />
          <Route path='listings/:id' element={<SingleListingPage/>} />
          <Route path='coming-soon' element={<ComingSoon/>} />
          <Route path='new-listing' element={<NewListingPage/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
