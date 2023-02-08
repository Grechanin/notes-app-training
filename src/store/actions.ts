import { addNoteToLS, getNotes, removeNoteFromLS } from 'api/localStorage';
import { addNote, deleteNoteInState, resetIsNotesFetching, setIsNotesFetching, setNotes } from 'store/notes-slice';
import { Note } from 'store/notes-slice.types';
import { AppDispatch } from 'store/store';

export const fetchNotes = () => async (dispatch: AppDispatch) => {
  const notes = getNotes();
  dispatch(setIsNotesFetching());
  dispatch(setNotes(notes));
  dispatch(resetIsNotesFetching());
};

export const setNewNote = (values: Note) => async (dispatch: AppDispatch) => {
  dispatch(setIsNotesFetching());
  const note = addNoteToLS(values);
  if (note) {
    dispatch(addNote(note));
  }
  dispatch(resetIsNotesFetching());
};

export const removeNote = (values: string) => async (dispatch: AppDispatch) => {
  const noteId = removeNoteFromLS(values);
  if (noteId) {
    dispatch(deleteNoteInState(values));
  }
};
