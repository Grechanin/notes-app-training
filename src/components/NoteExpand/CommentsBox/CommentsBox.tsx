import React from 'react';

import styles from './CommentsBox.module.scss';
import CommentsList from './CommentsList/CommentsList';
import { CommentsListProps } from './CommentsList/CommentsList.types';
import CreateComment from './CommentsList/CreateComment/CreateComment';

const CommentsBox: React.FC<CommentsListProps> = ({ comments }) => (
  <div className={styles.commentsList}>
    <h2>Comments</h2>
    <CreateComment />
    <CommentsList comments={comments} />
  </div>
);

export default CommentsBox;
