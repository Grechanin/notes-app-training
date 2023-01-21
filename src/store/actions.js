import React from 'react';
import { v4 } from 'uuid';

import { notesFetching, notesFetchingSuccess } from 'store/notes-slice';
import { Note } from 'store/notes-slice.types';

export const setNewNote = (values) => {
  const items = JSON.parse(localStorage.getItem('notes'));
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

export const fetchNotes = () => async (dispatch) => {
  dispatch(notesFetching());
  dispatch(notesFetchingSuccess(JSON.parse(localStorage.getItem('notes'))));
};

export const removeNote = (values) => {
  let items = JSON.parse(localStorage.getItem('notes'));
  localStorage.setItem('notes', JSON.stringify(items.filter((item) => item.id !== values)));
};

export const editNote = (values) => {
  let notes = JSON.parse(localStorage.getItem('notes'));
  let UpdatingNote = notes.find((items) => items.id === values.id);
  UpdatingNote = {
    name: values.name,
    content: values.content,
    comments: UpdatingNote.comments,
    id: UpdatingNote.id,
  };
  notes = notes.filter((item) => item.id !== values.id);
  localStorage.setItem('notes', JSON.stringify([...notes, { ...UpdatingNote }]));
};
