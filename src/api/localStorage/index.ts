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

export const removeNoteFromLS = (noteId: string) => {
  const notes = getNotes();
  try {
    localStorage.setItem('notes', JSON.stringify(notes.filter((item: Note) => item.id !== noteId)));
    return 'ok';
  } catch (e) {
    console.log(e);
  }
};

export const editeNoteById = (values: Note) => async () => {
  let notes = getNotes();
  notes = notes.map((note: Note) => {
    if (note.id === values.id) {
      note.name = values.name;
      note.content = values.content;
    }
    return note;
  });
  localStorage.setItem('notes', JSON.stringify(notes));
};

type SetNewCommentProps = {
  id: string;
  noteId: string | undefined;
  content: string;
  name: string;
  surname: string;
};

export const addCommentToNote = (notes: SetNewCommentProps) => async () => {
  localStorage.setItem('notes', JSON.stringify(notes));
};
