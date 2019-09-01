const faker = require("faker");
const moment = require("moment");

faker.seed(2);

module.exports = () => {
  const data = {
    sessions: [
      {
        id: "826cda8e-895f-419c-b9ed-4567368031ee",
        code: "1234",
        title: "Cuestion Conference",
        logo: "/static/img/logo.png",
      },
    ],
    talks: [],
    questions: [],
    voted_questions: [],
  };

  const startsAt = moment().subtract(30, "minutes");
  const endsAt = moment(startsAt).add(10, "minutes");
  const topics = [
    "Web",
    "Mobile",
    "Frontend",
    "Devops",
    "Backend",
    "Design",
    "Testing",
  ];

  for (let i = 0; i < 10; i++) {
    const room = `Track ${(i % 2) + 1}`;
    const color = i % 2 === 0 ? "blue" : "red";
    const talkId = faker.random.uuid();

    data.talks.push({
      id: talkId,
      session: "1234",
      avatar: faker.image.avatar(),
      description: faker.lorem.paragraph(),
      room: room,
      title: faker.lorem.sentence(),
      startsAt: startsAt.toISOString(),
      endsAt: endsAt.toISOString(),
      speaker: faker.name.findName(),
      topics: faker.helpers.shuffle(topics).slice(0, 2),
      color: color,
    });

    for (let j = 0; j < i % 4; j++) {
      const question = {
        id: faker.random.uuid(),
        talk: talkId,
        question: faker.lorem.sentence(),
        username: faker.internet.userName(),
        createdAt: faker.date.recent().toISOString(),
        votes: faker.random.number({ min: 0, max: 15 }),
        isVoted: false,
      };
      data.questions.push(question);

      if (j % 2 === 0 && question.votes > 0) {
        data.voted_questions.push(question.id);
      }
    }

    if (i % 2 === 1) {
      startsAt.add(15, "minutes");
      endsAt.add(15, "minutes");
    }
  }

  return data;
};
