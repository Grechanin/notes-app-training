import React from 'react';
import { useParams } from 'react-router-dom';
import { selectNoteById } from 'redux/selectors';

import { useAppSelector } from 'components/hooks/redux';

import Comment from './Comment/Comment';
import { CommentsListProps } from './CommentsList.types';

const CommentsList: React.FC<CommentsListProps> = () => {
  const { id } = useParams() || undefined;
  const note = useAppSelector((state) => selectNoteById(state, id));
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
