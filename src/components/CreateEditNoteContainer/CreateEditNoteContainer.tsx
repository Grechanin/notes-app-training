import ComeToHome from '../Common/ComeToHome/ComeToHome';
import styles from './CreateEditNoteContainer.module.scss';
import NoteForm from './NoteForm/NoteForm';

const CreateEditNoteContainer = ({ isEdit = false }) => {
  return (
    <div className={styles.createNoteContainer}>
      <ComeToHome />

      <NoteForm isEdit={isEdit} />
    </div>
  );
};

export default CreateEditNoteContainer;
