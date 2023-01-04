import React from 'react';
import { GoHome } from 'react-icons/go';
import { IoReturnUpBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import styles from './ComeToHome.module.scss';

const ComeToHome = () => {
  return (
    <div className={styles.toHome}>
      <Link to={'/'}>
        <div className={styles.toHome_icons}>
          <GoHome size={'28px'} color={'rgba(220, 228, 236, 0.9)'} />
          <IoReturnUpBackSharp size={'20px'} color={'rgba(220, 228, 236, 0.9)'} />
        </div>
      </Link>
    </div>
  );
};

export default ComeToHome;
