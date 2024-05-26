import { InputJsonValue } from "../../types";
import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { FollowCreateNestedManyWithoutUsersInput } from "./FollowCreateNestedManyWithoutUsersInput";
import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  profilePicture?: InputJsonValue;
  bio?: string | null;
  comments?: CommentCreateNestedManyWithoutUsersInput;
  follows?: FollowCreateNestedManyWithoutUsersInput;
  likes?: LikeCreateNestedManyWithoutUsersInput;
};
