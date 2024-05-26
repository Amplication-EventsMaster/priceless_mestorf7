import { FollowerUpdateManyWithoutFollowersInput } from "./FollowerUpdateManyWithoutFollowersInput";
import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";

export type FollowerUpdateInput = {
  followed?: string | null;
  followers?: FollowerUpdateManyWithoutFollowersInput;
  follower?: FollowerWhereUniqueInput | null;
};
