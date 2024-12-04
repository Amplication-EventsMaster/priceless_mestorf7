import { User } from "../user/User";
import { Tweet } from "../tweet/Tweet";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  user?: User | null;
  tweet?: Tweet | null;
};
