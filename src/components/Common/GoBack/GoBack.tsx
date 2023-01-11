import React from 'react';
import { IoReturnUpBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import styles from './GoBack.module.scss';

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.goBackWrapper}>
      <button onClick={() => navigate(-1)}>
        <IoReturnUpBackSharp size={'24px'} color={'rgba(220, 228, 236, 0.9)'} />
      </button>
    </div>
  );
};

export default GoBack;
