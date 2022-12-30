import React from 'react';

import CreateNewNote from './CreateNewNote/CreateNewNote';
import Note from './NoteList/Note/Note';
import NoteList from './NoteList/NoteList';
import styles from './NotesBox.module.scss';
import { NotesListProps } from './NotesBox.types';

const NotesBox: React.FC<NotesListProps> = ({ notes }) => {
  return (
    <div className={styles.notesList}>
      <NoteList notes={notes} />

      <div className={styles.link}>
        <CreateNewNote />
      </div>
    </div>
  );
};

export default NotesBox;
