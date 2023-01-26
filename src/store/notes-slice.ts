import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import { Comment, NotesState } from 'store/notes-slice.types';

const initialState: NotesState = {
  notes: [],
  isLoading: false,
};

const notesSlice = createSlice({
  name: 'notesPage',
  initialState,
  reducers: {
    setIsNotesFetching(state) {
      state.isLoading = true;
    },
    setNotes(state, action) {
      action.payload ? (state.notes = action.payload) : (state.isLoading = false);
    },
    addNote(state, action) {
      state.notes = [...state.notes, action.payload];
    },
    deleteNoteInState(state, action) {
      state.notes = state.notes.filter((item) => item.id !== action.payload);
    },
    resetIsNotesFetching(state) {
      state.isLoading = false;
    },
    editNoteInState(state, action) {
      state.notes = state.notes.filter((item) => item.id !== action.payload.id);
      state.notes = [...state.notes, action.payload];
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
export const {
  setIsNotesFetching,
  editNoteInState,
  deleteNoteInState,
  addNote,
  setNotes,
  resetIsNotesFetching,
  addComment,
} = notesSlice.actions;
