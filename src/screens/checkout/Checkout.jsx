import Link from 'next/link';
import { useRouter } from 'next/router'
import { Breadcrumb, Button, Header, Input} from '../../components';
import style from '../../../styles/_Checkout.module.scss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox } from '@mui/material';
import { Formik, Form} from 'formik';
import { object, string } from 'yup';

const CheckoutPage = () =>{

    const formSchema = object({
        name: string().required("*required"),
        company: string().required("*required") ,
        email: string().email("*invalid email").required("*required"),
        title: string().required("*required"),
    });

    const router = useRouter()

    const handleFormRedirect = () => {
        router.push("/payment")
    }

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    return(
        <main>
            <Link href="/">
                <a>
                    <Header/>
                </a>
            </Link>

            <section className={style.wrapper}>
            <article className={style.content}>
              <Breadcrumb
               active={2}
               />
              <div className={style.content__options}>
                <div className={style.content__options_formWraper}>
                    <Formik
                        initialValues={{name: "", company: "", email: "", title: "" }}
                        validationSchema={formSchema}
                        onSubmit={async (values)=>{
                            await sleep(3000)
                            console.log(values);
                            handleFormRedirect();                         
                        }}
                    >
                        {({ errors, touched, isValid, validateForm, handleSubmit, isSubmitting}) => (
                            
                            <Form onSubmit={handleSubmit} className={style.content__options_formWraper_form}>
                                <Input name="name" placeholder="First and last name" label="Full Name" error={(errors.name && touched.name) && errors.name }/>
                                <Input name="company" placeholder="Acme, Inc." label="Company / Organization" error={(errors.company && touched.company) && errors.company }/>
                                <Input name="email" placeholder="you@acme.com" label="Business Email" error={(errors.email && touched.email) && errors.email }/>
                                <Input name="title" placeholder="Sr Engineer" label="Title" error={(errors.title && touched.title) && errors.title }/>
                                {/*<Checkbox name="terms" label={"Agree with terms of use"}></Checkbox>*/}
                                <FormGroup style={{alignSelf:"flex-start"}}>
                                    <FormControlLabel 
                                    control={<Checkbox required onChange={async(e)=>{
                                        //console.log(e)
                                        //handleDisabled(e)                                        
                                    }}/>}
                                label="Agree with terms of use" />
                                </FormGroup>
                                <Button type="submit" loading={isSubmitting}>Continue</Button>
                            </Form>
                        )} 
                    </Formik>
                </div>                 
              </div>
          </article>
      </section>
    </main>
  );
};

export default CheckoutPage;
