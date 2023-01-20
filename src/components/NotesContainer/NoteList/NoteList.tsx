import React from 'react';

import { useAppSelector } from 'components/hooks/redux';
import Note from 'components/NotesContainer/NoteList/Note/Note';
import { selectAllNotes } from 'store/selectors';

const NoteList = () => {
  const notes = useAppSelector(selectAllNotes);
  return (
    <>
      {notes.map((note, index) => (
        <Note key={index} note={note} />
      ))}
    </>
  );
};

export default NoteList;
