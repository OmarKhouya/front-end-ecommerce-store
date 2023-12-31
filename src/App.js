
import Header from './Components/Header'
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import Filter from './Components/Main'
import Main from './Components'
import Product from './Components/Products'
import NotFoundPage from './Components/Pages/notFoundPage'
import Cart from './Components/Cart'
import About from './Components/Pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <div className='mx-2'>
        <Header />
        <Nav/>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/Home/:category" element={<Filter />}/>
            <Route path="/Home/:category/:identify" element={<Product />}/>
            <Route path="/:category/:identify" element={<Product />}/>
            <Route path="/Cart" element={<Cart />}/>
            <Route path="/About" element={<About />}/>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        <Footer />
      </div>
      
    </BrowserRouter>
  )
}
