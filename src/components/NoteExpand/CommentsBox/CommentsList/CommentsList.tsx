import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getNoteById } from 'redux/selectors';

import Comment from './Comment/Comment';
import { CommentsListProps } from './CommentsList.types';

const CommentsList: React.FC<CommentsListProps> = () => {
  const { id } = useParams() || undefined;
  const note = useSelector(getNoteById(id));
  const comments = note ? note.comments : undefined;
  return (
    <>
      {comments && id && (
        <>
          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </>
      )}
    </>
  );
};

export default CommentsList;
