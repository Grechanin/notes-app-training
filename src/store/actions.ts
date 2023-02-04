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
  if (noteId) {
    dispatch(deleteNoteInState(values));
  }
};

export const editNote = (values: Note) => async (dispatch: AppDispatch) => {
  let notes = getNotes();
  notes = notes.map((note: Note) => {
    if (note.id === values.id) {
      note.name = values.name;
      note.content = values.content;
    }
    return note;
  });
  const notesUpdated = setEditedNotesInLS(notes);
  if (notesUpdated) {
    dispatch(setNotes(notesUpdated));
  }
};

type SetNewCommentProps = {
  id: string;
  noteId: string | undefined;
  content: string;
  name: string;
  surname: string;
};

export const setNewComment = (values: SetNewCommentProps) => async (dispatch: AppDispatch) => {
  dispatch(setIsNotesFetching());
  let notes = getNotes();
  const newComment = {
    id: values.id,
    content: values.content,
    author: {
      name: values.name.charAt(0).toUpperCase() + values.name.slice(1),
      surname: values.surname.charAt(0).toUpperCase() + values.surname.slice(1),
    },
    created_at: new Date().toLocaleString(),
  };
  notes = notes.map((note: Note) => {
    if (note.id === values.noteId) {
      note.comments.unshift(newComment);
    }
    return note;
  });
  const notesUpdated = setEditedNotesInLS(notes);
  if (notesUpdated) {
    dispatch(setNotes(notesUpdated));
  }
  dispatch(resetIsNotesFetching());
};
