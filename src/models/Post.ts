export type PostType = {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  blogId: string;
  blogName: string;
  createdAt: string;
  extendedLikesInfo: ExtendedLikesInfoType;
};

type ExtendedLikesInfoType = {
  newestLikes: [];
  likesCount: number;
  dislikesCount: number;
  myStatus: string;
};
