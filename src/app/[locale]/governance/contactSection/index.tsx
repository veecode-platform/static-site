import Image from 'next/image';
import {
  Button, 
  NavigationLink, 
} from '@/components';
import style from './contactSectionStyles.module.scss';
import { ContactSectionProps } from './types';

const NotebookImg = '/assets/governance/notebook.svg';

export const ContactSection: React.FC<ContactSectionProps> = ({
  description,
  buttonLabel,
}) => {
  return (
    <section className={style.contactSection}>
      <article className={style.content}>
        <Image
          src={NotebookImg}
          priority
          alt=""
          width={200}
          height={62}
          style={{
            width: '100%',
            height: 'auto',
          }}
          unoptimized
          className={style.content__image}
        />
        <div className={style.content__text}>
          {description}
          <NavigationLink href="/contact-us">
            <Button aria-label={buttonLabel}>{buttonLabel}</Button>
          </NavigationLink>
        </div>
      </article>
    </section>
  );
};
