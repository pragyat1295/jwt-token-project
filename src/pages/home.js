import React, { useState } from 'react';
import Star from '../images/star.svg';
import Lady from '../images/home/lady.svg';
import Waves from '../images/home/waves.svg';
import Back from '../images/header/arrow_back.svg';
import Gear from '../images/home/feature_gear.svg';
import Globe from '../images/home/globe.svg';
import Form from '../components/ContactForm';
import Doctor1 from '../images/home/doctor1.svg';
import Doctor2 from '../images/home/doctor2.svg';
import faq from '../data/faq';
import '../styles/home.css';
// import Carousel, { CarouselItem } from '../components/Carousel'
import Carousel from '../components/Carousel2';

export default function Home({ Logout }) {
    const [selected, setSelected] = useState(null);

    const toggle = (id) => {
        if (id === selected) {
            return setSelected(null);
        }

        setSelected(id);
    };
    // console.log(faq);
    return (
        <div>
            <div className='top_container_home page_layout'>


                {/* -------------- Top content description ----------- */}

                <div className='row'>
                    <div className='col-9'>
                        <div >
                            <div className='head_content'>
                                <span>Reproductive health</span>
                                <br />
                                <span style={{ color: '#F84F7B' }}>reinvented</span>
                            </div>

                            <div className='filler_content'>
                                Lorem ipsum dolor sit amet consectetur. Eu cursus lorem iaculis vitae pulvinar posuere. Turpis facilisis
                                pellentesque nascetur faucibus placerat. Cursus
                            </div>

                            <div >
                                <button className='starterd_btn center'>
                                    Get started
                                    <img src={Back} alt='../back' />
                                </button>
                            </div>
                        </div>
                        <div>
                            <img src={Waves} alt='../waves' />
                        </div>
                    </div>
                    <div className='col-3'>
                        <img src={Lady} alt='../lady' />
                    </div>
                </div>

                {/* =================================================== */}

                {/* ----------------- Our Features ---------------- */}

                <div className='features_block'>
                    <div className='features_head center'>
                        Our Features
                    </div>

                    {/* ----------- Features list ---------- */}
                    <div className='row center'>
                        <div className='col-12 col-md-4 col-lg-3'>
                            <div className='features_box'>
                                <div>
                                    <img src={Gear} alt='../gear' />
                                </div>
                                <div>
                                    <div className='feature_head'>
                                        Lorem Ipsum
                                    </div>
                                    <div className='features_desc'>
                                        Lorem ipsum dolor sit amet consectetur.
                                        In convallis lobortis nunc et.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-4 col-lg-3'>
                            <div className='features_box'>
                                <div>
                                    <img src={Gear} alt='../gear' />
                                </div>
                                <div>
                                    <div className='feature_head'>
                                        Lorem Ipsum
                                    </div>
                                    <div className='features_desc'>
                                        Lorem ipsum dolor sit amet consectetur.
                                        In convallis lobortis nunc et.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-4 col-lg-3'>
                            <div className='features_box'>
                                <div>
                                    <img src={Globe} alt='../gear' />
                                </div>
                                <div>
                                    <div className='feature_head'>
                                        Lorem Ipsum
                                    </div>
                                    <div className='features_desc'>
                                        Lorem ipsum dolor sit amet consectetur.
                                        In convallis lobortis nunc et.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------------- Carousel -------------- */}

                <div className="box"></div>
                {/* <div className='box_content'>
                <h1>ABC</h1>
            </div> */}
                <div className='box_content'><Carousel /></div>


                <div className="box_rev"></div>



                {/* ============================================= */}

                {/* ------------ Some doctor advise */}
                <div className='row'>
                    <div className='col-12 col-lg-6 order-2 order-lg-1' style={{ margin: 'auto' }}>
                        <div className='feature_head' style={{ fontWeight: '300' }}>
                            Lorem Ipsum
                        </div>
                        <div className='features_desc' style={{ opacity: '0.5' }}>
                            Lorem ipsum dolor sit amet consectetur.
                            Consectetur velit consequat orci arcu
                            egestas enim morbi neque pharetra.
                            Id feugiat ullamcorper quis suscipit
                            tempor ullamcorper aliquam consequat.
                            In euismod a in amet. Interdum ut
                            phasellus aliquet eget molestie risus velit ipsum consectetur.
                            Amet bibendum cras porttitor nullam.
                        </div>
                        <div>
                            <button className='starterd_btn'>
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 order-1 order-lg-2'>
                        <img src={Doctor1} alt='../doctor1' />
                    </div>
                </div>


                {/* ----------- Doctor2 -------------- */}

                <div className='row'>

                    <div className='col-12 col-lg-6'>
                        <img src={Doctor2} alt='../doctor' />
                    </div>
                    <div className='col-12 col-lg-6' style={{ margin: 'auto' }}>
                        <div className='feature_head' style={{ fontWeight: '300' }}>
                            Lorem Ipsum
                        </div>
                        <div className='features_desc' style={{ opacity: '0.5' }}>
                            Lorem ipsum dolor sit amet consectetur.
                            Consectetur velit consequat orci arcu
                            egestas enim morbi neque pharetra.
                            Id feugiat ullamcorper quis suscipit
                            tempor ullamcorper aliquam consequat.
                            In euismod a in amet. Interdum ut
                            phasellus aliquet eget molestie risus velit ipsum consectetur.
                            Amet bibendum cras porttitor nullam.
                        </div>
                        <div>
                            <button className='starterd_btn'>
                                Read More
                            </button>
                        </div>
                    </div>
                </div>



                {/* ====================================================== */}


                {/* ------------ FAQs -------------------------------- */}

                <div className='faq_block'>
                    <div className='features_head center'>
                        Frequently Asked Questions (FAQs)
                    </div>

                    {
                        faq.map((item) => {
                            return (
                                <div className='row questions' role='button' key={item.id}
                                    onClick={() => toggle(item.id)}>
                                    <div className='col-9'>
                                        {item.question}
                                    </div>
                                    <div className='col-2 plus'>
                                        {selected === item.id ? <span>-</span> : <span>+</span>}
                                    </div>

                                    {
                                        selected === item.id ?
                                            <div className='answers'>
                                                {item.answer}
                                            </div> : null
                                    }

                                </div>
                            )
                        })
                    }

                </div>


                {/* <div style = {{background: '#F84F7B', height: '50vh', width: '100vw'}}>
                    <img src = {Star} alt = '../stars' height = {370} width = {370}
                    className = 'star_img' />

                  </div> */}
            </div>

            <div>
                <Form />
            </div>
        </div>
    )
}
