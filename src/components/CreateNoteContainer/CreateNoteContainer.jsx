import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ComeToHome from '../Common/ComeToHome/ComeToHome';
import styles from './CreateNoteContainer.module.scss';
import CreateNoteForm from './CreateNoteForm/CreateNoteForm';

const CreateNoteContainer = () => {
  const id = useParams().noteId;
  let note = useSelector((state) => state.notesPage.notes.find((note) => note.id === +id));
  note = note === undefined ? null : note;
  const isEditor = note !== null;
  return (
    <div className={styles.createNoteContainer}>
      <ComeToHome />

      <CreateNoteForm isEditor={isEditor} name={isEditor ? note.name : null} content={isEditor ? note.content : null} />
    </div>
  );
};

export default CreateNoteContainer;
