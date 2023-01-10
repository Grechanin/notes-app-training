import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppStateType } from 'redux/redux-store';

import Comment from './Comment/Comment';
import { CommentsListProps } from './CommentsList.types';

const CommentsList: React.FC<CommentsListProps> = () => {
  const { id } = useParams<{ id: string }>() || undefined;

  const note = useSelector((state: AppStateType) => state.notesPage.notes.find((note) => id && note.id === +id));
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
