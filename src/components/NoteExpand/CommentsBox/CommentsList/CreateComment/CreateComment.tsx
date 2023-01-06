import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment } from 'redux/notes-slice';

import styles from './CreateComment.module.scss';

const CreateComment = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>() || undefined;
  const initialFormValues = {
    commentId: id,
    content: '',
    author: '',
  };
  const { handleChange, handleSubmit, setSubmitting, isSubmitting, dirty } = useFormik({
    initialValues: initialFormValues,

    onSubmit: (values) => {
      setTimeout(() => {
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
            <label className={styles.author_label} htmlFor="author">
              Author
            </label>
            <input id="author" name="author" onChange={handleChange} />
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
