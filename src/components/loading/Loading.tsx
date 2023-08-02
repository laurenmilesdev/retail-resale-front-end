import React, { ReactElement } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './Loading.module.css';

type Props = {
  children: ReactElement;
  loaded: boolean;
  message?: string;
};

export default function Loading(props: Props) {
  return props.loaded ? (
    props.children
  ) : (
    <div className={styles.loading}>
      <div className="col-md-2">
        <CircularProgress className={styles['loading-icon']} />
      </div>
      {props.message && (
        <div className="col-md-10">
          <h5>{props.message}</h5>
        </div>
      )}
    </div>
  );
}
