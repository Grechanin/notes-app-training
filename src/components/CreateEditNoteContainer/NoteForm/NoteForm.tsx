import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import { AppStateType } from '../../../redux/redux-store';
import styles from './NoteForm.module.scss';

type NoteFormProps = {
  isEdit: boolean;
};
type noteIdTypes = {
  noteId: any;
};
const NoteForm: React.FC<NoteFormProps> = ({ isEdit }) => {
  const { noteId } = useParams<noteIdTypes>();
  const note = useSelector((state: AppStateType) => state.notesPage.notes.find((note) => note.id === +noteId));
  const navigate = useNavigate();
  const initialFormValues =
    isEdit && note !== undefined
      ? {
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
        console.log(values);
        // isEditor ? editNote(noteId, values.name, values.content) : addNote(values.name, values.name);
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

        <button type="submit" disabled={isSubmitting || !dirty}>
          <span>{isEdit ? 'confirm changes' : 'Create'}</span>
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
