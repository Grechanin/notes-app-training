export type Comment = {
  id: number;
  author: { name: string; surname: string };
  content: string;
  created_at: string;
};

export type Note = {
  id: number;
  name: string;
  content: string;
  comments: Comment[];
};
