import React from 'react'
import instagramLogo from '../../assets/images/instagramLogo.png';
import linkedInLogo from '../../assets/images/linkedInLogo.png';
import facebookLogo from '../../assets/images/facebookLogo.jpg';

const Footer = () => {
    return (
        <footer className="page-footer mt-5 font-small" >
            <hr></hr>
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3"></hr>
                        <div className="col-md-3 mb-md-0 mb-3">
                          <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/products">Products</a>
                                </li>
                                <li>
                                    <a href="/MYOG">MYOG</a>
                                </li>
                                <li>
                                    <a href="/contractwork">Contract Work</a>
                                </li>
                                <li>
                                    <a href="/About">About</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Social Media</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mindsetpacks/">
                                        <img src={instagramLogo} style={{width: "3rem"}} alt="instagram url"/>
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                                        <img src={facebookLogo} style={{width: "3rem"}} alt="facebook url"/>
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
                                        <img src={linkedInLogo} style={{width: "3rem"}} alt="linkedIn url"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <a href="https://mindsetpacks.com/"> mindsetpacks.com</a>
            </div>
        </footer>
    )
}

export default Footer;