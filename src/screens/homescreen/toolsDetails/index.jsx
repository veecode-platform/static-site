/* eslint-disable @next/next/no-img-element */
import Card from "./card";
import Divider from "./divider";
import style from "./ToolsDetails.module.scss";

const Tools = [
  {
    id: 0,
    image: "assets/home/toolsDetails/image1.png",
    title: "Devportal",
    desc: "Is a platform that centralizes your Specs and APIs making it easy to control microservices.",
    buttonLabel: "Devportal",
    link: "https://docs.platform.vee.codes/docs/tutorials/devportal/",
    tag: "devportal"
  },
  {
    id: 1,
    image: "assets/home/toolsDetails/image2.png",
    title: "Safira-CLI",
    desc: "Is our command line interface that speeds up the building of APIs from an OpenAPI file.",
    buttonLabel: "Safira-CLI",
    link: "https://docs.platform.vee.codes/docs/installation/safira-cli",
    tag: "safiraDocs"
  },
  {
    id: 2,
    image: "assets/home/toolsDetails/image3.png",
    title: "VKPR",
    desc: "Builds for you a Cloud Infrastructure with a few lines of code.",
    buttonLabel: "VKPR",
    link: "https://docs.vkpr.net/docs/intro/",
    tag: "vkprDocs"
  },
  {
    id: 3,
    image: "assets/home/toolsDetails/image4.png",
    title: "Join In Comunity",
    desc: "Increase your productivity also helping the community to grow.",
    buttonLabel: "Join Us",
    link: "https://github.com/veecode-platform/safira-support/discussions",
    tag: "joinUs"
  },
]

const ToolsDetails = () => {
  return (
    <section className={style.content}>
      <div className={style.content__title}>
        <h2>
          Discover our <span>Free Tools</span>
        </h2>
      </div>
      <div className={style.content__subtitle}> 
        <p>With our <span>Support</span> and our <span>Open Source tools</span> your team is free to serve your business areas.</p> 
      </div>
      <article className={style.content__wrapper}>
        {Tools.map(item => (
          <Card
            key={item.id}
            {...item}
          />
        ))}
      </article>
      <Divider />
    </section>
  );
};

export default ToolsDetails;
