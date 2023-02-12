import React, { useState } from 'react'
import Wave from '../images/home/wave.svg';
import '../styles/home.css';

export default function Form() {
    const myToken = localStorage.getItem('token');
    // console.log(myToken);
    const [data, setData] = useState({
        email: '',
        description: '',

    });
    const [token, setToken] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data);

        if (data.email.length === 0 && data.description.length === 0) {
            alert('Field could not be empty');
        }
        else {
            if (myToken === null) {
                alert('token expired. Please Login again');
            }
            else {
                fetch('https://httpbin.org/get', {
                    headers: { Authentication: `Bearer ${myToken}` }
                })
                    .then(resp => resp.json())
                    .then(json => {
                        console.log(JSON.stringify(json))
                        setToken(JSON.stringify(json));
                    })
                
                    // token verification

                    // if token verified 

                    if(myToken.split('-')[0] === data.email) {
                        fetch(process.env.REACT_APP_URL, {
                            method: 'POST',
                            body: JSON.stringify({
                
                                email: data.email,
                                description: data.description,
                            }),
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                            },
                        })
                            .then((response) => response.json())
                            .then((json) => {
                                console.log(json);
                                alert('form submitted');
                            });

                            setData({email: '', description: ''});
                            
                    }
                    else {
                        alert('You are unauthorized. Please send message with your email');
                    }

                    

                        // else alert not verified user
            }
            


        }
    }

    return (
        <div >

            <div>
                <img src={Wave} alt='../wave' />
            </div>
            <div className='form_container' >
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <div className='feature_head' style={{ fontWeight: '300' }}>Contact Us</div>
                        <div className='features_desc' style={{ fontWeight: '300' }}>
                            Lorem ipsum dolor sit amet consectetur. Eget cursus ullamcorper mauris faucibus tristique libero justo. Felis elementum sollicitudin dolor urna accumsan. Urna adipiscing magnis pulvinar ipsum potenti.
                        </div>
                    </div>

                    <div className='col-12 col-lg-6'>
                        <form>
                            <input className='form_input' placeholder='Enter your email'
                            value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })} />
                            <br />
                            <br />
                            <textarea className='form_input' rows={4} placeholder='Enter your message...'
                                value = {data.description}
                                onChange={(e) => setData({ ...data, description: e.target.value })} />
                            <br />
                            <input className='starterd_btn' type='submit' value='send'
                                onClick={handleSubmit} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
