import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppStateType } from 'redux/redux-store';

import GoToHome from 'components/Common/GoHome/GoHome';

import CommentsList from './CommentsBox/CommentsBox';
import NoteContent from './NoteContent/NoteContent';
import styles from './NoteExpandContainer.module.scss';

const NoteExpandContainer = () => {
  const { id } = useParams<{ id: string }>() || undefined;

  const note = useSelector((state: AppStateType) => state.notesPage.notes.find((note) => id && note.id === +id));
  return (
    <div className={styles.wrapper}>
      <GoToHome />
      {note && id && (
        <>
          <NoteContent name={note.name} content={note.content} id={id} />
          <CommentsList comments={note.comments} />
        </>
      )}
    </div>
  );
};

export default NoteExpandContainer;
