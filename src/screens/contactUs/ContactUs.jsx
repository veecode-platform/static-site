/* eslint-disable @next/next/no-img-element */
import { DefaultPage, FormElement } from '../../components';
import style from '../../../styles/ContactUs.module.scss';
import { object, string } from 'yup';
import { useRouter } from 'next/router'
import Accordion from './accordion';

const ContactUs = () => {

    const flowImage = "/assets/icons/contact_form_img.png";

    return (
        <DefaultPage showButton titleBar="enable" title="Find out how we can help your business"
            noBack
            showOptions
            subtitle={<>Talk to our sales specialist. Use the form below or send an email to <a href='mailto: platform-sales@vee.codes' style={{ cursor: "pointer", color: '#33FFCE' }}> platform-sales@vee.codes</a></>}>
            <section className={style.wrapper}>
                <article className={style.content}>
                    <div className={style.content__options}>
                        <div className={style["content__options-decoration"]}>
                            <img src={flowImage} alt="contact us image" />
                        </div>

                        <div className={style["content__options-formWraper"]}>
                            <FormElement
                                type="CONTACT-US"
                                checkbox
                                company
                            />
                        </div>
                    </div>
                    <div className={style.content__faq}>
                        <div>
                            <h1>FAQ</h1>
                            <h2>Check our Frequently Asked Questions</h2>
                        </div>
                        <Accordion />
                    </div>
                </article>
            </section>
        </DefaultPage>
    )
}


export default ContactUs