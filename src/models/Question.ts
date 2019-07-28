export interface Question {
  id: string;
  question: string;
  createdAt: Date;
  username: string;
  votes: number;
  isVoted: boolean;
}

export default Question;
