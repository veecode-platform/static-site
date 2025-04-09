/* eslint-disable no-console */
'use client';

import { useEffect } from 'react';
import {
  Button, DefaultPage, 
} from '@/components';

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <DefaultPage>
    <h1>Error</h1>
    <Button onClick={reset}>
      Back
    </Button>
  </DefaultPage>;
}
