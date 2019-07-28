import faker from "faker";

import Question from "./Question";

function createQuestion(
  id: string,
  question: string,
  createdAt: Date,
  username: string,
  votes: number,
  isVoted: boolean
): Question {
  faker.seed(Number(id));

  const endsAt = new Date(createdAt.getTime());
  endsAt.setMinutes(createdAt.getMinutes() + 50);

  return {
    id,
    question,
    createdAt,
    username,
    votes,
    isVoted
  };
}

export const question: Question = createQuestion(
  "1",
  "¿Como te llamas?",
  new Date("2019/09/13 09:30:00 GMT"),
  "Javier Velasco",
  0,
  false
);

export const question2: Question = createQuestion(
  "2",
  "¿Cuantos años tienes?",
  new Date("2019/09/13 09:30:00 GMT"),
  "Miguel Angel",
  10,
  true
);
