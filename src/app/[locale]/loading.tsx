import React from 'react';
import {
  DefaultPage, Loading, 
} from '@/components';

const LoadingStyle = {
  minHeight: '75vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const loading = () => {
  return (
    <DefaultPage noBack>
      <div style={LoadingStyle}>
        <Loading />
      </div>
    </DefaultPage>
  );
};

export default loading;
