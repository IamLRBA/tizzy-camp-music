import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'
import AppRoutes from './routes'
import './App.css';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <main className="main-content">
        <AppRoutes />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App