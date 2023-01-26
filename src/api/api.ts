import { v4 } from 'uuid';

export let notes = JSON.parse(localStorage.getItem('notes') || '');

export const setNewNote = (values: any) => {
  const note = {
    name: values.name,
    content: values.content,
    comments: [],
    id: v4(),
  };
  notes
    ? localStorage.setItem('notes', JSON.stringify([...notes, { ...note }]))
    : localStorage.setItem('notes', JSON.stringify([note]));
  notes = JSON.parse(localStorage.getItem('notes') || '');
};

export const removeNote = (values: any) => {
  localStorage.setItem('notes', JSON.stringify(notes.filter((item: any) => item.id !== values)));
  notes = JSON.parse(localStorage.getItem('notes') || '');
};

export const editNote = (values: any) => {
  let UpdatingNote = notes.find((items: any) => items.id === values.id);
  UpdatingNote = {
    name: values.name,
    content: values.content,
    comments: UpdatingNote.comments,
    id: UpdatingNote.id,
  };
  notes = notes.filter((item: any) => item.id !== values.id);
  localStorage.setItem('notes', JSON.stringify([...notes, { ...UpdatingNote }]));
  notes = JSON.parse(localStorage.getItem('notes') || '');
};
