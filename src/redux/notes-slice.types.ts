export type Comment = {
  id: string;
  author: { name: string; surname: string };
  content: string;
  created_at: string;
};

export type Note = {
  id: string;
  name: string;
  content: string;
  comments: Comment[];
};

export interface NotesState {
  notes: Note[];
}
