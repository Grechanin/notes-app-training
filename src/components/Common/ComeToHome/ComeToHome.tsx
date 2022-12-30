import React from 'react';
import { IoReturnUpBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import styles from './ComeToHome.module.scss';

const ComeToHome = () => {
  return (
    <div className={styles.toBack}>
      <Link to={'/'}>
        <div>
          <IoReturnUpBackSharp size={'28px'} color={'white'} />
        </div>
      </Link>
    </div>
  );
};

export default ComeToHome;
