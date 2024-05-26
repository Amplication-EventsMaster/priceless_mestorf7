import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
  tweet?: TweetWhereUniqueInput | null;
};
