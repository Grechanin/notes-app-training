import { Note } from 'store/notes-slice.types';

export const getNotes = () => {
  try {
    return JSON.parse(localStorage.getItem('notes') || '');
  } catch (e) {
    console.log(e);
  }
};

export const addNoteToLS = (newNote: Note) => {
  const notes = getNotes();
  try {
    notes
      ? localStorage.setItem('notes', JSON.stringify([...notes, { ...newNote }]))
      : localStorage.setItem('notes', JSON.stringify([newNote]));
    return newNote;
  } catch (e) {
    console.log(e);
  }
};

export const removeNoteFromLS = (values: string) => {
  const notes = getNotes();
  try {
    localStorage.setItem('notes', JSON.stringify(notes.filter((item: Note) => item.id !== values)));
    return values;
  } catch (e) {
    console.log(e);
  }
};

export const editNoteInLS = (notes: any, UpdatingNote: Note) => {
  console.log(notes);
  try {
    localStorage.setItem('notes', JSON.stringify([...notes, { ...UpdatingNote }]));
    return UpdatingNote;
  } catch (e) {
    console.log(e);
  }
};

export const addCommentToLS = (notes: any, noteCommented: Note) => {
  try {
    localStorage.setItem('notes', JSON.stringify([...notes, { ...noteCommented }]));
    return noteCommented;
  } catch (e) {
    console.log(e);
  }
};
