import { useState, useEffect } from 'react';
import CardGrid from './components/CardGrid';

import data from './assets/data/cards.json';
import './assets/css/App.css';

const App = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    setCats(data)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="#"
        >
          Fabio
        </a>
      </header>
      <div>
        <CardGrid 
          cats={cats}
          setCats={setCats}
        />
      </div>
    </div>
  );
}

export default App;
