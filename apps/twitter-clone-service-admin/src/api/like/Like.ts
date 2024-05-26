import { Tweet } from "../tweet/Tweet";
import { User } from "../user/User";

export type Like = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tweet?: Tweet | null;
  user?: User | null;
};
