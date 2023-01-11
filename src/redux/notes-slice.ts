import { createSlice } from '@reduxjs/toolkit';
import { Comment, Note } from 'redux/notes-slice.types';

const notesSlice = createSlice({
  name: 'notesPage',
  initialState: {
    notes: [
      {
        id: 1,
        name: 'shopping list',
        content: 'need buy milk',
        comments: [
          { id: 1, author: { name: 'John', surname: 'White' }, content: 'and buy meet', created_at: '21.12.2022' },
        ],
      },
      {
        id: 2,
        name: 'tasks for the day',
        content: 'meet with Katy in 21:00',
        comments: [
          { id: 1, author: { name: 'Katy', surname: 'Ling' }, content: 'come in 20:30', created_at: '24.12.2022' },
          {
            id: 2,
            author: { name: 'Katy', surname: 'Ling' },
            content: 'sorry, come in 20:00',
            created_at: '24.12.2022',
          },
        ],
      },
    ],
  },
  reducers: {
    addNote(state, action) {
      const newNote: Note = {
        id: state.notes.length + 1,
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
            id: note.comments.length + 1,
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
