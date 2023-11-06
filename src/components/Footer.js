import React from 'react';
import Logo from '../images/home/pm_logo.webp';
import FB from '../images/footer/fb.svg';
import Twitter from '../images/footer/twitter.svg';
import Instagram from '../images/footer/instagram.svg';
import '../styles/header.css';


export default function Footer() {
  return (
    <div className = 'footer_container'>
        <div className = 'row'>
            <div className = 'col-12 col-lg-3'>
                <img src = {Logo} alt = '../logo' height={50} width={50}/>
                <div>© loremipsum 2023. All rights reserved. </div>
            </div>

            <div className = 'col-12 col-lg-6'>
                <div className = 'logo_section'>
                    <a className = 'link_tag' href='#'>Privacy Policy</a>
                    <a className = 'link_tag' href='#'>Terms & Conditions</a>
                    <a className = 'link_tag' href='#'>About Us</a>
                </div>
            </div>

            <div className = 'col-12 col-lg-3'>
                <div className = 'logo_section'>
                    <a className = 'link_tag' href='#'> <img src = {FB} alt = '../fb'/> </a>
                    <a className = 'link_tag' href='#'><img src = {Twitter} alt = '../fb'/></a>
                    <a className = 'link_tag' href='#'><img src = {Instagram} alt = '../fb'/></a>
                </div>
            </div>
        </div>
    </div>
  )
}
