import 'bootstrap/dist/css/bootstrap.min.css';
import { Hero } from "./components/Hero/Hero"
import { ShortNav } from "./components/ShortNav/ShortNav"
import { Skills } from './components/Skills/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <ShortNav />
      <Hero />
      <Skills />


    </div>
  );
}

export default App;
