import {Button, Input, Checkbox, DefaultPage, TextArea} from '../../components';
import style from '../../../styles/ContactUs.module.scss';
import { Formik, Form} from 'formik';
import { object, string, boolean} from 'yup';

const ContactUs = () =>{

    const formSchema = object({
        name: string().required("*required"),
        company: string().required("*required") ,
        email: string().email("*invalid email").required("*required"),
        vkpr: boolean().isTrue(),
        safiracli: boolean().isTrue(),
        support: boolean().isTrue(),
        question: string().required("*required")
    });

    return(
        <DefaultPage titleBar="enable" title="Speak to a real human!" subtitle="Use the form below or send an email to vee@codes.com">
        <section className={style.wrapper}>
                    <article className={style.content}>
                    <div className={style.content__options}>
                        <div className={style["content__options-formWraper"]}>
                            <Formik
                                initialValues={{ name: "", company: "", email: "", question: "", vkpr: false, safiracli: false, support: false}}
                                validationSchema={formSchema}
                                onSubmit={async (values)=>{                   
                                    console.log(values);                                                          
                                }}
                                >
                                {({ errors, touched, handleSubmit, isSubmitting}) => (
                                    
                                    <Form onSubmit={handleSubmit} className={style.form}>
                                        <Input name="name" placeholder="First and last name" label="Full Name" error={(errors.name && touched.name) && errors.name }/>
                                        <Input name="email" placeholder="you@acme.com" label="Email" error={(errors.email && touched.email) && errors.email }/>
                                        <Input name="company" placeholder="Acme, Inc." label="Company / Organization" error={(errors.company && touched.company) && errors.company }/>
                                        <div className={style.form__checkboxWrapper}>
                                            <span>Which products are you interested in?</span>
                                            <Checkbox name="vkpr">VKPR</Checkbox>
                                            <Checkbox name="safiracli">Safira-cli</Checkbox>
                                            <Checkbox name="support">Support</Checkbox>
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