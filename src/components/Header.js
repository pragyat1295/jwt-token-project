import React from 'react';
import Logo from '../images/home/pm_logo.webp';
import '../styles/header.css';

export default function Header(props) {
  const {Logout = () => {}} = props;
  const {onContactClicked = () => {}} = props;
  return (
    <div className='top_container'>
      <div className='row'>
        <div className='col-6 col-md-2'>
          <img src={Logo} alt='../logo' height={70} width={70} />
        </div>

        <div className='col-1 col-md-8 d-none d-md-block'>
          <div className='row'>
            <div className='col-3'>Our Mission</div>
            <div className='col-3'>Our Technology</div>
            <div className='col-3'>Careers</div>
            <div className='col-3'>About Company</div>
          </div>
        </div>

        <div className='col-1 col-md-2 d-none d-md-block'>
          <button className='contact_btn' onClick={onContactClicked}>
            Contact
          </button>
        </div>
      </div>
      
      <div  >
        <button className='contact_btn' onClick={Logout} > sign out </button>
      </div>
    </div>
  )
}
