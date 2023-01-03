import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ComeToHome from '../Common/ComeToHome/ComeToHome';
import CommentsList from './CommentsList/CommentsList';
import NoteContent from './NoteContent/NoteContent';
import styles from './NoteExpandContainer.module.scss';

const NoteExpandContainer = () => {
  const noteId = useParams().id;

  const note = useSelector((state) => state.notesPage.notes.find((note) => note.id === +noteId));

  return (
    <div className={styles.wrapper}>
      <ComeToHome />

      <NoteContent name={note.name} content={note.content} noteId={noteId} />

      <CommentsList comments={note.comments} />
    </div>
  );
};

export default NoteExpandContainer;
