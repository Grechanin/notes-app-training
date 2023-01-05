import React from 'react';

import Comment from './Comment/Comment';
import { CommentsListProps } from './CommentsList.types';

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} author={comment.author} content={comment.content} created_at={comment.created_at} />
      ))}
    </>
  );
};

export default CommentsList;
