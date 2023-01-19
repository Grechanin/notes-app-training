import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './CreateNote.module.scss';

const CreateNewNote = () => {
  return (
    <Link to={'/create/'}>
      <div className={styles.createNote}>
        <Fab color="primary" aria-label="add" size="small">
          <AddIcon />
        </Fab>
      </div>
    </Link>
  );
};

export default CreateNewNote;
