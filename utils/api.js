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
