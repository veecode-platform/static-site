/* eslint-disable @next/next/no-img-element */
import {DefaultPage, FormElement} from '../../components';
import style from '../../../styles/ContactUs.module.scss';
import { object, string} from 'yup';
import { useRouter } from 'next/router'

const ContactUs = () =>{

    const flowImage = "/assets/icons/contact_form_img.png";

    return(
        <DefaultPage showButton titleBar="enable" title="Find out how we can help your business"
         noBack 
         subtitle={<>Talk to our sales specialist. Use the form below or send an email to <a href='mailto: platform-sales@vee.codes' style={{cursor: "pointer", color: '#33FFCE'}}> platform-sales@vee.codes</a></>}>
        <section className={style.wrapper}>
                    <article className={style.content}>
                    <div className={style.content__options}>
                        <div className={style["content__options-decoration"]}>
                            <img src={flowImage} alt="contact us image"/>
                        </div>

                        <div className={style["content__options-formWraper"]}>
                          <FormElement
                            checkbox
                            />
                        </div>                 
                    </div>
                </article>
            </section>
        </DefaultPage>
    )
}


export default ContactUs