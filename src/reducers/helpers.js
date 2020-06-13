import characters_json from '../data/characters.json';

function createCharacter(id) {
  const character = characters_json.find((character) => character.id === id);
  return character;
}

export default createCharacter;
