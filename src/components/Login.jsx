import React, {Fragment, useEffect, useState} from 'react'

import axios from 'axios';

const Login = (props) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleOnClick = async (e) => {
        // mail: challenge@alkemy.org - password: react
        e.preventDefault()
        const res = await axios.post('http://challenge-react.alkemy.org/',  { email: email, password: password})
        .then(res => res.status == 200 ? props.setLogin(true) : props.setLogin(false))
        // .then(fs.writeFile("thing.json", dictstring, function(err, result) {
        //     if(err) console.log('error', err);
        // })  
        // )
   
    } 

    const handleOnChangeEmail = (e) => {
        
        console.log(e.target.value);
        setEmail(e.target.value)

    } 
    
    const handleOnChangePassword = (e) => {
        
        console.log(e.target.value);
        setPassword(e.target.value);
        
    } 


    useEffect(() => {

        

    }, [])

    return ( 

        <Fragment>

            <div id="login_form" className="container">
                
                <h2>Log In</h2>

                <form className="col-md-6 form-group m-auto" action="" method="GET">
                    
                    <div className="form-input">
                        <input className="form-control" name="" type="email" placeholder="Email" onChange={handleOnChangeEmail}/>
                    </div>
                    
                    <div className="form-input">
                        <input className="form-control" name="" type="password" placeholder="Password" onChange={handleOnChangePassword}/>
                    </div>

                    <div id="login-button" className="d-flex justify-content-center">
                        <button className="btn btn-primary" type="submit" onClick={handleOnClick}>Log In</button>
                    </div>

                </form>

            </div>

        </Fragment>

     );

}
 
export default Login;
