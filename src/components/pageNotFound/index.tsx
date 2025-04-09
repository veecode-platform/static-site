import Image from 'next/image';
import Link from 'next/link';
import { GoHome } from 'react-icons/go';
import { Container } from '@/components';
import style from './PageNotFoundStyles.module.scss';


const ImageNotFound = `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/notFound/404.png`;

export const PageNotFound = () => {
  return (
    <article className={style.root}>
      <Container>
        <div className={style.content}>
          <Image
            src={ImageNotFound}
            priority
            alt="Page Not Found Image"
            width={200}
            height={62}
            style={{
              width: '100%',
              height: 'auto',
            }}
            unoptimized
            className={style.content__img}
          />
          <div className={style.content__goBack}>
            <Link href="/en/">
              <GoHome title="Home" />
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
};
