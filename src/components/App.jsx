import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <nav></nav>
      <div className='tab-bar'></div>
      <section className='w-full h-screen'>
        <Home />
        <div className='recomendations'></div>
        <div className='trending'></div>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
