export const ADD_CHARACTER = 'ADD_CHARACTER';

export function addCharacter(id) {
  const action = {
    type: ADD_CHARACTER,
    id,
  };
  return action;
}
