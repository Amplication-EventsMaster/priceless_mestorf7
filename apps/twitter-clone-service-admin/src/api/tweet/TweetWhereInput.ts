import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type TweetWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  likes?: LikeListRelationFilter;
  author?: StringNullableFilter;
};
