import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FollowUpdateInput = {
  follower?: string | null;
  following?: string | null;
  user?: UserWhereUniqueInput | null;
};
