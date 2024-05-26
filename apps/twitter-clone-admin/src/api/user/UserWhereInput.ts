import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { FollowListRelationFilter } from "../follow/FollowListRelationFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  profilePicture?: StringNullableFilter;
  bio?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  follows?: FollowListRelationFilter;
  likes?: LikeListRelationFilter;
};
