import React from 'react';

import CreateNewNote from './CreateNewNote/CreateNewNote';
import NoteList from './NoteList/NoteList';
import styles from './NotesBox.module.scss';

const NotesContainer = () => {
  return (
    <div className={styles.notesList}>
      <NoteList />

      <div className={styles.link}>
        <CreateNewNote />
      </div>
    </div>
  );
};

export default NotesContainer;
