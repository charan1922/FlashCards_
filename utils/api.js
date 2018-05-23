import { FlatList } from "react-native-gesture-handler";

const initialData = {
  Geography: {
    title: "Geography",
    questions: [
      {
        question: "Is South Africa a country?",
        answer: "No, it is a region",
        correctAnswer: "false"
      },
      {
        question: "Which US state is next to California?",
        answer: "newyork",
        correctAnswer: "false"
      }
    ]
  },
  JavaScript: {
    title: "Javascript",
    questions: [
      {
        question: "what is a closure?",
        answer: "dfsdfasdfsdf",
        correctAnswer: "true"
      },
      {
        question: "What is a variable?",
        answer: "something that stores information",
        correctAnswer: "true"
      }
    ]
  }
};

export const getData = () => {
  return initialData;
};

export const getDecks = () => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => {
    if (results == null) {
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, initialData);
      return initialData;
    } else {
      return JSON.parse(results);
    }
  });
};

export const saveDeckTitle = title => {
  return AsyncStorage.getItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({
      [title]: { 
        title: title,
        questions: []
      }
    })
  );
};
