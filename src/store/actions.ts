import { notes } from 'api/api';
import { addNote, resetIsNotesFetching, setIsNotesFetching } from 'store/notes-slice';
import { AppDispatch } from 'store/store';

export const fetchNotes = () => async (dispatch: AppDispatch) => {
  dispatch(setIsNotesFetching());
  dispatch(addNote(notes));
  dispatch(resetIsNotesFetching());
};
