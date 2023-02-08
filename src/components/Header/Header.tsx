import { FiSettings } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.headerBox}>
      <div className={styles.title}>
        <button onClick={() => navigate('/')}>
          <span>Notes</span>
        </button>
      </div>
      <div className={styles.link}>
        <Link to={`/settings/`}>
          <div style={{ fontSize: '20px' }}>
            <FiSettings />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
