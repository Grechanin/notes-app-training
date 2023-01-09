import GoHome from 'components/Common/GoHome/GoHome';
import NoteForms from 'components/CreateEditNoteContainer/NoteForm/NoteForm';

import styles from './CreateEditNoteContainer.module.scss';

const CreateEditNoteContainer = ({ isEdit = false }) => {
  return (
    <div className={styles.createNoteEditContainer}>
      <GoHome />

      <NoteForms isEdit={isEdit} />
    </div>
  );
};

export default CreateEditNoteContainer;
