import { v4 } from 'uuid';

import { addNoteToLS, getNotes, removeNoteFromLS, setEditedNotesInLS } from 'api/localStorage';
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
  if (noteId === 'ok') {
    dispatch(deleteNoteInState(values));
  }
};

export const editNote = (values: Note) => async (dispatch: AppDispatch) => {
  let notes = getNotes();
  let UpdatingNote = notes.find((items: Note) => items.id === values.id);
  UpdatingNote = {
    name: values.name,
    content: values.content,
    comments: UpdatingNote.comments,
    id: UpdatingNote.id,
  };
  notes = [...notes.filter((item: Note) => item.id !== values.id), { ...UpdatingNote }];
  const notesUpdated = setEditedNotesInLS(notes);
  if (notesUpdated) {
    dispatch(setNotes(notesUpdated));
  }
};

type SetNewCommentProps = {
  noteId: string | undefined;
  content: string;
  name: string;
  surname: string;
};

export const setNewComment = (values: SetNewCommentProps) => async (dispatch: AppDispatch) => {
  console.log(values);
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
  notes = [...notes.filter((item: Note) => item.id !== values.noteId), { ...noteCommented }];
  const notesUpdated = setEditedNotesInLS(notes);
  if (notesUpdated) {
    dispatch(setNotes(notesUpdated));
  }
  dispatch(resetIsNotesFetching());
};
