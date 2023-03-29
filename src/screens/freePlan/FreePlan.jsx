import { useRouter } from 'next/router'
import { Breadcrumb, Button, Input, Checkbox, DefaultPage } from '../../components';
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

const FreePlan = () => {
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
        name: string().required("*required"),
        company: string().required("*required"),
        email: string().email("*invalid email").required("*required"),
        title: string().required("*required"),
        terms: boolean().isTrue()
    });


    const handleClose = () => {
        // setOpen(false);
        setOpen(false);
    };

    const handleFormRedirect = async () => {
        await router.push("https://docs.platform.vee.codes/")
    }

    return (
        <DefaultPage
            titleBar="disable"
            noFooter
            showButton={false}
        >
            <section className={style.wrapper}>
                <article className={style.container}>
                    <article className={style.content}>
                        <div className={style.text}>
                            <div className={style.text__header}>
                                <h2>Start your journey with our <strong><span>Free Solution</span></strong></h2>
                            </div>
                            <div className={style.text__resume}>
                                <p>
                                    As a free user, you'll have access to <strong>support from our community forum</strong> on GitHub. Embark on a journey with our powerful <strong>Developer Portal</strong> solution, designed specifically for users on our free plan.<br /><br />
                                    Our user-friendly platform provides streamlined API automation, Pipelines, and more to help solve your business problems and take your business to the next level.<br /><br />
                                    Fill out the form below to get started and gain access to our documentation to begin your journey right away.<br /><br />
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
                                        // setOpen(true);
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
                                                <DialogContent className={style.astronault} style={{ textAlignLast: 'center' }}>
                                                    <img
                                                        alt="Astronault Helmet"
                                                        width='50%'
                                                        src="/assets/validate/astronaut-helmet.png"
                                                    />
                                                </DialogContent>
                                                <DialogTitle style={{ alignSelf: 'center', fontWeight: 'bold' }}><h3>THAT&aposS IT!</h3></DialogTitle>
                                                <DialogContent style={{ margin: ".5em 1em 1.5em 1em" }}>

                                                    <DialogContentText>
                                                        <p style={{ fontSize: '1.5em', textAlign: "center" }}>Your data has been successfully saved. Stay tuned, we will <span style={{ color: '#1c8068', fontWeight: 'bold' }}>contact you via email</span> to provide access to our ticket platform.</p>
                                                    </DialogContentText>
                                                    <Link href='/' passHref>
                                                        <a target="_blank">
                                                            <p style={{ textDecoration: "underline", fontSize: ".9em", textAlign: "center", padding: "2em 0 1em 0", color: "#1c8068" }}>Access Home Page</p>
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
        </DefaultPage >
    );
};

export default FreePlan;