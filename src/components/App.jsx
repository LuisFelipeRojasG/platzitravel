import './App.css';
import Home from './Home';
import Recomendation from './Recomendation';

function App() {
  return (
    <div className="App">
      <nav></nav>
      <div className='tab-bar'></div>
      <section className='w-full h-screen'>
        <Home />
        <Recomendation />
        <div className='trending'></div>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
