import { JsonValue } from "type-fest";
import { Comment } from "../comment/Comment";
import { Follow } from "../follow/Follow";
import { Like } from "../like/Like";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  profilePicture: JsonValue;
  bio: string | null;
  comments?: Array<Comment>;
  follows?: Array<Follow>;
  likes?: Array<Like>;
};
