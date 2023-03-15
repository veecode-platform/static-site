import { useRouter } from 'next/router'
import { Breadcrumb, Button, Input, Checkbox, DefaultPage } from '../../components';
import style from '../../../styles/Validate.module.scss';
import { Formik, Form } from 'formik';
import { object, string, boolean } from 'yup';
import { UsePostData } from '../../hooks/UsePostData';
import { useEffect } from 'react';

const Validate = () => {
    const router = useRouter()
    const plan = router.query.plan;

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.innerWidth > 1300) {
                setTimeout(() => {
                    window.scrollTo({
                        top: 120,
                        left: 300,
                        behavior: 'smooth'
                    });
                }, 500);
            }
        }
    }, []);

    const formSchema = object({
        name: string().required("*required"),
        company: string().required("*required"),
        email: string().email("*invalid email").required("*required"),
        title: string().required("*required"),
        terms: boolean().isTrue()
    });

    const handleFormRedirect = async () => {
        await router.push("/checkout")
    }

    return (
        <DefaultPage
            titleBar="disable"
            noFooter
            showButton={false}
        >
            <section className={style.wrapper}>
                <article className={style.container}>
                    <Breadcrumb
                        active={2}
                    />
                    <article className={style.content}>
                        <div className={style.text}>
                            <div className={style.text__header}>
                                <h2>Go to <strong><span>Checkout</span></strong></h2>
                            </div>
                            <div className={style.text__resume}>
                                <p>
                                    Fill out the form and get access to our ticketing platform by securing access to our expert support during a<strong> 15-day free trial</strong>! <br /><br />
                                    With access to our ticketing platform, you can communicate directly with our experts to solve DevOps issues, provisioning automation, API management, IT infrastructure scaling, and more through our developer portal.<br /><br />
                                    We ensure that your information is secure and that we comply with all applicable privacy policies and regulations.<br /><br />
                                </p>
                            </div>
                        </div>
                        <div className={style.content__options}>
                            <div className={style["content__options-formWraper"]}>
                                <Formik
                                    initialValues={{ name: "", company: "", email: "", title: "", terms: false, plan: plan }}
                                    validationSchema={formSchema}
                                    onSubmit={async(values) => {
                                        const response = await UsePostData(values);
                                        await handleFormRedirect();
                                    }}

                                >
                                    {({ errors, touched, handleSubmit, isSubmitting }) => (

                                        <Form onSubmit={handleSubmit} className={style.form}>
                                            <Input name="name" placeholder="First and last name" label="Your name" error={(errors.name && touched.name) && errors.name} />
                                            <Input name="title" placeholder="Sr Engineer" label="Title" error={(errors.title && touched.title) && errors.title} />
                                            <Input name="company" placeholder="Acme, Inc." label="Company / Organization" error={(errors.company && touched.company) && errors.company} />
                                            <Input name="email" placeholder="you@acme.com" label="Business Email" error={(errors.email && touched.email) && errors.email} />
                                            <Checkbox name="terms" terms error={(errors.terms && touched.terms) && errors.terms} />
                                            <div className={style.form__buttonWrapper}><Button type="submit" loading={isSubmitting}>Confirm</Button></div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </article>
                </article>
            </section>
        </DefaultPage >
    );
};

export default Validate;