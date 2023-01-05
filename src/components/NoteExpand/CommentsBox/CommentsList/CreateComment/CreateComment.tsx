import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import React from 'react';

import styles from './CreateComment.module.scss';

const CreateComment = () => {
  return (
    <div className={styles.createCommentBox}>
      <div className={styles.fields}>
        <div className={styles.content}>
          <textarea id="content" name="content" />
        </div>
        <div className={styles.author}>
          <label className={styles.author_label} htmlFor="author">
            Author
          </label>
          <input id="author" name="author" />
        </div>
      </div>
      <div className={styles.send}>
        <Button size="small" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default CreateComment;
