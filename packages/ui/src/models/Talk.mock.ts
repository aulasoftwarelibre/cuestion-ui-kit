import faker from "faker";

import Talk from "./Talk";

function createTalk(id: string, title: string, room: string, startsAt: Date, topics: string[]): Talk {
  faker.seed(Number(id));

  const endsAt = new Date(startsAt.getTime());
  endsAt.setMinutes(startsAt.getMinutes() + 50);

  return {
    avatar: faker.image.avatar(),
    description: faker.lorem.paragraph(),
    endsAt,
    id,
    room,
    speaker: faker.name.findName(),
    startsAt,
    title,
    topics
  };
}

export const talk: Talk = createTalk("1", "My awesome talk", "Room 1", new Date("2019/09/13 09:30:00 GMT"), [
  "Mobile",
  "Web"
]);

export const talks: Talk[] = [
  talk,
  createTalk("2", "My amazing talk", "Room 2", new Date("2019/09/13 09:30:00 GMT"), ["Frontend", "Agile"])
];
