export interface Talk {
  avatar?: string;
  description: string;
  id: string;
  room: string;
  title: string;
  startsAt: Date;
  endsAt: Date;
  speaker: string;
  topics: string[];
}

export default Talk;
