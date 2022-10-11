import {Button, Input, Checkbox, DefaultPage, TextArea} from '../../components';
import style from '../../../styles/ContactUs.module.scss';
import { Formik, Form} from 'formik';
import { object, string} from 'yup';
import { UseContactData } from '../../hooks/UseContactData';
import { useRouter } from 'next/router'

const ContactUs = () =>{

    const formSchema = object({
        name: string().required("*required"),
        company: string().required("*required") ,
        email: string().email("*invalid email").required("*required"),
        question: string().required("*required")
    });

    const router = useRouter()

    const handleFormRedirect = async () => {
        await router.push("/contact-success")
    }
    const flowImage = "/assets/icons/contact_form_img.png";

    return(
        <DefaultPage showButton titleBar="enable" title="Find out how we can help your business" noBack subtitle={<>Talk to our sales specialist. Use the form below or send an email to <a href='mailto: platform-sales@vee.codes' style={{cursor: "pointer", color: '#33FFCE'}}> platform-sales@vee.codes</a></>}>
        <section className={style.wrapper}>
                    <article className={style.content}>
                    <div className={style.content__options}>
                        <div className={style["content__options-decoration"]}>
                            <img src={flowImage}/>
                        </div>

                        <div className={style["content__options-formWraper"]}>
                            <Formik
                                initialValues={{ name: "", company: "", email: "", question: "", vkpr: false, safiracli: false, support: false, devportal: false}}
                                validationSchema={formSchema}
                                onSubmit={async (values)=>{                   
                                    //console.log(values);
                                    const response = await UseContactData(values)
                                    await handleFormRedirect()                                         
                                }}
                                >
                                {({ errors, touched, handleSubmit, isSubmitting}) => (
                                    
                                    <Form onSubmit={handleSubmit} className={style.form}>
                                        <Input name="name" placeholder="Your name" label="Full name" error={(errors.name && touched.name) && errors.name }/>
                                        <Input name="email" placeholder="you@acme.com" label="Email" error={(errors.email && touched.email) && errors.email }/>
                                        <Input name="company" placeholder="Acme, Inc." label="Company / Organization" error={(errors.company && touched.company) && errors.company }/>
                                        <div className={style.form__checkboxWrapper}>
                                        <h1>Which products are you interested in?</h1>
                                            <Checkbox name="vkpr">VKPR</Checkbox>
                                            <Checkbox name="safiracli">Safira-cli</Checkbox>
                                            <Checkbox name="support">Expert Support</Checkbox>
                                            <Checkbox name="devportal">Devportal</Checkbox>
                                        </div>
                                        <TextArea name="question" placeholder="Your message" label="How can we help?" error={(errors.question && touched.question) && errors.question }></TextArea>

                                        <div className={style.form__buttonWrapper}><Button type="submit" loading={isSubmitting}>Submit</Button></div>
                                    </Form>
                                )} 
                            </Formik>
                        </div>                 
                    </div>
                </article>
            </section>
        </DefaultPage>
    )
}


export default ContactUs