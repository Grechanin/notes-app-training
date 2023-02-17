import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import React from 'react';
import { useParams } from 'react-router-dom';
import { v4 } from 'uuid';

import { addCommentToNote, getNotes } from 'api/localStorage';
import { useAppDispatch } from 'components/hooks/redux';
import { setIsNotesFetching, setNotes } from 'store/notes-slice';
import { Note } from 'store/notes-slice.types';

import styles from './CreateComment.module.scss';

const CreateComment = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>() || undefined;
  const initialFormValues = {
    noteId: id,
    id: v4(),
    content: '',
    name: '',
    surname: '',
  };

  const { handleChange, handleSubmit, setSubmitting, isSubmitting, dirty, resetForm, values } = useFormik({
    initialValues: initialFormValues,

    onSubmit: (values) => {
      setTimeout(() => {
        dispatch(setIsNotesFetching(true));
        let notes = getNotes();
        notes = notes.map((note: Note) => {
          if (note.id === values.noteId) {
            note.comments.unshift({
              id: values.id,
              content: values.content,
              author: {
                name: values.name.charAt(0).toUpperCase() + values.name.slice(1),
                surname: values.surname.charAt(0).toUpperCase() + values.surname.slice(1),
              },
              created_at: new Date().toLocaleString(),
            });
          }
          return note;
        });
        dispatch(addCommentToNote(notes));
        dispatch(setNotes(notes));
        setSubmitting(false);
        resetForm();
        dispatch(setIsNotesFetching(false));
      }, 400);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.createCommentBox}>
        <div className={styles.fields}>
          <div className={styles.content}>
            <textarea
              id="content"
              name="content"
              onChange={handleChange}
              value={values.content}
              placeholder="Add your comment"
            />
          </div>

          <div className={styles.author}>
            <div className={styles.name}>
              <label className={styles.author_label} htmlFor="name">
                Name
              </label>
              <input id="name" name="name" onChange={handleChange} value={values.name} />
            </div>
            <div className={styles.surname}>
              <label className={styles.author_label} htmlFor="surname">
                Surname
              </label>
              <input id="surname" name="surname" onChange={handleChange} value={values.surname} />
            </div>
          </div>
        </div>
        <div className={styles.send}>
          <Button
            type="submit"
            size="small"
            variant="contained"
            disabled={isSubmitting || !dirty}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreateComment;
