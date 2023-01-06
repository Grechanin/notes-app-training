import React from 'react';
import { GoHome as GoHomeIcon } from 'react-icons/go';
import { IoReturnUpBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import styles from 'components/Common/GoHome/GoHome.module.scss';

const GoHome = () => {
  return (
    <div className={styles.goHomeWrapper}>
      <Link to={'/'}>
        <div className={styles.icons}>
          <GoHomeIcon size={'28px'} color={'rgba(220, 228, 236, 0.9)'} />
          <IoReturnUpBackSharp size={'20px'} color={'rgba(220, 228, 236, 0.9)'} />
        </div>
      </Link>
    </div>
  );
};

export default GoHome;
