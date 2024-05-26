import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FollowCreateInput = {
  follower?: string | null;
  following?: string | null;
  user?: UserWhereUniqueInput | null;
};
