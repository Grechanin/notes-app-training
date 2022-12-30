import ComeToHome from '../Common/ComeToHome/ComeToHome';
import styles from './CreateNote.module.scss';

//// in work process

const CreateNote = () => {
  return (
    <div className={styles.createNoteContainer}>
      <ComeToHome />

      <div className={styles.createNoteBox}>
        <div className={styles.createNoteBox_name}>
          <span>Name </span>
          <input type={'text'} />
        </div>

        <div className={styles.createNoteBox_content}>
          <textarea />
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
