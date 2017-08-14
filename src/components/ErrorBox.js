import React from 'react';
import styles from './ErrorBox.css';

const ErrorBox = (props) => (
    <div className={styles.errorBox}>
        <p className={styles.message}>{props.message || 'An unknown error has occurred'}</p>
    </div>
);

export default ErrorBox;