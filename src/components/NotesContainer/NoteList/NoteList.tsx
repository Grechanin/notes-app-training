import React from 'react';
import { selectAllNotes } from 'redux/selectors';

import { useAppSelector } from 'components/hooks/redux';
import Note from 'components/NotesContainer/NoteList/Note/Note';

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
