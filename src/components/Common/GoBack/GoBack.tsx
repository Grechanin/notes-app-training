import React from 'react';
import { IoReturnUpBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import styles from 'components/Common/GoBack/GoBack.module.scss';

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.goHomeWrapper}>
      <div className={styles.icons}>
        <button onClick={() => navigate(-1)}>
          <IoReturnUpBackSharp size={'20px'} color={'rgba(220, 228, 236, 0.9)'} />
        </button>
      </div>
    </div>
  );
};

export default GoBack;
