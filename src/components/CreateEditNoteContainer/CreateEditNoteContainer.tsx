import GoBack from 'components/Common/GoBack/GoBack';
import NoteForms from 'components/CreateEditNoteContainer/NoteForm/NoteForm';

import styles from './CreateEditNoteContainer.module.scss';

const CreateEditNoteContainer = ({ isEdit = false }) => {
  return (
    <div className={styles.createNoteEditContainer}>
      <GoBack />

      <NoteForms isEdit={isEdit} />
    </div>
  );
};

export default CreateEditNoteContainer;
