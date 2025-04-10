import Image from 'next/image';
import {
  Button, ExternalLink, NavigationLink, 
} from '@/components';
import style from './cardAwsContent.module.scss';
import { CardAwsContentProps } from './types';

const CardAwsContent: React.FC<CardAwsContentProps> = ({
  title,
  image,
  bodyText,
  link,
  linkLabel,
  footerText,
  buttonLabel1,
  buttonLabel2,
}) => {
  return (
    <div className={style.card}>
      <div className={style.card__image}>
        <Image
          src={image}
          alt=""
          width={200}
          height={200}
          unoptimized
          style={{
            width: '100%',
            height: 'auto',
          }} 
        />
      </div>
      <div className={style.card__body}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.bodyText}>
          <p>{bodyText}</p>
        </div>
        <footer className={style.footer}>
          <p>{footerText}</p>
          <ExternalLink description={linkLabel} href={link}>
            <Button aria-label={buttonLabel1} alt>
              {buttonLabel1}
            </Button>
          </ExternalLink>
          <NavigationLink href="/contact-us">
            <Button aria-label={buttonLabel2} alt>
              {buttonLabel2}
            </Button>
          </NavigationLink>
        </footer>
      </div>
    </div>
  );
};

export default CardAwsContent;
