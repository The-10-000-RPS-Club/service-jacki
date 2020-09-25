/* eslint-disable no-console */
const faker = require('faker');
const db = require('./index.js');
const Question = require('./Question.js');

const generateRandomAnswer = () => ({
  id: faker.random.number(),
  body: faker.lorem.sentence(),
  helpful: {
    yes: Math.floor(Math.random() * 5),
    no: Math.floor(Math.random() * 5),
  },
});

const generateFakeQuestions = () => {
  const questions = [];

  for (let id = 1; id <= 800; id += 1) {
    const question = {
      question_id: faker.random({ min: 1, max: 800 }),
      product_id: faker.random.number({ min: 1, max: 100 }),
      user: faker.internet.userName(),
      question_body: faker.lorem.sentence(),
      answer: [],
    };
    const answers = Math.floor(Math.random() * 5) + 1;
    for (let j = 0; j < answers; j += 1) {
      question.answer.push(generateRandomAnswer());
    }
    questions.push(question);
  }
  return questions;
};

const basicQuestionData = generateFakeQuestions();

const insertSampleData = () => {
  Question.create(basicQuestionData)
    .then(() => db.close())
    .catch((err) => console.log(err));
};

insertSampleData();
