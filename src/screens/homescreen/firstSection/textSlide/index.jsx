/* eslint-disable @next/next/no-img-element */
import { FaAws,FaNetworkWired, FaRegPaperPlane,  } from 'react-icons/fa';
import { SiKubernetes,SiAmazonaws,SiTerraform } from "react-icons/si";
import style from './TextSlide.module.scss';

const Kubernetes = "/assets/home/text_slide/kubernetes.png";
const Aws = "/assets/home/text_slide/aws.png";
const Terraform = "/assets/home/text_slide/terraform.png";
const Kong = "/assets/home/text_slide/kong.png";

const TextSlide = () => {
  return (
    <div className={style.textSlide}>
    <div className={style.textSlideWrapper}>
        <div className={style.textSlideWrapper__item}> <img src={Kubernetes} alt="kubernetes logo"/> <p>Kubernetes</p></div>
        <div className={style.textSlideWrapper__item}> <img src={Aws} alt="Aws logo"/> <p> AWS</p></div>
        <div className={style.textSlideWrapper__item}> <img src={Terraform} alt="Terraform logo"/> <p> Terraform</p></div>
        <div className={style.textSlideWrapper__item}> <img src={Kong} alt="Kong logo"/> <p> Kong</p></div>
      </div>
  </div>
  )
}

export default TextSlide
