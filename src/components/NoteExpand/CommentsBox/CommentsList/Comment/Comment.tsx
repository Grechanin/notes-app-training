import React from 'react';

import styles from './Comment.module.scss';
import { CommentProps } from './Comment.types';

const Comment: React.FC<CommentProps> = ({ comment: { author, content, created_at } }) => {
  return (
    <div className={styles.commentBox}>
      <div className={styles.commentBox_author}>
        <span>{author}</span>
      </div>

      <div>
        <span>{content}</span>
      </div>

      <div className={styles.commentBox_date}>
        <span>{created_at}</span>
      </div>
    </div>
  );
};

export default Comment;
