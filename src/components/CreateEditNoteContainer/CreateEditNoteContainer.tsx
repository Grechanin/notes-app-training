import GoHome from 'components/Common/GoHome/GoHome';

import styles from './CreateEditNoteContainer.module.scss';
import NoteForm from './NoteForm/NoteForm';

const CreateEditNoteContainer = ({ isEdit = false }) => {
  return (
    <div className={styles.createNoteEditContainer}>
      <GoHome />

      <NoteForm isEdit={isEdit} />
    </div>
  );
};

export default CreateEditNoteContainer;
