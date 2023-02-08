import { resetIsNotesFetching, setIsNotesFetching, setNotes } from 'store/notes-slice';
import { Note } from 'store/notes-slice.types';
import { AppDispatch } from 'store/store';

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

export const editeNoteById = (values: Note) => async (dispatch: AppDispatch) => {
  dispatch(setIsNotesFetching());
  let notes = getNotes();
  notes = notes.map((note: Note) => {
    if (note.id === values.id) {
      note.name = values.name;
      note.content = values.content;
    }
    return note;
  });
  localStorage.setItem('notes', JSON.stringify(notes));
  dispatch(setNotes(notes));
  dispatch(resetIsNotesFetching());
};

type SetNewCommentProps = {
  id: string;
  noteId: string | undefined;
  content: string;
  name: string;
  surname: string;
};

export const addCommentToNote = (values: SetNewCommentProps) => async (dispatch: AppDispatch) => {
  dispatch(setIsNotesFetching());
  let notes = getNotes();
  notes = notes.map((note: Note) => {
    if (note.id === values.noteId) {
      note.comments.unshift({
        id: values.id,
        content: values.content,
        author: {
          name: values.name.charAt(0).toUpperCase() + values.name.slice(1),
          surname: values.surname.charAt(0).toUpperCase() + values.surname.slice(1),
        },
        created_at: new Date().toLocaleString(),
      });
    }
    return note;
  });
  localStorage.setItem('notes', JSON.stringify(notes));
  dispatch(setNotes(notes));
  dispatch(resetIsNotesFetching());
};
