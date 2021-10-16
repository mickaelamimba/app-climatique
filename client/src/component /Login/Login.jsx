import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
const LoginSchema = Yup.object().shape({
    userName : Yup.string(),
    password : Yup.string()
        .min(8,'Le mot de passe est trop court - il doit comporter au moins 8 caractères.'),

})
const Login = ({token,setToken}) => {
    const handleLogin = async(values)=>{
        axios.post('/login',values).then((response) =>{
            if(!token){
                setToken(response.data)
            }
        }).catch((errors)=>console.log(errors))
    }
    return (
        <section className='form-login'>
            <h1>Génie Climatique</h1>
            <Formik initialValues={{userName: '',password :''} }
                    validationSchema={LoginSchema}
                    onSubmit={handleLogin}>
                {({errors, touched })=>(
                    <Form className='card p-3'>
                        <div className='card-header mb-3'>
                            <h2>Connexion</h2>
                        </div>

                        <div className='mb-3'>
                            <Field className='form-control' name="userName" placeholder="Identifian"  />
                            <ErrorMessage className='text-danger' name="userName" component="p" />
                        </div>
                        <div className='mb-3'>
                            <Field className='form-control' type='password' name="password" placeholder="Mot de passe"  />
                            <ErrorMessage className='text-danger' name="password" component="p"/>
                        </div>

                        <button className=" btn btn-primary" type="submit">Se Connecter</button>

                    </Form>
                )}

            </Formik>

        </section>
    );
};

export default Login;