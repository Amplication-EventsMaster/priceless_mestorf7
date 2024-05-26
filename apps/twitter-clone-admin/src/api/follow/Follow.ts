import { User } from "../user/User";

export type Follow = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  follower: string | null;
  following: string | null;
  user?: User | null;
};
