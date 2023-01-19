import { createSlice } from '@reduxjs/toolkit';
import { Comment, Note, NotesState } from 'redux/notes-slice.types';
import { v4 } from 'uuid';

const initialState: NotesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notesPage',
  initialState,
  reducers: {
    addNote(state, action) {
      const newNote: Note = {
        id: v4(),
        name: action.payload.name,
        content: action.payload.content,
        comments: [],
      };
      state.notes = [...state.notes, newNote];
    },
    editNote(state, action) {
      state.notes = state.notes.map((note) => {
        if (note.id == action.payload.id) {
          return {
            name: action.payload.name,
            content: action.payload.content,
            id: note.id,
            comments: note.comments,
          };
        }
        return note;
      });
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter((item) => item.id !== action.payload);
    },
    addComment(state, action) {
      state.notes.forEach((note) => {
        if (note.id == action.payload.commentId) {
          const newComment: Comment = {
            id: v4(),
            content: action.payload.content,
            author: {
              name: action.payload.name.charAt(0).toUpperCase() + action.payload.name.slice(1),
              surname: action.payload.surname.charAt(0).toUpperCase() + action.payload.surname.slice(1),
            },
            created_at: new Date().toLocaleString(),
          };
          note.comments = [newComment, ...note.comments];
        }
        return note;
      });
    },
  },
});

export default notesSlice.reducer;
export const { addComment, editNote, addNote, deleteNote } = notesSlice.actions;
