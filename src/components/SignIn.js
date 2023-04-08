import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function SignIn({ Login }) {
    const [data, setData] = useState({
        email: '',
        password: '',

    });
    const [token, setToken] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const [rememberMe, setRememberMe] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        Login(data);
        if (rememberMe) {
            localStorage.setItem("username", data.email);
            localStorage.setItem("password", data.password);
        }
    }

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");
        if (storedUsername && storedPassword) {
            setRememberMe(true);
            setData({ ...data, email: storedUsername, password: storedPassword })
        }
    }, []);



    //   console.log(process.env.REACT_APP_JWT)

    return (
        <div className='parent_container'>
            <div className='child_container'>
                <form >
                    <div className='center login_head'>
                        Login
                    </div>

                    <label className='try_label'>
                        <div className="label-text">Email</div>
                        <input className='try_input'
                            autoComplete="off"
                            name="name" id="name" type="text"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                        />
                    </label>

                    <div  >
                        <div>
                            <label className='try_label'>
                                <div className="label-text">Password</div>
                                <input className='try_input'
                                    name="name" id="password" type={showPassword ? 'text' : 'password'}
                                    value={data.password}
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                />


                            </label>

                        </div>

                        <div style = {{marginLeft: '10%' }}>
                            <input type= 'checkbox' onClick={() => setShowPassword(!showPassword)}
                                style={{ background: 'none', border: 'none' }} />
                                <label style = {{marginLeft: '2%'}}>
                                    Show Password
                                </label>
                        </div>
                    </div>




                    <div className='options_container'>

                        <div>
                            <input type='checkbox'
                                name="rememberMe"
                                onChange={e => setRememberMe(e.target.checked)}
                                checked={rememberMe}
                            /> Remember me
                        </div>

                        <div>
                            Forgot Password?
                        </div>

                    </div>


                    <div className='center'>
                        <input className='login-submit ' type='submit'
                            value='login'
                            onClick={handleSubmit} />
                    </div>

                </form>
                <div className='center'>
                    <span style={{ marginRight: '1%' }}>or </span>
                    <NavLink to='/sign-up' style={{ textDecoration: 'none' }}>
                        <span> sign up </span>
                    </NavLink>
                </div>
            </div>


        </div>
    )
}
