export type Follower = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  followed: string | null;
  followers?: Array<Follower>;
  follower?: Follower | null;
};
