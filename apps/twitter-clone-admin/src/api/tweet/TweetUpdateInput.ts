import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  author?: string | null;
  content?: string | null;
  comments?: CommentUpdateManyWithoutTweetsInput;
};
