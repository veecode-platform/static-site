import React from 'react';
import styles from './containerStyles.module.scss';
import { ContainerProps } from './types';

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
