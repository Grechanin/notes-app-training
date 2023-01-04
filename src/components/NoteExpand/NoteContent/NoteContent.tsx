import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NoteContent.module.scss';
import { noteContentProps } from './NoteContent.types';

const NoteContent: React.FC<noteContentProps> = ({ name, content, id }) => {
  return (
    <div className={styles.noteContainer}>
      <div className={styles.editor}>
        <Link to={'/' + id + /edit/}>
          <span>edit</span>
        </Link>
      </div>

      <div className={styles.noteName}>
        <span>{name}</span>
      </div>

      <div className={styles.noteContent}>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default NoteContent;
