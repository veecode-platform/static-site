/* eslint-disable @next/next/no-img-element */
import React from 'react'
import style from '../../../styles/Tools.module.scss';
import { useTranslation } from 'react-i18next';

const Tools = ({bg, title}) => {

  const images = [
    { 
      src:"/assets/home/tools/ARGO.png",
      alt:"ArgoCD Logo"
    },
    { 
      src:"/assets/home/tools/BACKSTAGE.png",
      alt:"Backstage Logo"
    },
    { 
      src:"/assets/home/tools/DIGITALOCEAN.png",
      alt:"DigitalOcean Logo"
    },
    { 
      src:"/assets/home/tools/DOCKER.png",
      alt:"Docker Logo"
    },
    { 
      src:"/assets/home/tools/KONG.png",
      alt:"Kong Logo"
    },
    { 
      src:"/assets/home/tools/KUBERNETES.png",
      alt:"Kubernetes Logo"
    },
    { 
      src:"/assets/home/tools/TERRAFORM.png",
      alt:"Terraform Logo"
    },
    { 
      src:"/assets/home/tools/AWS.png",
      alt:"AWS Logo"
    }
  ]

  const { t } = useTranslation();

  return (
    
    <div className={style.tools}
      style={{background:`${bg}`}}
      >
        {
          title && (
            <div 
              className={style.tools__title}>
              <h2>{t('Our support also includes')}</h2>
            </div>
          )
        }
        <div className={style.tools__wrapper}>
          {
            images.map(
              item => (
                <img src={item.src} alt={item.alt} className={style.toolsImg} key={item.alt}/>
              )
            )
          }
        </div>
    </div>
  )
}

export default Tools