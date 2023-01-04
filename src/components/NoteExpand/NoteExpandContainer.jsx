import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ComeToHome from '../Common/ComeToHome/ComeToHome';
import CommentsList from './CommentsList/CommentsList';
import NoteContent from './NoteContent/NoteContent';
import styles from './NoteExpandContainer.module.scss';

const NoteExpandContainer = () => {
  const { id } = useParams();

  const note = useSelector((state) => state.notesPage.notes.find((note) => note.id === +id));

  return (
    <div className={styles.wrapper}>
      <ComeToHome />

      <NoteContent name={note.name} content={note.content} id={id} />

      <CommentsList comments={note.comments} />
    </div>
  );
};

export default NoteExpandContainer;
