import React, {Fragment, useEffect, useState} from 'react'

import axios from 'axios';
import { useFormik } from 'formik';

const Login = (props) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const validate = values => {
        const errors = {};
        
        if (!values.email) {
            errors.email = 'Email Requerido';
        }
        if (!values.password) {
            errors.password = 'Password Requerido';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validate,
        onSubmit: values => {
            login(values)
        },
    });

    const login = async (values) => {
        // mail: challenge@alkemy.org - password: react
        try {
            const res = await axios.post('http://challenge-react.alkemy.org/',  values)
            props.setLogin(true)
            localStorage.setItem('token', res.data.token)
        }
        catch (error) {
            if (error.response){
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);

        }
        
    } 
}

    useEffect(() => {

        

    }, [])

    return ( 

        <Fragment>

            <div id="login_form" className="container">
                
                <h2>Log In</h2>

                <form className="col-md-6 form-group m-auto" onSubmit={formik.handleSubmit}>
                    
                    <div className="form-input">
                        <input 
                            className="form-control"
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    
                    <div className="form-input">
                        <input 
                            className="form-control"
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>

                    <div>{formik.errors.email ? <p>{formik.errors.email}</p> : null}</div>
                    <div>{formik.errors.password ? <p>{formik.errors.password}</p> : null}</div>

                    <div id="login-button" className="d-flex justify-content-center">
                        <button className="btn btn-primary" type="submit" >Log In</button>
                    </div>

                </form>

            </div>

        </Fragment>

     );

}
 
export default Login;
