import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getNoteById } from 'redux/selectors';

import GoBack from 'components/Common/GoBack/GoBack';

import CommentsBox from './CommentsBox/CommentsBox';
import NoteContent from './NoteContent/NoteContent';
import styles from './NoteExpandContainer.module.scss';

const NoteExpandContainer = () => {
  const { id } = useParams() || undefined;
  const note = useSelector(getNoteById(id));
  return (
    <div className={styles.wrapper}>
      <GoBack />
      {note && id && (
        <>
          <NoteContent name={note.name} content={note.content} id={id} />
          <CommentsBox comments={note.comments} />
        </>
      )}
    </div>
  );
};

export default NoteExpandContainer;
