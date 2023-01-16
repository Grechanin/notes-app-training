type Author = {
  name: string;
  surname: string;
};

export type Comment = {
  id: string;
  author: Author;
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
