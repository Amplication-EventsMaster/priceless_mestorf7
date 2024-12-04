import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type TweetWhereInput = {
  id?: StringFilter;
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  comments?: CommentListRelationFilter;
};
