import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from 'components/hooks/redux';
import styles from 'components/NotesContainer/NoteList/Note/Note.module.scss';
import { NoteProps } from 'components/NotesContainer/NoteList/Note/Note.types';
import { fetchNotes, removeNote } from 'store/actions';

const Note: React.FC<NoteProps> = ({ note }) => {
  const dispatch = useAppDispatch();
  const onSubmit = (values: string) => {
    removeNote(values);
    dispatch(fetchNotes());
  };

  return (
    <div className={styles.noteContainer}>
      <div className={styles.delete}>
        <IconButton aria-label="delete" color="warning" onClick={() => onSubmit(note.id)}>
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
