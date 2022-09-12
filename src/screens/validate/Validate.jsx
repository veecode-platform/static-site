import { useRouter } from 'next/router'
import { Breadcrumb, Button, Input, Checkbox, DefaultPage} from '../../components';
import style from '../../../styles/_Checkout.module.scss';
import { Formik, Form} from 'formik';
import { object, string, boolean} from 'yup';
import { UsePostData } from '../../hooks/UsePostData';

const Validate = () =>{

    const formSchema = object({
        name: string().required("*required"),
        company: string().required("*required") ,
        email: string().email("*invalid email").required("*required"),
        title: string().required("*required"),
        terms: boolean().isTrue()
    });

    const router = useRouter()

    const handleFormRedirect = async () => {
        await router.push("/payment")
    }

    //const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    return(
        <DefaultPage 
            titleBar="disable"
            >
            <section className={style.wrapper}>
                    <article className={style.content}>
                    <Breadcrumb
                    active={2}
                    />
                    <div className={style.content__options}>
                        <div className={style.content__options_formWraper}>
                            <Formik
                                initialValues={{name: "", company: "", email: "", title: "", terms: false }}
                                validationSchema={formSchema}
                                onSubmit={async (values)=>{
                                    //await sleep(3000)
                                    const response = await UsePostData(JSON.stringify(values));
                                    console.log(values, response);
                                    await handleFormRedirect();                         
                                }}
                                >
                                {({ errors, touched,/* isValid, validateForm, */handleSubmit, isSubmitting}) => (
                                    
                                    <Form onSubmit={handleSubmit} className={style.content__options_formWraper_form}>
                                        <Input name="name" placeholder="First and last name" label="Full Name" error={(errors.name && touched.name) && errors.name }/>
                                        <Input name="company" placeholder="Acme, Inc." label="Company / Organization" error={(errors.company && touched.company) && errors.company }/>
                                        <Input name="email" placeholder="you@acme.com" label="Business Email" error={(errors.email && touched.email) && errors.email }/>
                                        <Input name="title" placeholder="Sr Engineer" label="Title" error={(errors.title && touched.title) && errors.title }/>
                                        <Checkbox name="terms" error={(errors.terms && touched.terms) && errors.terms}></Checkbox>
                                        <Button type="submit" loading={isSubmitting}>Continue</Button>
                                    </Form>
                                )} 
                            </Formik>
                        </div>                 
                    </div>
                </article>
            </section>
        </DefaultPage>
  );
};

export default Validate;