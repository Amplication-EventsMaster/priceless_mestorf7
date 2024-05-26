import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  content?: string | null;
  timestamp?: Date | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  author?: string | null;
};
