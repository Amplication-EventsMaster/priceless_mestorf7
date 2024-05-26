import { FollowerCreateNestedManyWithoutFollowersInput } from "./FollowerCreateNestedManyWithoutFollowersInput";
import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";

export type FollowerCreateInput = {
  followed?: string | null;
  followers?: FollowerCreateNestedManyWithoutFollowersInput;
  follower?: FollowerWhereUniqueInput | null;
};
