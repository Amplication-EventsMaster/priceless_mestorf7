import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FollowWhereInput = {
  id?: StringFilter;
  follower?: StringNullableFilter;
  following?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
