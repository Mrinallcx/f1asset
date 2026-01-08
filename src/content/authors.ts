export interface AuthorMeta {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatarInitials: string;
}

export const authors: AuthorMeta[] = [
  {
    id: "research-desk",
    slug: "research-desk",
    name: "Research Desk",
    role: "Collective byline",
    bio:
      "The Research Desk is a collective pseudonym for the writers, analysts, and editors contributing to this journal. Articles published under this byline reflect a synthesis of perspectives from market structure, protocol design, and long-horizon investing.",
    avatarInitials: "RD",
  },
];
