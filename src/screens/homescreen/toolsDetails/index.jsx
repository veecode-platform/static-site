/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button, DividerBottom } from "../../../components";
import Card from "./card";
import style from "./ToolsDetails.module.scss";
// import { useTranslation } from 'react-i18next';

const Tools = [
  {
    id: 0,
    image: "/assets/home/toolsDetails/image1.png",
    title: "Devportal",
    desc: "Is a platform that centralizes your Specs and APIs making it easy to control microservices.",
    buttonLabel: "Devportal",
    link: "https://docs.platform.vee.codes/devportal/intro/",
    tag: "devportal"
  },
  // {
  //   id: 1,
  //   image: "/assets/home/toolsDetails/image2.png",
  //   title: "Safira-CLI",
  //   desc: "Is our command line interface that speeds up the building of APIs from an OpenAPI file.",
  //   buttonLabel: "Safira-CLI",
  //   link: "https://docs.platform.vee.codes/safira-cli/intro",
  //   tag: "safiraDocs"
  // },
  {
    id: 1,
    image: "/assets/home/toolsDetails/image3.png",
    title: "VKPR",
    desc: "Builds for you a Cloud Infrastructure with a few lines of code.",
    buttonLabel: "VKPR",
    link: "https://docs.platform.vee.codes/vkpr/intro",
    tag: "vkprDocs"
  },
  {
    id: 2,
    image: "/assets/home/toolsDetails/image4.png",
    title: "Join Us",
    desc: "Increase your productivity also helping the community to grow.",
    buttonLabel: "Join Us",
    link: "https://github.com/orgs/veecode-platform/discussions",
    tag: "joinUs"
  },
]

const ToolsDetails = () => {
  // const { t } = useTranslation();

  return (
    <section className={style.content}>
      <div className={style.content__title}>
        <h2>
          Discover our <span>Free Tools</span>
        </h2>
      </div>

      <article className={style.content__wrapper}>
        <div className={style["content__wrapper-subtitle"]}>
          <p>With our <span>Support</span> and our <span>Open Source tools</span> your team is free to serve your business areas.</p>
        </div>

        <div className={style["content_wrapper-cards"]}>
          {Tools.map(item => (
            <div key={item.id} className={style.card}>
              <div className={style.card__item}>
                <img src={item.image} />
                <Link href={item.link} passHref>
                  <a target="_blank">
                    <button className={style["card__item-btn"]}>{item.title.toUpperCase()}</button>
                  </a>
                </Link>
              </div>
              <div className={style.card__desc}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

      </article>
    </section>
  );
};

export default ToolsDetails;
