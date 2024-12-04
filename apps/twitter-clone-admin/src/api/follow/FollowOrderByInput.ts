import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  follower?: SortOrder;
  following?: SortOrder;
  userId?: SortOrder;
};
