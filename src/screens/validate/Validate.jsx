import { useRouter } from 'next/router'
import { Breadcrumb, Button, Input, Checkbox, DefaultPage } from '../../components';
import style from '../../../styles/Validate.module.scss';
import { Formik, Form } from 'formik';
import { object, string, boolean } from 'yup';
import { UsePostData } from '../../hooks/UsePostData';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Validate = () => {
    const router = useRouter()
    const plan = router.query.plan;
    // Modal  

    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        name: "",
        company: "",
        email: "",
        title: "",
        terms: false,
        plan: plan
    });

    useEffect(()=> {
        localStorage.setItem("user", JSON.stringify(values))
    }, [values]);

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
        // cel: string().required("*required"),
        title: string().required("*required"),
        terms: boolean().isTrue()
    });

    

    const handleFormRedirect = async () => {
        await router.push("/checkout")
    }




    const handleClose = () => {
        setOpen(false);
    };

    const submitForm = async () => {
        console.log('cheguei');
        const response = await UsePostData(values);
        console.log(values, response);
        await handleFormRedirect();
    };

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
                                <h2>15 Days <strong><span>Free Trial</span></strong> of Standard Plan</h2>
                            </div>
                            <div className={style.text__resume}>
                                <p>
                                    Fill out the form on the side and get access to all the features and our support for a 15-day free trial! <br /><br />
                                    We guarantee that your information is secure and that we follow all privacy policies and comply with all applicable regulations and laws. <br /><br />
                                    Try our solutions and take advantage of our dedicated support to answer any questions you may have.<br /><br />
                                    After submitting the form, you will receive an email with access to our ticketing platform, where you can start asking questions and developing your business right away!<br /><br />

                                </p>
                            </div>
                        </div>
                        <div className={style.content__options}>
                            <div className={style["content__options-formWraper"]}>
                                <Formik
                                    initialValues={{ name: "", company: "", email: "", title: "", terms: false, plan: plan }}
                                    validationSchema={formSchema}
                                    onSubmit={(values) => {
                                        setValues(values);
                                        setOpen(true);

                                    }}

                                >
                                    {({ errors, touched, handleSubmit, isSubmitting }) => (

                                        <Form onSubmit={handleSubmit} className={style.form}>
                                            <Input name="name" placeholder="First and last name" label="Your name" error={(errors.name && touched.name) && errors.name} />
                                            <Input name="title" placeholder="Sr Engineer" label="Title" error={(errors.title && touched.title) && errors.title} />
                                            <Input name="company" placeholder="Acme, Inc." label="Company / Organization" error={(errors.company && touched.company) && errors.company} />
                                            <Input name="email" placeholder="you@acme.com" label="Business Email" error={(errors.email && touched.email) && errors.email} />
                                            {/* <Input name="cel" placeholder="number" label="Cel number" error={(errors.cel && touched.cel) && errors.cel }/> */}
                                            <Checkbox name="terms" terms error={(errors.terms && touched.terms) && errors.terms} />
                                            <div className={style.form__buttonWrapper}><Button type="link" loading={isSubmitting}>Continue</Button></div>

                                            <Dialog open={open} onClose={handleClose} fullWidth>
                                                <DialogTitle>Almost There!</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText>Verify your data and confirm to start your 15 days trial</DialogContentText>

                                                    <TextField
                                                        margin="dense"
                                                        id="name"
                                                        label="Your name"
                                                        type="name"
                                                        fullWidth
                                                        variant="standard"
                                                        defaultValue={values.name}
                                                        InputProps={{
                                                            readOnly: true,
                                                        }}
                                                    />
                                                    <TextField
                                                        margin="dense"
                                                        id="title"
                                                        label="Title"
                                                        type="title"
                                                        fullWidth
                                                        variant="standard"
                                                        value={values.title}
                                                        InputProps={{
                                                            readOnly: true,
                                                        }}
                                                    />
                                                    <TextField
                                                        margin="dense"
                                                        id="company"
                                                        label="Company / Organization"
                                                        type="company"
                                                        fullWidth
                                                        variant="standard"
                                                        value={values.company}
                                                        InputProps={{
                                                            readOnly: true,
                                                        }}
                                                    />
                                                    <TextField
                                                        margin="dense"
                                                        id="email"
                                                        label="Business Email"
                                                        type="email"
                                                        fullWidth
                                                        variant="standard"
                                                        value={values.email}
                                                        InputProps={{
                                                            readOnly: true,
                                                        }}
                                                    />
                                                    <DialogActions className={style.actions} >
                                                        <Button modal handleClick={handleClose}>Cancel</Button>
                                                        <Button modal handleClick={submitForm}>Confirm</Button>
                                                    </DialogActions>
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
        </DefaultPage>
    );
};

export default Validate;