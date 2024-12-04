import { User } from "../user/User";

export type Like = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
};
