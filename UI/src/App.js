import { useState, useEffect } from 'react';
import CardGrid from './components/CardGrid';

import data from './assets/data/cards.json';
import './assets/css/App.css';
import Thumbnail from './components/Thumbnail';

const App = () => {
  const [cats, setCats] = useState([]);
  const [thumbnail, setThumbnail] = useState();
  const [showThumbnail, setShowThumbnail] = useState();

  const handleKeyDown = (event) => {
    console.log(event)
    if(event.keyCode === 27) {
        setShowThumbnail(false);
    }
  }

  useEffect(() => {
    setCats(data)
  }, [])

  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex="0">
      <Thumbnail 
        item={thumbnail} 
        showThumbnail={showThumbnail} 
        setShowThumbnail={setShowThumbnail} />

      <header className="App-header">
        <a
          className="App-link"
          href="#"
        >
          Cats
        </a>
      </header>
      <div>
        <CardGrid 
          cats={cats}
          setCats={setCats}
          setThumbnail={setThumbnail}
          setShowThumbnail={setShowThumbnail}
        />
      </div>
    </div>
  );
}

export default App;
