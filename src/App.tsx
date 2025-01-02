import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import { CartProvider } from './context/cartContext'
import React from 'react'
const App: React.FC = () => {

  return (
    <CartProvider>
      <main className="min-h-screen hero-pattern">
        <Header />
        <Hero />
        <About />
        <Menu />
        <Contact />
        <Footer/>
    </main>
   </CartProvider>
  )
}

export default App
