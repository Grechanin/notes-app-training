import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import { editNote, setNewNote } from 'api/api';
import { useAppDispatch, useAppSelector } from 'components/hooks/redux';
import { fetchNotes } from 'store/actions';
import { selectNoteById } from 'store/selectors';

import styles from './NoteForm.module.scss';

const NoteForm: React.FC<{ isEdit: boolean }> = ({ isEdit }) => {
  const dispatch = useAppDispatch();
  const { noteId } = useParams<{ noteId: string }>() || undefined;
  const note = useAppSelector((state) => selectNoteById(state, noteId));
  const navigate = useNavigate();
  const initialFormValues =
    isEdit && note !== undefined
      ? {
          id: `${noteId}`,
          name: `${note.name}`,
          content: `${note.content}`,
        }
      : {
          name: '',
          content: '',
        };

  const { values, handleChange, handleSubmit, setSubmitting, isSubmitting, dirty } = useFormik({
    initialValues: initialFormValues,

    onSubmit: (values) => {
      setTimeout(() => {
        isEdit ? editNote(values) : setNewNote(values);
        setSubmitting(false);
        dispatch(fetchNotes());
        navigate('/');
      }, 400);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.createNoteWrapper}>
        <div className={styles.createNoteWrapper_name}>
          <label htmlFor="name">Name </label>
          <input id="name" name="name" type="text" onChange={handleChange} value={values.name} />
        </div>

        <div className={styles.createNoteWrapper_content}>
          <textarea id="content" name="content" onChange={handleChange} value={values.content} />
        </div>

        <div className={styles.createNoteWrapper_button}>
          <Button variant="contained" type="submit" disabled={isSubmitting || !dirty}>
            {isEdit ? 'confirm changes' : 'Create'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NoteForm;
