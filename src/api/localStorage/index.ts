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
    return 'ok';
  } catch (e) {
    console.log(e);
  }
};

export const setEditedNotesInLS = (notes: Note[]) => {
  try {
    localStorage.setItem('notes', JSON.stringify(notes));
    return notes;
  } catch (e) {
    console.log(e);
  }
};
