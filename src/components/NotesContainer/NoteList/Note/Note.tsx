import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from 'components/hooks/redux';
import styles from 'components/NotesContainer/NoteList/Note/Note.module.scss';
import { NoteProps } from 'components/NotesContainer/NoteList/Note/Note.types';
import { removeNote } from 'store/actions';

const Note: React.FC<NoteProps> = ({ note }) => {
  const dispatch = useAppDispatch();
  const removeNoteHandler = (values: string) => {
    dispatch(removeNote(values));
  };

  return (
    <div className={styles.noteContainer}>
      <div className={styles.delete}>
        <IconButton aria-label="delete" color="warning" onClick={() => removeNoteHandler(note.id)}>
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
