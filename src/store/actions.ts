import { v4 } from 'uuid';

import { addCommentToLS, addNoteToLS, editNoteInLS, getNotes, removeNoteFromLS } from 'api/localStorage';
import {
  addComment,
  addNote,
  deleteNoteInState,
  editNoteInState,
  resetIsNotesFetching,
  setIsNotesFetching,
  setNotes,
} from 'store/notes-slice';
import { Note } from 'store/notes-slice.types';
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

export const removeNote = (values: string) => async (dispatch: AppDispatch) => {
  const noteId = removeNoteFromLS(values);
  if (noteId === 'ok') {
    dispatch(deleteNoteInState(values));
  }
};

export const editNote = (values: any) => async (dispatch: AppDispatch) => {
  let notes = getNotes();
  let UpdatingNote = notes.find((items: Note) => items.id === values.id);
  UpdatingNote = {
    name: values.name,
    content: values.content,
    comments: UpdatingNote.comments,
    id: UpdatingNote.id,
  };
  notes = [...notes.filter((item: Note) => item.id !== values.id), { ...UpdatingNote }];
  const isEdited = editNoteInLS(notes);
  if (isEdited) {
    dispatch(editNoteInState(UpdatingNote));
  }
};

export const fetchNotes = () => async (dispatch: AppDispatch) => {
  const notes = getNotes();
  dispatch(setIsNotesFetching());
  dispatch(setNotes(notes));
  dispatch(resetIsNotesFetching());
};

export const setNewComment = (values: any) => async (dispatch: AppDispatch) => {
  dispatch(setIsNotesFetching());
  let notes = getNotes();
  let noteCommented = notes.find((item: Note) => item.id === values.noteId);
  const newComment = {
    id: v4(),
    content: values.content,
    author: {
      name: values.name.charAt(0).toUpperCase() + values.name.slice(1),
      surname: values.surname.charAt(0).toUpperCase() + values.surname.slice(1),
    },
    created_at: new Date().toLocaleString(),
  };
  noteCommented = {
    name: noteCommented.name,
    content: noteCommented.content,
    id: noteCommented.id,
    comments: [{ ...newComment }, ...noteCommented.comments],
  };
  notes = notes.filter((item: Note) => item.id !== values.noteId);
  const noteUpdated = addCommentToLS(notes, noteCommented);
  dispatch(addComment(noteUpdated));
  dispatch(resetIsNotesFetching());
};
