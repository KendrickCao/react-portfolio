import { Hero } from "./components/Hero/Hero"
import { ShortNav } from "./components/ShortNav/ShortNav"
import { Skills } from './components/Skills/Skills';
import { Portfolio } from './components/Portfolio/Portfolio';
import { About } from './components/About/About';
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <ShortNav />
      <Hero />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
