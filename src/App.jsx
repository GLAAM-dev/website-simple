import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import Events from './pages/Events';
import Areas from './pages/Areas';
import AreaTemplate from './pages/AreaTemplate';



export default function App() {
  return (
    <Router>
      <div className="bg-slate-950 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/:slug" element={<AreaTemplate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}