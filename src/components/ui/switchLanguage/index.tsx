'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { IoLanguageOutline } from 'react-icons/io5';
import {
  usePathname, useRouter, 
} from '@/i18n/routing';
import style from './SwitchLanguageStyles.module.scss';

export const SwitchLanguage = () => {
  const [dropdownShow, setDropdownShow] = React.useState<boolean>(false);
  const t = useTranslations('localeSwitcher');

  const pathName = usePathname();
  const router = useRouter();

  const handleToggleDropdown = () => setDropdownShow(!dropdownShow);

  const handleChooseLanguage = (lgn: string) => {
    handleToggleDropdown();
    router.push(pathName as any, { locale: lgn });
  };

  return (
    <div className={style.root}>
      <button
        aria-label="menu-language"
        className={style.button}
        onClick={handleToggleDropdown}
      >
        <IoLanguageOutline />
      </button>

      {dropdownShow && (
        <div className={style.dropdown}>
          <ul className={style.dropdown__list}>
            <li
              className={style['dropdown__list-item']}
              onClick={() => handleChooseLanguage('pt')}
            >
              {t.rich('pt', {
                p: chunks => <p>{chunks}</p>,
                span: chunks => <span>{chunks}</span>,
              })}
            </li>
            <li
              className={style['dropdown__list-item']}
              onClick={() => handleChooseLanguage('en')}
            >
              {t.rich('en', {
                p: chunks => <p>{chunks}</p>,
                span: chunks => <span>{chunks}</span>,
              })}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
