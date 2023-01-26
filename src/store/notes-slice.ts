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
    addNote(state, action) {
      action.payload ? (state.notes = action.payload) : (state.isLoading = false);
    },
    resetIsNotesFetching(state) {
      state.isLoading = false;
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
export const { setIsNotesFetching, addNote, resetIsNotesFetching, addComment } = notesSlice.actions;
