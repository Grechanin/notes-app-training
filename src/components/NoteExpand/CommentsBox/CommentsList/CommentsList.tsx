import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useAppSelector } from 'components/hooks/redux';
import { fetchNotes } from 'store/actions';
import { selectNoteById } from 'store/selectors';

import Comment from './Comment/Comment';

const CommentsList = () => {
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
