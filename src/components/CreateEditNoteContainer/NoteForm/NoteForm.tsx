import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import { addNote, editNote } from '../../../redux/notes-slice';
import { AppStateType } from '../../../redux/redux-store';
import styles from './NoteForm.module.scss';

const NoteForm: React.FC<{ isEdit: boolean }> = ({ isEdit }) => {
  const dispatch = useDispatch();
  const { noteId } = useParams<{ noteId: string }>() || undefined;
  const note = useSelector((state: AppStateType) =>
    state.notesPage.notes.find((note) => noteId && note.id === +noteId)
  );
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
      <div className={styles.createNoteBox}>
        <div className={styles.createNoteBox_name}>
          <label htmlFor="name">Name </label>
          <input id="name" name="name" type="text" onChange={handleChange} value={values.name} />
        </div>

        <div className={styles.createNoteBox_content}>
          <textarea id="content" name="content" onChange={handleChange} value={values.content} />
        </div>

        <div className={styles.createNoteBox_button}>
          <Button variant="contained" type="submit" disabled={isSubmitting || !dirty}>
            {isEdit ? 'confirm changes' : 'Create'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NoteForm;