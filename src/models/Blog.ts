export type BlogType = {
  id: string;
  name: string;
  description: string;
  websiteUrl: string;
  createdAt: string;
  banInfo: BanInfoType;
};

type BanInfoType = {
  isBanned: boolean;
  banDate: string | null;
};
