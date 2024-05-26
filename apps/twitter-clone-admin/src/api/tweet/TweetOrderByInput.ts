import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  author?: SortOrder;
  content?: SortOrder;
};
