import Topic from "./Topic";

function createTopic(label: string): Topic {
  return {
    label
  };
}

export const topics: Topic[] = [createTopic("Agile"), createTopic("Backend"), createTopic("Frontend")];
