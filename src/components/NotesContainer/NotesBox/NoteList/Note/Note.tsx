import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteNote } from '../../../../../redux/notes-slice';
import styles from './Note.module.scss';
import { NoteProps } from './Note.types';

const Note: React.FC<NoteProps> = ({ note }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.noteContainer}>
      <div className={styles.delete}>
        <IconButton aria-label="delete" color="warning" onClick={() => dispatch(deleteNote(note.id))}>
          <DeleteIcon />
        </IconButton>
      </div>

      <Link className={styles.link} to={'/' + note.id}>
        <div className={styles.note}>
          <span>{note.name}</span>
        </div>
      </Link>
    </div>
  );
};

export default Note;
