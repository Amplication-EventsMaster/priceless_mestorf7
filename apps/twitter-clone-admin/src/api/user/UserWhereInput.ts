import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { FollowListRelationFilter } from "../follow/FollowListRelationFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  profilePicture?: JsonFilter;
  bio?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  follows?: FollowListRelationFilter;
  likes?: LikeListRelationFilter;
};
