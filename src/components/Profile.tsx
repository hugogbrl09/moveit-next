import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/hugogbrl09.png" alt="Hugo Gabriel"/>
      <div>
        <strong id="userName">Hugo Gabriel</strong>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            Level {level}
          </p>
      </div>
    </div>
  );
}