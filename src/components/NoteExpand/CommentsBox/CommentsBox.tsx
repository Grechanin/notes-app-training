import React from 'react';

import styles from './CommentsBox.module.scss';
import CommentsList from './CommentsList/CommentsList';
import CreateComment from './CommentsList/CreateComment/CreateComment';

const CommentsBox = () => (
  <div className={styles.commentsBox}>
    <h2>Comments</h2>
    <CreateComment />
    <CommentsList />
  </div>
);

export default CommentsBox;
