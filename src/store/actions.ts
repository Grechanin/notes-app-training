import { v4 } from 'uuid';

import { addNoteToLS, editNoteInLS, getNotes, removeNoteFromLS } from 'api/api';
import {
  addNote,
  deleteNoteInState,
  editNoteInState,
  resetIsNotesFetching,
  setIsNotesFetching,
  setNotes,
} from 'store/notes-slice';
import { AppDispatch } from 'store/store';

export const setNewNote = (values: any) => async (dispatch: AppDispatch) => {
  dispatch(setIsNotesFetching());
  const newNote = {
    name: values.name,
    content: values.content,
    comments: [],
    id: v4(),
  };
  const note = addNoteToLS(newNote);
  dispatch(addNote(note));
  dispatch(resetIsNotesFetching());
};

export const removeNote = (values: any) => async (dispatch: AppDispatch) => {
  const noteId = removeNoteFromLS(values);
  dispatch(deleteNoteInState(noteId));
};

export const editNote = (values: any) => async (dispatch: AppDispatch) => {
  let notes = getNotes();
  let UpdatingNote = notes.find((items: any) => items.id === values.id);
  UpdatingNote = {
    name: values.name,
    content: values.content,
    comments: UpdatingNote.comments,
    id: UpdatingNote.id,
  };
  notes = notes.filter((item: any) => item.id !== values.id);
  const noteEdited = editNoteInLS(notes, UpdatingNote);
  dispatch(editNoteInState(noteEdited));
};

export const fetchNotes = () => async (dispatch: AppDispatch) => {
  const notes = getNotes();
  dispatch(setIsNotesFetching());
  dispatch(setNotes(notes));
  dispatch(resetIsNotesFetching());
};
