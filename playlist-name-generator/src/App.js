import './App.scss';
import React, { useState } from 'react';
import Generator from './components/Generator';
import PlaylistNames from './components/PlaylistNames';

var isGenerated = true;

const App = () => {
  const [generate, setGenerated] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        Playlist Name Generator
      </header>
      <Generator setGenerated={setGenerated} />

      {generate &&
        <div class="animate">
          <PlaylistNames />
        </div>
      }
    </div>
  );
}

export default App;
