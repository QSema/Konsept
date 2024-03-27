import React from 'react'
import '../Contact/style.scss'
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { globalState } from '../../Context/globalContext';
import i18n from '../../i18n/i18next';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const ChangeMyLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { t } = useTranslation()
  return (
    <>
      <section className="gl-s">
        <h1>{t("contact.0")}</h1>
      </section>

      <section className='contact-s'>
        <div className="top">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-1">
                <div className="main" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="paragraf">
                    <div className="us">
                      <span>{t("contact.0")}</span>
                      <h2>{t("contact.1")}</h2>
                      <div className="dp">
                        <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
                      </div>
                    </div>
                    <div className="office">
                      <div className="off">
                        <h4>{t("contact.2")}</h4>
                        <ul>
                          <li>1316 Abbot Kinney Blvd.</li>
                          <li>Copenhagen CA 90291</li>
                          <li>+112 345 6789</li>
                          <li>konsept@example.com</li>
                        </ul>
                      </div>

                      <div className="off">
                        <h4>{t("contact.3")}</h4>
                        <ul>
                          <li>1316 Abbot Kinney Blvd.</li>
                          <li>Copenhagen CA 90291</li>
                          <li>+112 345 6789</li>
                          <li>konsept@example.com</li>
                        </ul>
                      </div>
                    </div>
                    <div className="logo">
                      <ul>
                        <li><div className="circle"><FaFacebook /></div></li>
                        <li><div className="circle"><FaInstagram /></div></li>
                        <li><div className="circle"><FaXTwitter /></div></li>
                        <li><div className="circle"><FaYoutube /></div></li>
                      </ul>
                    </div>
                  </div>
                </div>


              </div>


              <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-1">
                <div className="main" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="inp">
                    <div className="addres">
                      <input className='i1' type="text" name="" id="" placeholder={t("contact.4")}/>
                      <input className='i2' type="email" name="" id="" placeholder={t("contact.5")}/>
                    </div>
                    <div className="com">
                      <textarea name="" id="" cols="30" rows="10" placeholder={t("contact.6")}></textarea>
                    </div>
                    <div className="bu">
                      <button>{t("contact.7")}</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <div className="main"  style={{ width: '100%', height: '100%' }}>
                  <div className="house">
                    <div className="tp">
                    </div>
                    <div className="off">
                        <h4>{t("contact.8")}</h4>
                        <ul>
                          <li>1316 Abbot Kinney Blvd.</li>
                          <li>Copenhagen CA 90291</li>
                          <li>+112 345 6789</li>
                          <li>konsept@example.com</li>
                        </ul>
                      </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <div className="main"  style={{ width: '100%', height: '100%' }}>
                  <div className="house">
                    <div className="tp2">
                    </div>
                    <div className="off">
                        <h4>{t("contact.8")}</h4>
                        <ul>
                          <li>1316 Abbot Kinney Blvd.</li>
                          <li>Copenhagen CA 90291</li>
                          <li>+112 345 6789</li>
                          <li>konsept@example.com</li>
                        </ul>
                      </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <div className="main"  style={{ width: '100%', height: '100%' }}>
                  <div className="house">
                    <div className="tp3">
                    </div>
                    <div className="off">
                        <h4>{t("contact.8")}</h4>
                        <ul>
                          <li>1316 Abbot Kinney Blvd.</li>
                          <li>Copenhagen CA 90291</li>
                          <li>+112 345 6789</li>
                          <li>konsept@example.com</li>
                        </ul>
                      </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <div className="main"  style={{ width: '100%', height: '100%' }}>
                  <div className="house">
                    <div className="tp4">
                    </div>
                    <div className="off">
                        <h4>{t("contact.8")}</h4>
                        <ul>
                          <li>1316 Abbot Kinney Blvd.</li>
                          <li>Copenhagen CA 90291</li>
                          <li>+112 345 6789</li>
                          <li>konsept@example.com</li>
                        </ul>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact