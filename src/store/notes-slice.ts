import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import { Comment, Note, NotesState } from 'store/notes-slice.types';

const initialState: NotesState = {
  notes: [],
  isLoading: false,
};

const notesSlice = createSlice({
  name: 'notesPage',
  initialState,
  reducers: {
    notesFetching(state) {
      state.isLoading = true;
    },
    notesFetchingSuccess(state, action) {
      action.payload ? (state.notes = action.payload) : (state.isLoading = true);
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
export const { notesFetching, notesFetchingSuccess, addComment } = notesSlice.actions;
