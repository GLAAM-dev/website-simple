import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resources from './components/Resources';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200">
      <Navbar />
      <Hero />
      <Resources />
      <Footer />
    </div>
  )
}