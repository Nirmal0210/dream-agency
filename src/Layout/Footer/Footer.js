import React from 'react'
const Footer = () => {
    return (
        <section id='contactus'>
            <div style={{ background: "#000000" }}>
                <div className='container'>
                    <div className="row">
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto'>
                            <p className='md-txt fw-bold white'>Dream Agency</p>
                            <p className='xs-txt white'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            <p className='xs-txt white text-uppercase'>Get In Touch</p>
                            <div className='d-flex'>
                                <input className='email-input' placeholder='ENTER YOUR EMAIL' /><button className='email-btn'>SEND</button>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <div className='footer-img'>
                                <img src={require('../../Assets/Images/world.png')} alt="worldImg" width={"100%"} height={"100%"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer