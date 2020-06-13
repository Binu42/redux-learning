import { ADD_CHARACTER } from '../actions';
import createCharacter from './helpers';

function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      const characters = [...state, createCharacter(action.id)];
      return characters;
    default:
      return state;
  }
}

export default heroes;
