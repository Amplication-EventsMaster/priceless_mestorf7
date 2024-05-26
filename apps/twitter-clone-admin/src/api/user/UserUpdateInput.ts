import { InputJsonValue } from "../../types";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { FollowUpdateManyWithoutUsersInput } from "./FollowUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  profilePicture?: InputJsonValue;
  bio?: string | null;
  comments?: CommentUpdateManyWithoutUsersInput;
  follows?: FollowUpdateManyWithoutUsersInput;
  likes?: LikeUpdateManyWithoutUsersInput;
};
