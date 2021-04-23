import './App.scss';
import React, { useState } from 'react';
import Generator from './components/Generator';
import PlaylistNames from './components/PlaylistNames';

const App = () => {
  
  const [keywords, setKeywords] = useState("");
  const [generate, setGenerated] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        Playlist Name Generator
      </header>
      <Generator setGenerated={setGenerated} setKeywords={setKeywords}/>

      {generate &&
        <div class="animate">
          <PlaylistNames keywords={keywords}/>
        </div>
      }
    </div>
  );
}

export default App;
