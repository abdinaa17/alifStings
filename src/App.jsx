// Global Imports
import { BrowserRouter as Router, Routes,
  Route, } from 'react-router-dom'
// Local Imports
import './App.css'
import {Footer, Header }from './components'
import {HomePage, AboutPage, ListingsPage, ErrorPage, SingleListingPage, ComingSoon, NewListingPage, Login, Register} from './pages'




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
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
