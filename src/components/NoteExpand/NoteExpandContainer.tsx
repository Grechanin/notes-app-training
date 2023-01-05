import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AppStateType } from '../../redux/redux-store';
import ComeToHome from '../Common/ComeToHome/ComeToHome';
import CommentsList from './CommentsList/CommentsList';
import NoteContent from './NoteContent/NoteContent';
import styles from './NoteExpandContainer.module.scss';

const NoteExpandContainer = () => {
  const { id } = useParams<{ id: string }>() || undefined;

  const note = useSelector((state: AppStateType) => state.notesPage.notes.find((note) => id && note.id === +id));
  return (
    <div className={styles.wrapper}>
      <ComeToHome />
      {note !== undefined && id !== undefined ? (
        <>
          <NoteContent name={note.name} content={note.content} id={id} />
          <CommentsList comments={note.comments} />
        </>
      ) : null}
    </div>
  );
};

export default NoteExpandContainer;
