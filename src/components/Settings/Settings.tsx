import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';

import GoToHome from 'components/Common/GoHome/GoHome';

import styles from './Settings.module.scss';

const Settings = () => {
  const [value, setValue] = React.useState('LocalStorage');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <div className={styles.settingsContainer}>
      <GoToHome />

      <div className={styles.setting}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Choose data provider</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="LocalStorage" control={<Radio />} label="LocalStorage" />
            <FormControlLabel value="Firebase" control={<Radio />} label="Firebase" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Settings;
