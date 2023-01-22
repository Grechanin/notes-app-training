import { v4 } from 'uuid';

import { notesFetching, notesFetchingSuccess } from 'store/notes-slice';
import { AppDispatch } from 'store/store';

export const setNewNote = (values: any) => {
  const items = JSON.parse(localStorage.getItem('notes') || '');
  const note = {
    name: values.name,
    content: values.content,
    comments: [],
    id: v4(),
  };
  items
    ? localStorage.setItem('notes', JSON.stringify([...items, { ...note }]))
    : localStorage.setItem('notes', JSON.stringify([note]));
};

export const fetchNotes = () => async (dispatch: AppDispatch) => {
  dispatch(notesFetching());
  dispatch(notesFetchingSuccess(JSON.parse(localStorage.getItem('notes') || '')));
};

export const removeNote = (values: any) => {
  const items = JSON.parse(localStorage.getItem('notes') || '');
  localStorage.setItem('notes', JSON.stringify(items.filter((item: any) => item.id !== values)));
};

export const editNote = (values: any) => {
  let notes = JSON.parse(localStorage.getItem('notes') || '');
  let UpdatingNote = notes.find((items: any) => items.id === values.id);
  UpdatingNote = {
    name: values.name,
    content: values.content,
    comments: UpdatingNote.comments,
    id: UpdatingNote.id,
  };
  notes = notes.filter((item: any) => item.id !== values.id);
  localStorage.setItem('notes', JSON.stringify([...notes, { ...UpdatingNote }]));
};
