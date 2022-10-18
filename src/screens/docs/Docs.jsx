import React from 'react';
import { Button, DefaultPage } from '../../components';
import style from '../../../styles/Docs.module.scss';
import { FaLayerGroup, FaRocket } from 'react-icons/fa';
import Link from 'next/link';
import { gtagSafiraDocs, gtagVkprDocs } from '../../../utils/gtag';

const Docs = () => {
  return (
    <DefaultPage
      titleBar='enable'
      title='Get Started For Free'
      subtitle='Learn more about our tools here.'
    >
      <article className={style.container}>
        <div className={style.container__cards}>
          <h2 className={style["container__cards-title"]}> <span><FaRocket /></span> Safira Cli</h2>
          <p className={style["container__cards-desc"]}>Is a built-in API acceleration tool. The product offers multiple commands that boost productivity and eliminate repetitive tasks.</p>

          <Link href="https://docs.platform.vee.codes/docs/installation/safira-cli">
            <a target="_blank" onClick={gtagSafiraDocs}>
              <Button>See Docs</Button>
            </a>
          </Link>
        </div>
        <div className={style.container__cards}>
          <h2 className={style["container__cards-title"]}><span><FaLayerGroup /></span> VKPR</h2>
          <p className={style["container__cards-desc"]}> Is our solution for Cloud Infrastructure. With the CLI, you will provide a Kubernetes cluster to attend to your company&apos;s needs.</p>
          <Link href="https://docs.vkpr.net/docs/intro/">
            <a target="_blank" onClick={gtagVkprDocs}>
              <Button>See Docs</Button>
            </a>
          </Link>
        </div>
      </article>
    </DefaultPage>
  )
}

export default Docs