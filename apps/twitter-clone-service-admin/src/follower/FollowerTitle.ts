import { Follower as TFollower } from "../api/follower/Follower";

export const FOLLOWER_TITLE_FIELD = "followed";

export const FollowerTitle = (record: TFollower): string => {
  return record.followed?.toString() || String(record.id);
};
