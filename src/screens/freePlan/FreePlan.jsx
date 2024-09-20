/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { Breadcrumb, Button, Input, Checkbox, DefaultPage, DocsBar } from '../../components';
import style from '../../../styles/FreePlan.module.scss';
import { Formik, Form } from 'formik';
import { object, string, boolean } from 'yup';
import { UseContactData } from '../../hooks/UseContactData';
import { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TagManager from "react-gtm-module";
import { useTranslation } from 'react-i18next';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const SuccessAnimation = '/assets/animations/success.json'


const FreePlan = () => {
    const { t }= useTranslation();
    const router = useRouter()
    const plan = router.query.plan;

    // Modal  
    const [open, setOpen] = useState(false);
    

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


    const handleClose = () => {
        setOpen(false);
    };

    const handleFormRedirect = async () => {
        await router.push("https://docs.platform.vee.codes/vkdr/intro/")
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
           <DocsBar/>
            <section className={style.wrapper}>
                {/* <article className={style.container}> */}
                    <article className={style.content}>
                        <div className={style.text}>
                            <div className={style.text__header}>
                                <h2>{t("free-plan-title1")} <strong><span>{t("free-plan-title2")}</span></strong></h2>
                            </div>
                            <div className={style.text__resume}>
                                <p>
                                    {t("free-plan-desc1")} <strong>{t("free-plan-desc2")}</strong> {t("free-plan-desc3")} <strong>{t("developer-portal")}</strong> {t("free-plan-desc4")}<br /><br />
                                    {t("free-plan-desc5")}<br /><br />
                                    {t("free-plan-desc6")}<br /><br />
                                </p>
                            </div> 
                        </div> 
                        <div className={style.content__options}>
                            <div className={style["content__options-formWraper"]}>
                                <Formik
                                    initialValues={{ name: "", company: "", email: "", title: "", terms: false, type: "FREE", plan: plan }}
                                    validationSchema={formSchema}
                                    onSubmit={async(values) => {
                                        const response = await UseContactData(values);
                                        TagManager.initialize(tagManagerArgs);
                                        setOpen(true);
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

                                            <Dialog
                                                fullWidth
                                                open={open}
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
                                                <DialogContent className={style.animation} style={{ textAlignLast: 'center' }}>
                                                    <DotLottieReact
                                                      src={SuccessAnimation}
                                                      autoplay
                                                      />
                                                </DialogContent>
                                                <DialogTitle style={{ alignSelf: 'center', fontWeight: 'bold' }}><h3>{t("free-plan-feedback-title")}</h3></DialogTitle>
                                                <DialogContent style={{ margin: ".5em 1em 1.5em 1em" }}>

                                                    <DialogContentText>
                                                    <p style={{ fontSize: '1.5em', textAlign: "center" }} dangerouslySetInnerHTML={{ __html: t("free-plan-feedback-body") }} />
                                                    </DialogContentText>
                                                    <Link href='/' passHref>
                                                        <a target="_blank">
                                                            <p style={{ textDecoration: "underline", fontSize: ".9em", textAlign: "center", padding: "2em 0 1em 0", color: "#1c8068" }}>
                                                             {t("free-plan-feedback-footer-link")}
                                                            </p>
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
                {/* </article> */}
            </section>
        </DefaultPage >
    );
};

export default FreePlan;