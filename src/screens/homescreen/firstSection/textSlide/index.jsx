/* eslint-disable @next/next/no-img-element */
import style from './TextSlide.module.scss';

const Techs = [
  {
    id:"0",
    image:"/assets/home/text_slide/kubernetes.png",
    title:"Kubernetes"
  },
  {
    id:"1",
    image:"/assets/home/text_slide/aws.png",
    title:"AWS"
  },
  {
    id:"2",
    image:"/assets/home/text_slide/api.png",
    title:"API"
  },
  {
    id:"3",
    image:"/assets/home/text_slide/kong.png",
    title:"Kong"
  },
  {
    id:"4",
    image:"/assets/home/text_slide/iac.png",
    title:"IaC"
  },
  {
    id:"5",
    image:"/assets/home/text_slide/cicd.png",
    title:"CI/CD"
  }
]


const TextSlide = () => {
  return (
    <div className={style.textSlide}>
    <div className={style.textSlideWrapper}>
        { 
          Techs.map(
            tech => (
              <div 
                className={style.textSlideWrapper__item}
                key={tech.id}> 
                <img src={tech.image}
                   alt={tech.title}
                />
                 <p>
                  {tech.title}
                 </p>
              </div>
            )
          )
        }
      </div>
  </div>
  )
}

export default TextSlide

