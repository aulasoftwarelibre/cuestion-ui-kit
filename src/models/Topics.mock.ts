import Topics from "./Topics";

function createTopics(topics: string[]): Topics {
  return {
    topics
  };
}

export const topics: Topics = createTopics([
  "Agile",
  "Frontend",
  "Backend",
]);