import Home from './Home';
import Recomendation from './Recomendation';
import Trending from './Trending';
import Faq from './Faq';
import About from './About';
import TabBar from './TabBar';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App text-primary w-[390px] h-[3620px] lg:w-full lg:h-[3515px] dark:bg-gray-900 dark:text-white">
      <NavBar />
      <section className='w-full h-auto overflow-hidden lg:mt-[70px]'>
        <Home />
        <Recomendation />
        <Trending />
        <div className='lg:grid lg:grid-cols-2'>
          <Faq />
          <About />
        </div>
      </section>
      <TabBar />
    </div>
  );
}

export default App;
