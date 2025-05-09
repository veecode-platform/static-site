import { Button } from '../button';
import {
  ExternalLink, NavigationLink, 
} from '../ui/links';
import style from './ActionBarStyles.module.scss';
import { ActionBarProps } from './types';

export const ActionBar: React.FC<ActionBarProps> = ({
  title,
  variant,
  linkLabel,
  buttonLabel,
}) => {
  return (
    <div className={style.content}>
      <div className={style.content__title}>
        <h4>{title}</h4>
      </div>
      <div className={style.content__button}>
        {variant === 'contact' && (
          <NavigationLink href="/contact-us">
            <Button aria-label={buttonLabel}>{buttonLabel}</Button>
          </NavigationLink>
        )}
        {variant === 'docs' && (
          <ExternalLink
            description={linkLabel ?? ''}
            href="https://docs.platform.vee.codes/"
          >
            <Button aria-label={buttonLabel}>{buttonLabel}</Button>
          </ExternalLink>
        )}
      </div>
    </div>
  );
};
