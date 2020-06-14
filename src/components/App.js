import React from 'react';
import CharacterList from './CharacterList';
import '../styles/index.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Super SQUAD</h1>
        <CharacterList />
      </div>
    );
  }
}

export default App;
