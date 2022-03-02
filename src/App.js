import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"; 

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './paginas/Home';
import { Posiciones } from './paginas/Posiciones';
import { Faqs } from './paginas/Faqs';



function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <main className='mx-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Faqs" element={<Faqs />} />
          <Route path="Posiciones" element={<Posiciones />} />
        </Routes> 
      </main>
        
      <Footer></Footer>
    </BrowserRouter>
      
    </>
  );
}

export default App;
