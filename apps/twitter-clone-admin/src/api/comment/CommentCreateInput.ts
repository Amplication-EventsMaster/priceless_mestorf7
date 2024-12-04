import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
  tweet?: TweetWhereUniqueInput | null;
};
