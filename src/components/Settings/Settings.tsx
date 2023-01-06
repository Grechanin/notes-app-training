import React from 'react';

import GoToHome from 'components/Common/GoHome/GoHome';

import styles from './Settings.module.scss';

const Settings = () => {
  return (
    <div className={styles.settingsContainer}>
      <GoToHome />

      <div className={styles.setting}>
        <span>Settings</span>
      </div>
    </div>
  );
};

export default Settings;
