import React from 'react'
const Main = () => {
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className='row mt-5 py-3'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <p className='xl-txt purple'><b>We Help you</b> to grow your Business</p>
                            <p className='xs-txt purple my-4'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button className='primary-btn'>GET STARTED</button>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <div className='main-img'>
                                <img src={require('../../Assets/Images/discussion.png')} width={"100%"} height="100%" alt='newImg' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services">
                <div className="container">
                    <p className='purple fw-bold mb-0 lg-txt text-center'>What We Do</p>
                    <p className='purple lg-txt text-center'>
                        For Your Business
                    </p>
                    <div className="business-set">
                        <div className="business-box">
                            <div className='small-box1'>
                                <img src={require('../../Assets/Images/globe.png')} alt="newImg" />
                            </div>
                            <p className='xs-txt fw-bold purple text-uppercase'>Website Design</p>
                            <p className='xs-txt purple'>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className="business-box">
                            <div className='small-box1'>
                                <img src={require('../../Assets/Images/computer.png')} alt="newImg" />
                            </div>
                            <p className='xs-txt fw-bold text-uppercase'>Web Development</p>
                            <p className='xs-txt'>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className="business-box">
                            <div className='small-box2'>
                                <img src={require('../../Assets/Images/app-development.png')} alt="newImg" />
                            </div>
                            <p className='xs-txt fw-bold purple text-uppercase'>Mobile APP Development</p>
                            <p className='xs-txt purple'>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="aboutus">
                <div className="container">
                    <div className='row mt-5 py-3'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto'>
                            <div className='about-img'>
                                <img src={require('../../Assets/Images/aboutus.jpg')} width={"100%"} height="100%" alt='newImg' />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto py-3'>
                            <h1 className='lg-txt purple fw-bold mb-0'>About Us</h1>
                            <h1 className='lg-txt purple mb-2'>Fake or Real</h1>
                            <p className='xs-txt purple'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p className='xs-txt purple'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button className='primary-btn mt-2'>GET STARTED</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id='experts' style={{ background: "#FFDED44D" }}>
                <div className='container'>
                    <div className="row">
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <h1 className='lg-txt purple fw-bold mb-0'>Our Recent Work</h1>
                            <h1 className='lg-txt purple'>By Our Experts</h1>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto'>
                            <p className='xs-txt'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>

                    </div>
                    <div className="business-set my-4">
                        <div className="recent-work">
                            <div className='work-img'>
                                <img src={require('../../Assets/Images/photo2.png')} width="100%" height="100%" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                <p className='fw-bold sm-txt mb-0 purple'>UI Soup</p>
                                <button className='view-btn'>View Work</button>
                            </div>
                        </div>
                        <div className="recent-work">
                            <div className='work-img'>
                                <img src={require('../../Assets/Images/photo1.png')} width="100%" height="100%" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                <p className='fw-bold sm-txt mb-0 purple'>UI Soup</p>
                                <button className='view-btn'>View Work</button>
                            </div>
                        </div>
                        <div className="recent-work">
                            <div className='work-img'>
                                <img src={require('../../Assets/Images/photo2.png')} width="100%" height="100%" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                <p className='fw-bold sm-txt mb-0 purple'>UI Soup</p>
                                <button className='view-btn'>View Work</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials">
                <div className="container">
                    <p className='purple fw-bold mb-0 lg-txt text-center'>Our Testimonials</p>
                    <p className='purple lg-txt text-center'>
                        What Our Clients Are Saying
                    </p>
                    <div className="business-set">
                        <div className="testimonial-box">
                            <i className="bi bi-quote"></i>
                            <p className='xs-txt purple'>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                            </p>
                            <div className='d-flex align-items-center'>
                                <i className='bi bi-dash yellow'></i>
                                <h6 className='xs-txt purple fw-bold mb-0'>UI Soup</h6>
                            </div>
                        </div>

                        <div className="testimonial-box">
                            <i className="bi bi-quote"></i>
                            <p className='xs-txt purple'>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                            </p>
                            <div className='d-flex align-items-center'>
                                <i className='bi bi-dash yellow'></i>
                                <h6 className='xs-txt purple fw-bold mb-0'>UI Soup</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Main