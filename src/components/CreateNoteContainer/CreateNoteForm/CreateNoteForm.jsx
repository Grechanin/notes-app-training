import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';

import styles from './CreateNoteForm.module.scss';

const CreateNoteForm = ({ name, content, isEditor, id, editNote, addNote }) => {
  const navigate = useNavigate();
  const formValues = isEditor
    ? {
        name: `${name}`,
        content: `${content}`,
      }
    : {
        name: '',
        content: '',
      };

  const formik = useFormik({
    initialValues: formValues,

    onSubmit: (values) => {
      setTimeout(() => {
        console.log(values);
        // isEditor ? editNote(id, values.name, values.content) : addNote(values.name, values.name);
        formik.setSubmitting(false);
        navigate('/');
      }, 400);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.createNoteBox}>
        <div className={styles.createNoteBox_name}>
          <span>Name </span>
          <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
        </div>

        <div className={styles.createNoteBox_content}>
          <textarea id="content" name="content" onChange={formik.handleChange} value={formik.values.content} />
        </div>

        <button type="submit" disabled={formik.isSubmitting}>
          <span>{isEditor ? <span>confirm changes</span> : <span>Create</span>}</span>
        </button>
      </div>
    </form>
  );
};

export default CreateNoteForm;
