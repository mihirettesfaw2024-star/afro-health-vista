import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Approach from './components/Approach';
import Insights from './components/Insights';
import Contact from './components/Contact';
import { Toaster } from 'sonner';

function App() {
  useEffect(() => {
    // Inject Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Inject Custom Font Styles
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        font-family: 'Open Sans', sans-serif !important;
      }
      h1, h2, h3, h4, h5, h6, .font-heading {
        font-family: 'Montserrat', sans-serif !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Open_Sans'] selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Approach />
        <Insights />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-['Montserrat'] text-xl font-bold mb-4">Afro Public Health Consultancy</h3>
            <p className="text-slate-400 font-['Open_Sans']">Advancing healthcare through data-driven research and specialized training.</p>
          </div>
          <div>
            <h4 className="font-['Montserrat'] font-semibold mb-4 text-white">Contact</h4>
            <p className="text-slate-400 font-['Open_Sans']">Email: info@afropublichealth.com</p>
            <p className="text-slate-400 font-['Open_Sans']">Location: Addis Ababa, Ethiopia</p>
          </div>
          <div>
            <h4 className="font-['Montserrat'] font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 font-['Open_Sans'] text-sm">
          © {new Date().getFullYear()} Afro Public Health Consultancy. All rights reserved.
        </div>
      </footer>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;