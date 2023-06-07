import { useRouter } from 'next/router'
import { Breadcrumb, Button, Input, Checkbox, DefaultPage } from '../../components';
import style from '../../../styles/Validate.module.scss';
import { Formik, Form } from 'formik';
import { object, string, boolean } from 'yup';
import { UsePostData } from '../../hooks/UsePostData';
import { useEffect } from 'react';
import TagManager from "react-gtm-module";
import { useTranslation } from 'react-i18next';

const Validate = () => {
    const router = useRouter()
    const plan = router.query.plan;
    const { t } = useTranslation();

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
        name: string().required(t("required")),
        company: string().required(t("required")),
        email: string().email(t("invalid-email")).required(t("required")),
        title: string().required(t("required")),
        terms: boolean().isTrue()
    });

    const handleFormRedirect = async () => {
        await router.push("/checkout")
    }

    const tagManagerArgs = {
        gtmId: 'GTM-56RG967',
        events: {
            generateLead: {
                currency: "USD",
                value: 1,
            }
        }
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
                                <h2>{t("validate-title1")} <strong><span>{t("checkout")}</span></strong></h2>
                            </div>
                            <div className={style.text__resume}>
                                <p>
                                    {t("validate-desc1")}<br /><br />
                                    {t("validate-desc2")}<br /><br />
                                    {t("validate-desc3")}<br /><br />
                                </p>
                            </div>
                        </div>
                        <div className={style.content__options}>
                            <div className={style["content__options-formWraper"]}>
                                <Formik
                                    initialValues={{ name: "", company: "", email: "", title: "", terms: false, plan: plan }}
                                    validationSchema={formSchema}
                                    onSubmit={async (values) => {
                                        localStorage.setItem("user", JSON.stringify(values));
                                        const response = await UsePostData(values);
                                        TagManager.initialize(tagManagerArgs);
                                        await handleFormRedirect();
                                    }}

                                >
                                    {({ errors, touched, handleSubmit, isSubmitting }) => (

                                        <Form onSubmit={handleSubmit} className={style.form}>
                                            <Input name="name" placeholder={t("sup-plans-form-placeholder1")} label={t("sup-plans-form-label1")} error={(errors.name && touched.name) && errors.name} />
                                            <Input name="title" placeholder={t("sup-plans-form-placeholder2")} label={t("sup-plans-form-label2")} error={(errors.title && touched.title) && errors.title} />
                                            <Input name="company" placeholder={t("sup-plans-form-placeholder3")} label={t("sup-plans-form-label3")} error={(errors.company && touched.company) && errors.company} />
                                            <Input name="email" placeholder={t("sup-plans-form-placeholder4")} label={t("sup-plans-form-label4")} error={(errors.email && touched.email) && errors.email} />
                                            <Checkbox name="terms" terms error={(errors.terms && touched.terms) && errors.terms} />
                                            <div className={style.form__buttonWrapper}><Button type="submit" loading={isSubmitting}>{t("confirm")}</Button></div>
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