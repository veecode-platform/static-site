import { Button, Input, Checkbox } from '../../../components';
import { object, string, boolean } from 'yup';
import { useEffect, useState } from 'react';
import { UseContactData } from '../../../hooks/UseContactData';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router'

import DialogContentText from '@mui/material/DialogContentText';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import style from './Trial.module.scss';
import Link from "next/link";

const Trial = () => {

    const router = useRouter()
    const plan = router.query.plan;
    const { t } = useTranslation();

    // Modal  

    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);


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

    const handleClose = () => {
        setSuccess(false);
    };
    
    const handleFormRedirect = async () => {
        await router.push("/contact-success")
    }
    
    return (
            <section className={style.wrapper} id="trial">
                <article className={style.container}>
                    <article className={style.content}>
                        <div className={style.text}>
                            <div className={style.text__header}>
                                <h2>{t('Get')} <strong><span>{t('Free Trial')}</span></strong> {t('to our support platform')}</h2>
                            </div>
                            <div className={style.text__resume}>
                                <p>
                                    {t('Fill out the form and get access to our ticketing platform by securing access to our expert support during a')}<strong> {t('15-day free trial')}</strong>! <br /><br />
                                    {t('With access to our ticketing platform, you can communicate directly with our experts to solve DevOps issues, provisioning automation, API management, IT infrastructure scaling, and more through our developer portal.')}<br /><br />
                                    {t('We ensure that your information is secure and that we comply with all applicable privacy policies and regulations')}.<br /><br />
                                </p>
                            </div>
                        </div>
                        <div className={style.content__options}>
                            <div className={style["content__options-formWraper"]}>
                                <Formik
                                    initialValues={{ name: "", company: "", email: "", title: "", terms: false, type: "TRIAL", plan: plan }}
                                    validationSchema={formSchema}
                                    onSubmit={async (values) => {
                                        const response = await UseContactData(values);
                                        // setSuccess(true);
                                        await handleFormRedirect();
                                    }}

                                >
                                    {({ errors, touched, handleSubmit, isSubmitting }) => (

                                        <Form onSubmit={handleSubmit} className={style.form}>
                                            <Input name="name" placeholder={t("First and last name")} label={t("Your name")} error={(errors.name && touched.name) && errors.name} />
                                            <Input name="title" placeholder={t("Sr Engineer")} label={t("Title")} error={(errors.title && touched.title) && errors.title} />
                                            <Input name="company" placeholder={t("Acme, Inc.")} label={t("Company / Organization")} error={(errors.company && touched.company) && errors.company} />
                                            <Input name="email" placeholder={t("you@acme.com")} label={t("Business Email")} error={(errors.email && touched.email) && errors.email} />
                                            <Checkbox name="terms" terms error={(errors.terms && touched.terms) && errors.terms} />
                                            
                                            <div className={style.form__buttonWrapper}><Button type="submit" loading={isSubmitting}>{t("Confirm")}</Button></div>
                                            
                                            <Dialog
                                                fullWidth
                                                open={success}
                                                onClose={handleClose}
                                                aria-labelledby="success-alert-dialog"
                                                aria-describedby="success-alert-dialog"
                                            >
                                                <DialogTitle>
                                                    <IconButton
                                                        aria-label="close"
                                                        onClick={handleClose}
                                                        sx={{
                                                            position: 'absolute',
                                                            right: 8,
                                                            top: 8
                                                        }}>
                                                        <CloseIcon />

                                                    </IconButton>
                                                </DialogTitle>
                                                <DialogContent className={style.astronault} style={{ textAlignLast: 'center' }}>
                                                    <img
                                                        alt="Astronault Helmet"
                                                        width='30%'
                                                        src="/assets/validate/astronaut-helmet.png"
                                                    />
                                                </DialogContent>
                                                <DialogTitle style={{ alignSelf: 'center', fontWeight: 'bold' }}><h3>{t("THAT'S IT!")}</h3></DialogTitle>
                                                <DialogContent style={{ margin: ".5em 1em 1.5em 1em" }}>
                                                    <DialogContentText>
                                                        <p style={{ fontSize: '1.5em', textAlign: "center" }}>{t('Your data has been successfully saved. Stay tuned, we will')} <span style={{ color: '#1c8068', fontWeight: 'bold' }}>{t('contact you via email')}</span> {t('to provide access to our ticket platform')}.</p>
                                                    </DialogContentText>
                                                    <Link href='#firstsec' passHref>
                                                        <a target="_blank">
                                                            <p style={{ textDecoration: "underline", fontSize: ".9em", textAlign: "center", padding: "2em 0 1em 0", color: "#1c8068" }}>{t('Access Home Page')}</p>
                                                        </a>
                                                    </Link>
                                                </DialogContent>
                                            </Dialog>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </article>
                </article>
            </section>
    );
};

export default Trial;