import { useRef, useState, useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
// import CountryDropdown from 'country-dropdown-with-flags-for-react';
import ReactFlagsSelect from "react-flags-select";
// import Axios from 'axios';

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Signup() {
    const navigate = useNavigate();

    const [selected, setSelected] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);



    const [data, setData] = useState({
        name: '',
        email: '',
        contact: '',
        password: '',
        confirmPswd: '',

    });

    const [err, setErr] = useState({
        nameErr: null,
        emailErr: null,
        contactErr: null,
        passwordErr: null,
        confirmPswdErr: null,
    });

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (data.name.length !== 0 && data.email.length !== 0 &&
            data.contact.length !== 0 && data.password.length !== 0
            && data.confirmPswd.length !== 0 && !err.nameErr &&
            !err.emailErr && !err.contactErr && !err.contactErr && !err.passwordErr
            && !err.confirmPswdErr) {
            setIsDisabled(false)
        }
        else {
            setIsDisabled(true);
        }
    });

    function isValidContactNumber(number) {
        return /^[0-9]{10}$/.test(number);
    }

    const handleNameChange = (e) => {
        // console.log(e.target.value);
        if (e.target.value.length === 0) {
            setErr({ ...err, nameErr: 'This is required field' })
        }
        else {
            setErr({ ...err, nameErr: null })
        }
        setData({ ...data, name: e.target.value })
    }

    const handleEmailChange = (e) => {
        // console.log(e.target.value);
        if (e.target.value.length === 0) {
            setErr({ ...err, emailErr: 'This is required field' })
        }
        else {
            setErr({ ...err, emailErr: null })
        }
        setData({ ...data, email: e.target.value })
    }

    const handleContactChange = (e) => {
        // console.log(e.target.value);
        if (e.target.value.length === 0) {
            setErr({ ...err, contactErr: 'This is required field' })
        }
        else if (!isValidContactNumber(e.target.value)) {
            setErr({ ...err, contactErr: 'Phone number should be 10 degit' })
        }
        else {
            setErr({ ...err, contactErr: null })
        }
        setData({ ...data, contact: e.target.value })
    }

    const handlePasswordChange = (e) => {
        // console.log(e.target.value);
        if (e.target.value.length === 0) {
            setErr({ ...err, passwordErr: 'This is required field' })
        }
        else {
            setErr({ ...err, passwordErr: null })
        }
        setData({ ...data, password: e.target.value })
    }

    const handleConfirmPswdChange = (e) => {
        // console.log(e.target.value);
        if (e.target.value.length === 0) {
            setErr({ ...err, confirmPswdErr: 'This is required field' })
        }
        else if (e.target.value !== data.password) {
            setErr({ ...err, confirmPswdErr: 'Password do not match' })
        }
        else {
            setErr({ ...err, confirmPswdErr: null })
        }
        setData({ ...data, confirmPswd: e.target.value })
    }

    // const showPasswordFunc = () => {
    //     setShowPassword(!showPassword);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data);

        fetch(process.env.REACT_APP_URL, {
            method: 'POST',
            body: JSON.stringify({

                name: data.name,
                email: data.email,
                contact: data.contact,
                password: data.password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                console.log('your jwt token will get generated in the backend for this data');
            });
        const user = {
            name: data.name,
            email: data.email,
            contact: data.contact,
            password: data.password,
        }
        localStorage.setItem('user', JSON.stringify(user));
        alert('Sign up successful. You can now log in.');

        navigate('/');

    }
    // console.log('country code', selected)
    return (
        <div className='container'>

            <div>
                <div className='heading_signUp' >
                    Register Account
                </div>
                <div className='heading_signUp_content' >
                    Lorem ipsum dolor sit amet consectetur. Id feugiat lectus nunc aliquam massa tellus.
                </div>
            </div>

            <div className='sign-up-form'>
                <form onSubmit={handleSubmit}>
                    <label className='signup_label' >
                        <div className="signup-label-text">
                            <span>
                                Name*
                            </span>
                        </div>
                        <input className={err.nameErr ? 'error' : 'signup_input'}
                            autoComplete="off"
                            name="name" id="name" type="text"
                            value={data.name}
                            onChange={handleNameChange}
                        />
                        {err.nameErr && <p style={{ color: 'red' }}>{err.nameErr}</p>}
                    </label>

                    {/* <input className="input_field" placeholder='name'
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })} /> */}

                    {/* <input className="input_field" type='email' placeholder='email' 
                    value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })} /> */}


                    <label className='signup_label'>
                        <div className="signup-label-text">
                            <span>
                                Email*
                            </span>
                        </div>
                        <input className={err.emailErr ? 'error' : 'signup_input'}
                            autoComplete="off"
                            name="name" id="password" type="text"
                            value={data.email}
                            onChange={handleEmailChange}
                        />
                        {err.emailErr && <p style={{ color: 'red' }}>{err.emailErr}</p>}
                    </label>
                    {/* <CountryDropdown id="UNIQUE_ID" className='YOUR_CSS_CLASS' preferredCountries={['gb', 'us']}
                value="" handleChange={e => console.log(e.target.value)}>

            </CountryDropdown> */}


                    <label className='signup_label'>

                        <div className="signup-label-text" style={{ width: '15%' }}>
                            <span>
                                Contact Number*
                            </span>
                        </div>
                        <input className={err.contactErr ? 'error' : 'signup_input'}
                            autoComplete="off"
                            name="name" id="password" type="text"
                            value={data.contact}
                            onChange={handleContactChange}
                        />
                        {err.contactErr && <p style={{ color: 'red' }}>{err.contactErr}</p>}
                    </label>

                    {/* <div className=' contact_field'>
                        <div className='col-4 col-lg-3 ' >
                            <ReactFlagsSelect
                                selected={selected}
                                onSelect={(code) => setSelected(code)}
                                searchable
                                selectButtonClassName="flag_list"
                            />
                        </div>

                        <div className='col-8 col-lg-9'>
                            <input className='contact_input' placeholder='phone number' value={data.contact}
                                onChange={(e) => setData({ ...data, contact: e.target.value })} />
                        </div>
                    </div> */}


                    {/* <input className="input_field"
                        type='password'
                        placeholder='password'
                        value={data.password}
                        onChange={(e) => setData({ ...data, password: e.target.value })} /> */}

                    <label className='signup_label'>
                        <div className="signup-label-text">
                            <span>
                                Password*
                            </span>
                        </div>
                        <input className={err.passwordErr ? 'error' : 'signup_input'}
                            name="password" id="password" type={showPassword ? 'text' : 'password'}
                            value={data.password}
                            onChange={handlePasswordChange}
                        />

                        <div style={{marginLeft: '2%', marginTop: '1%'}}>
                            <input type='checkbox' onClick={() => setShowPassword(!showPassword)}
                                // value = {showPassword ? 'hide password' : 'show password'} 
                                style={{ background: 'none', border: 'none' }} />
                            <label style={{ marginLeft: '2%', color: '#7265E3', fontWeight: 600 }}>Show Password</label>
                        </div>

                        {err.passwordErr && <p style={{ color: 'red' }}>{err.passwordErr}</p>}
                    </label>

                    <label className='signup_label'>
                        <div className="signup-label-text" style={{ width: '20%' }}>
                            <span>
                                Confirm Password*
                            </span>
                        </div>
                        <input className={err.confirmPswdErr ? 'error' : 'signup_input'}
                            name="confirm_password" id="confirm_password" type='password'
                            value={data.confirmPswd}
                            onChange={handleConfirmPswdChange}
                        />
                        {err.confirmPswdErr && <p style={{ color: 'red' }}>{err.confirmPswdErr}</p>}
                    </label>

                    {/* <input className="input_field" type='password' placeholder='confirm password' value={data.password}
                        onChange={(e) => setData({ ...data, password: e.target.value })} /> */}

                    <input className={isDisabled ? "disabled" : "submit"} type='submit' value='submit'
                        disabled = {isDisabled}
                    // onClick={handleSubmit}
                    />
                </form>
            </div>




            <div>
                Already have an account?
                <NavLink to='/jwt-token-project' style={{ textDecoration: 'none' }}>
                    <span style={{ marginLeft: '1%' }}>
                        Login
                    </span>
                </NavLink>
            </div>


        </div>
    )
}
