import React from 'react'
import '../Footer/style.scss'
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="up">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 p-5">
                <div style={{ width: '100%', height: '100%' }} className="first">
                  <div className="ins">
                    <h4>Contact</h4>
                    <p style={{ marginBottom: '5px' }}>+112 345 6789</p>
                    <p>1316 Abbot Kinney Blvd.</p>
                    <p>Copenhagen CA 90291</p>

                    <ul>
                      <li><div className="circle"><FaFacebook  /></div></li>
                      <li><div className="circle"><FaInstagram  /></div></li>
                      <li><div className="circle"><FaXTwitter  /></div></li>
                      <li><div className="circle"><FaYoutube /></div></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 p-5">
                <div style={{ width: '100%', height: '100%' }} className="first">
                  <div className="ic">
                    <h4>HELP</h4>
                    <ul>
                      <li>FAQs</li>
                      <li>Pricing Plans</li>
                      <li>Track</li>
                      <li>Your Order</li>
                      <li>My Account</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 p-5">
                <div style={{ width: '100%', height: '100%' }} className="first">
                  <div className="ide">
                    <h4>ABOUT US</h4>
                    <ul>
                      <li>Our Story</li>
                      <li>Job Opportunities</li>
                      <li>Store Locator</li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 p-5">
                <div style={{ width: '100%', height: '100%' }} className="first">
                  <div className="de">
                    <h4>CUSTOMER SERVICE</h4>
                    <ul>
                      <li>My Account</li>
                      <li>Terms of Use</li>
                      <li>Deliveries & Returns</li>
                      <li>Gift Card</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="down">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-1">
                <div style={{ width: '100%', height: '100%' }} className="second">
                  <div className="qode">
                    <p>© 2020 Qode Interactive, All Rights Reserved</p>
                  </div>
                  
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-1">
                <div style={{ width: '100%', height: '100%', }} className="second">
                  <div className="ici">
                    <ul>
                      <li><div className="circle"><FaFacebook  /></div></li>
                      <li><div className="circle"><FaInstagram  /></div></li>
                      <li><div className="circle"><FaXTwitter  /></div></li>
                      <li><div className="circle"><FaYoutube  /></div></li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer