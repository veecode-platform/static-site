'use client';

import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useRouter } from '@/i18n/routing';
import style from './BackButton.module.scss';
import { BackButtonProps } from './types';

export const BackButton: React.FC<BackButtonProps> = ({
  backToUrl,
  noPrevious,
}) => {
  const router = useRouter();

  const HandlerBack = () => {
    if (backToUrl)  return router.push(backToUrl as any);
    else if(noPrevious) return router.push('/');
    return router.back();
  };

  return (
    <section className={style.back}>
      <span onClick={HandlerBack}>
        <FaLongArrowAltLeft />
      </span>
    </section>
  );
};
