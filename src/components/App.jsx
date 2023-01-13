import './App.css';
import Home from './Home';
import Recomendation from './Recomendation';
import Trending from './Trending';
import Faq from './Faq';
import About from './About';
import TabBar from './TabBar';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App text-primary w-[390px] h-[3420px] lg:w-full">
      <NavBar />
      <section className='w-full h-auto overflow-hidden'>
        <Home />
        <Recomendation />
        <Trending />
        <Faq />
        <About />
      </section>
      <TabBar />
    </div>
  );
}

export default App;
