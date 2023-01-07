import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment } from 'redux/notes-slice';
import * as Yup from 'yup';

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

  const { handleChange, handleSubmit, setSubmitting, isSubmitting, dirty } = useFormik({
    initialValues: initialFormValues,

    onSubmit: (values) => {
      setTimeout(() => {
        console.log(values);
        dispatch(addComment(values));
        setSubmitting(false);
      }, 400);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.createCommentBox}>
        <div className={styles.fields}>
          <div className={styles.content}>
            <textarea id="content" name="content" onChange={handleChange} />
          </div>

          <div className={styles.author}>
            <div className={styles.name}>
              <label className={styles.author_label} htmlFor="name">
                Name
              </label>
              <input id="name" name="name" onChange={handleChange} />
            </div>
            <div className={styles.surname}>
              <label className={styles.author_label} htmlFor="surname">
                Surname
              </label>
              <input id="surname" name="surname" onChange={handleChange} />
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
