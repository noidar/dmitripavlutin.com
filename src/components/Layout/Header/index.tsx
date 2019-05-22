import Img from 'gatsby-image';
import Link from 'gatsby-link';
import * as React from 'react';

import { TO_ABOUT, TO_ALL_POSTS, TO_INDEX } from 'routes/path';
import styles from './index.module.scss';

interface HeaderProps {
  profilePicture: FixedImage;
  authorInfo: AuthorInfo;
}

export default function Header({ profilePicture, authorInfo }: HeaderProps) {
  return (
    <header>
      <div className={styles.headerContent}>
        <Link to={TO_INDEX()}>
          <Img title="Home" resolutions={profilePicture} className={styles.picture} />
        </Link>
        <div className={styles.profileInfo}>
          <Link to={TO_INDEX()} className={styles.name}>
            {authorInfo.name}
          </Link>
          <div className={styles.speciality}>{authorInfo.speciality}</div>
        </div>
        <div className={styles.links}>
          <Link to={TO_ALL_POSTS()}>All posts</Link>
          <Link to={TO_ABOUT()}>About</Link>
        </div>
      </div>
    </header>
  );
}
