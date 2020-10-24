const sampleData = [
  {
    question_id: '058',
    product_id: '017',
    created_at: 'Fri Sep 22 2017 20:43:04',
    user: 'BobbyB',
    question_body: 'Does this product fit both men and women?',
    answers: [
      {
        id: '023',
        created_at: 'Fri Sep 22 2017 20:43:04',
        body: 'Yes it does.',
        user: 'REI Helper Sally',
        helpful: {
          yes: 0,
          no: 1,
        },
      },
    ],
  },
  {
    question_id: '009',
    product_id: '043',
    user: 'Rachel098',
    question_body: 'How durable is this?',
    answers: [
      {
        id: '023',
        body: 'It can stand up to all your favortie activities.',
        user: 'REI Helper Jim',
        helpful: {
          yes: 2,
          no: 0,
        },
      },
      {
        id: '079',
        body: 'It tore after one week.',
        user: 'CaliBro43',
        helpful: {
          yes: 1,
          no: 3,
        },
      },
    ],
  },
];

module.exports = sampleData;
