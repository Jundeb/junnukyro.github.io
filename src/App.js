import './css/App.css';
import NavBar from './NavBar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Portfolio from './Portfolio';

const App = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Portfolio />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
