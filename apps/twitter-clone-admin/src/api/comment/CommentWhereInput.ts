import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  tweet?: TweetWhereUniqueInput;
};
