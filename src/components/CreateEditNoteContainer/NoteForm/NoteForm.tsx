import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { addNote, editNote } from 'redux/notes-slice';
import { selectNoteById } from 'redux/selectors';

import { useAppSelector } from 'components/hooks/redux';

import styles from './NoteForm.module.scss';

const NoteForm: React.FC<{ isEdit: boolean }> = ({ isEdit }) => {
  const dispatch = useDispatch();
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
        isEdit ? dispatch(editNote(values)) : dispatch(addNote(values));
        setSubmitting(false);
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
