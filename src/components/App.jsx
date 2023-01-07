import './App.css';
import Home from './Home';
import Recomendation from './Recomendation';
import Trending from './Trending';

function App() {
  return (
    <div className="App text-primary w-[390px] h-[3505px]">
      <nav></nav>
      <div className='tab-bar'></div>
      <section className='w-full h-auto overflow-hidden'>
        <Home />
        <Recomendation />
        <Trending />
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
