import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { History } from './components/History';
import { Products } from './components/Products';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Hero />
        <History />
        <Products />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
