import { useRouter } from 'next/router'
import { Breadcrumb, Button, Input, Checkbox, DefaultPage} from '../../components';
import style from '../../../styles/Validate.module.scss';
import { Formik, Form} from 'formik';
import { object, string, boolean} from 'yup';
import { UsePostData } from '../../hooks/UsePostData';
import { useEffect } from 'react';

const Validate = () =>{

    useEffect(()=>{
        if (typeof window !== "undefined"){
          if ( window.innerWidth > 1300){
              setTimeout(() => {
                window.scrollTo({
                  top: 120,
                  left: 300,
                  behavior: 'smooth'
                });
              }, 500);
          }
        }
      },[]);

    const formSchema = object({
        name: string().required("*required"),
        company: string().required("*required") ,
        email: string().email("*invalid email").required("*required"),
        cel: string(). required("*required"),
        title: string().required("*required"),
        terms: boolean().isTrue()
    });

    const router = useRouter()
    const plan = router.query.plan;

    const handleFormRedirect = async () => {
        await router.push("/checkout")
    }

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
                        <div className={style["content__options-formWraper"]}>
                            <Formik
                                initialValues={{ name: "", company: "", email: "", title: "", terms: false, cel: "", plan: plan}}
                                validationSchema={formSchema}
                                onSubmit={async (values)=>{
                                    const response = await UsePostData(values);
                                    //console.log(values, response);
                                    await handleFormRedirect();                         
                                }}
                                >
                                {({ errors, touched, handleSubmit, isSubmitting}) => (
                                    
                                    <Form onSubmit={handleSubmit} className={style.form}>
                                        <Input name="name" placeholder="First and last name" label="Full Name" error={(errors.name && touched.name) && errors.name }/>
                                        <Input name="company" placeholder="Acme, Inc." label="Company / Organization" error={(errors.company && touched.company) && errors.company }/>
                                        <Input name="email" placeholder="you@acme.com" label="Business Email" error={(errors.email && touched.email) && errors.email }/>
                                        <Input name="cel" placeholder="number" label="Cel number" error={(errors.cel && touched.cel) && errors.cel }/>
                                        <Input name="title" placeholder="Sr Engineer" label="Title" error={(errors.title && touched.title) && errors.title }/>
                                        <Checkbox name="terms" error={(errors.terms && touched.terms) && errors.terms}></Checkbox>
                                        <div className={style.form__buttonWrapper}><Button type="submit" loading={isSubmitting}>Continue</Button></div>
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