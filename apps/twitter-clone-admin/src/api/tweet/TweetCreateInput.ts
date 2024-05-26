import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  author?: string | null;
  content?: string | null;
  comments?: CommentCreateNestedManyWithoutTweetsInput;
};
