import './css/App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

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
        <Footer />
      </footer>
    </div>
  );
}

export default App;
