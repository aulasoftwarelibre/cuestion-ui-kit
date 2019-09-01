import faker from "faker";

import Question from "./Question";

export function createQuestion(
  id: string,
  votes: number,
  isVoted: boolean,
): Question {
  faker.seed(Number(id));

  const createdAt = new Date("2019/09/13 09:30:00 GMT");
  const endsAt = new Date(createdAt.getTime());
  endsAt.setMinutes(createdAt.getMinutes() + 50);

  return {
    id,
    talk: faker.random.uuid(),
    question: faker.lorem.sentences(),
    createdAt,
    username: faker.name.findName(),
    votes,
    isVoted,
  };
}

export const question: Question = createQuestion("1", 0, false);

export const question2: Question = createQuestion("2", 10, true);

export const questions: Question[] = [
  question,
  question2,
  createQuestion("3", 5, true),
];
