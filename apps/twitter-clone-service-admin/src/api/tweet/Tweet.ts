import { Like } from "../like/Like";

export type Tweet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  timestamp: Date | null;
  likes?: Array<Like>;
  author: string | null;
};
