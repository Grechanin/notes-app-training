import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addComment } from 'store/notes-slice';

import styles from './CreateComment.module.scss';

const CreateComment = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>() || undefined;
  const initialFormValues = {
    commentId: id,
    content: '',
    name: '',
    surname: '',
  };

  const { handleChange, handleSubmit, setSubmitting, isSubmitting, dirty, resetForm, values } = useFormik({
    initialValues: initialFormValues,

    onSubmit: (values) => {
      setTimeout(() => {
        dispatch(addComment(values));
        setSubmitting(false);
        resetForm();
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
