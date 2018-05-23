import { ADD_DECK } from "../constants/ActionTypes";

export const addDeck = (deck) => {
  return {
    type: ADD_DECK,
    deck
  };
};
