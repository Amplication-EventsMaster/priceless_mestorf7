import { Comment } from "../comment/Comment";

export type Tweet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  author: string | null;
  content: string | null;
  comments?: Array<Comment>;
};
