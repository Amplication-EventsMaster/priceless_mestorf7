import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  content?: string | null;
  timestamp?: Date | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  author?: string | null;
};
