import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  timestamp?: SortOrder;
  author?: SortOrder;
};
