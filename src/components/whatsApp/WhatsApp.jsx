import React, { useState } from "react";
import style from "../../../styles/WhatsApp.module.scss";
const wppLogo = "/assets/logo/logo-whatsapp-512.png";
import { Button, Input, Checkbox } from '../../components';
import { Formik, Form } from 'formik';
import { UseContactData } from '../../hooks/UseContactData';
import Dialog from '@mui/material/Dialog';
import { useRouter } from 'next/router'
import { object, string, boolean } from 'yup';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import { useTranslation } from 'react-i18next';

const WhatsApp = () => {
    const { t } = useTranslation();

    const router = useRouter()

    const [open, setOpen] = useState(false);

    const plan = router.query.plan;

    const requiredText = t("*required");

    const formSchema = object({
        name: string().required(requiredText),
        company: string().required(requiredText),
        email: string().email("*invalid email").required(requiredText),
        title: string().required(requiredText),
        terms: boolean().isTrue()
    });

    const handleClick = () => {
        setOpen(true);
        console.log(open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFormRedirect = async () => {
        await router.push("https://docs.platform.vee.codes/")
    }


    return (
        <div className={style.wrapper}>
            <img src={wppLogo} alt="ContactUs WhatsApp Logo" className={style.image} onClick={handleClick} />

            <Dialog
                fullWidth
                open={open}
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
                <DialogContent>
                    <Formik
                        initialValues={{ name: "", company: "", email: "", title: "", terms: false, type: "FREE", plan: plan }}
                        validationSchema={formSchema}
                        onSubmit={async (values) => {
                            await UseContactData(values);
                            await handleFormRedirect();
                        }}
                    >
                        {({ errors, touched, handleSubmit, isSubmitting }) => (

                            <Form onSubmit={handleSubmit} className={style.form}>
                                <Input name="name" placeholder={t("First and last name")} label={t("Your name")} error={(errors.name && touched.name) && errors.name} />
                                <Input name="title" placeholder={t("Sr Engineer")} label={t("Title")} error={(errors.title && touched.title) && errors.title} />
                                <Input name="company" placeholder={t("Acme, Inc.")} label={t("Company / Organization")} error={(errors.company && touched.company) && errors.company} />
                                <Input name="email" placeholder="you@acme.com" label={t("Business Email")} error={(errors.email && touched.email) && errors.email} />
                                <Checkbox name="terms" terms error={(errors.terms && touched.terms) && errors.terms} />
                                <div className={style.form__buttonWrapper}><Button type="submit" loading={isSubmitting}>{t("Confirm")}</Button></div>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>

            </Dialog>
        </div>

    )
}

export default WhatsApp