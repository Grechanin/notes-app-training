import React from 'react';

import Preloader from 'components/Common/Preloader/Preloader';
import { useAppSelector } from 'components/hooks/redux';
import Note from 'components/NotesContainer/NoteList/Note/Note';
import { getIsFetching, selectAllNotes } from 'store/selectors';

const NoteList = () => {
  const notes = useAppSelector(selectAllNotes);
  const isLoading = useAppSelector(getIsFetching);
  return <>{isLoading ? <Preloader /> : notes.map((note, index) => <Note key={index} note={note} />)}</>;
};

export default NoteList;
