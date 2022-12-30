import React from 'react';

import { NotesListProps } from '../NotesBox.types';
import Note from './Note/Note';

const NoteList: React.FC<NotesListProps> = ({ notes }) => (
  <>
    {notes.map((note, index) => (
      <Note key={index} note={note} />
    ))}
  </>
);

export default NoteList;
