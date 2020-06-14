import React from 'react';
import CharacterList from './CharacterList';
import '../styles/index.css';
import HeroList from './HeroList';
import SquadStats from './SquadStats';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Super SQUAD</h1>
        <div className='row'>
          <div className='col-md-4'>
            <CharacterList />
          </div>
          <div className='col-md-4'>
            <HeroList />
          </div>
          <div className='col-md-4'>
            <SquadStats />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
