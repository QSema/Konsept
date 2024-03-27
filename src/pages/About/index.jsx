import React from 'react'
import '../About/style.scss'
import { NavLink } from 'react-router-dom'
import s7 from './img/s37.png'
import client1 from './img/Clients-1.png'
import client2 from './img/Clients-2.png'
import client3 from './img/Clients-3.png'
import client4 from './img/Clients-4.png'
import client5 from './img/home2-clients.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


import s1 from './img/s31.png'
import s2 from './img/s32.png'
import s3 from './img/s33.png'
import s5 from './img/productsingle.png'
import s6 from './img/s36.png'


import { globalState } from '../../Context/globalContext';
import i18n from '../../i18n/i18next';
import { useTranslation } from 'react-i18next';

const About = () => {
  const ChangeMyLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { t } = useTranslation()
  return (
    <>
      <section className="gl">
        <h1>{t("header.2")}</h1>
      </section>

      <section className='sec1'>
        <div className="read">
          <div className="inner">
            <span>{t("home-s8.0")}</span>
            <h2>{t("home-s8.1")}</h2>
          </div>
        </div>
        <div className="blogs">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="out">
                  <div className="inside">
                    <div className="top"></div>
                    <div className="think">
                      <div className="ups">
                        <p>Tables, Wall Plates - March 27, 2020</p>
                        <h3>Thinking Of A Place</h3>
                      </div>
                      <p>Lorem ipsum dolor sit amet, debet consulatu ne vix, vel ut iusto postea, hinc choro per id. Vide</p>

                      <NavLink to='/blog'>Read More</NavLink>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="out">
                  <div className="inside">
                    <div className="top2"></div>
                    <div className="think">
                      <div className="ups">
                        <p>Wall Plates - April 9, 2020</p>
                        <h3>Perfect Decoration</h3>
                      </div>
                      <p>In fugit possit vis, sonet laudem albucius vel ea. Nulla saperet scripserit te cum. Pri adhuc cop</p>

                      <NavLink to='/blog'>Read More</NavLink>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="out">
                  <div className="inside">
                    <div className="top3"></div>
                    <div className="think">
                      <div className="ups">
                        <p>Wall Plates - April 9, 2020</p>
                        <h3>Interior Design Style</h3>
                      </div>
                      <p>Lorem ipsum dolor sit amet, debet consulatu ne vix, vel ut iusto postea, hinc choro per id. Vide</p>

                      <NavLink to='/blog'>Read More</NavLink>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='sec2'>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-0">
              <div className="main">
                <img className='img7' src={s7} alt="" />
                <div className="circle"></div>
              </div>

            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-12 p-0">
              <div className="glen">
                <div className="test">
                  <h1>{t("home-s6.0")}</h1>
                  <div className="anna">
                    <h3>{t("home-s6.1")}</h3>
                    <span>Prescott C.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='sec3'>
        <div className="play">
          <div className="video">
            <div className="pl">
              <iframe title="vimeo-player" src="https://player.vimeo.com/video/117179035?h=f6963fde18" width="640" height="360" frameborder="0" allowfullscreen>{t("home-s5.0")}</iframe>
            </div>
          </div>
        </div>
      </section>

      <section className='sec4'>
        <div className="container h-100">
          <div className="row d-flex justify-content-space-between  h-100">
            <div className="col-lg-3 col-md-2 col-sm-4 col-12 p-3 ">
              <div className="main">
                <img src={client1} alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-12 p-3">
              <div className="main">
                <img src={client2} alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-12 p-3">
              <div className="main">
                <img src={client3} alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-12 p-3">
              <div className="main">
                <img src={client4} alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-4 col-12 p-3">
              <div className="main">
                <img src={client5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='s4t'>
        <div className="differentt">
          <div className="upt">
            <p>{t("home-s3.0")}</p>
            <h1>{t("home-s3.1")}</h1>
          </div>
          <div className="downt">
            <div className="innert">
              <p>Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
              <button>{t("home-s10.2")}</button>
            </div>
          </div>
        </div>

        <img className='img1t' src={s1} alt="" />
        <img className='img2t' src={s2} alt="" />
        <img className='img3t' src={s3} alt="" />
        <img className='img5t' src={s5} alt="" />
        <img className='img7t' src={s7} alt="" />


      </section>

      <section className="sec6">
        <div className="up">
          <p>{t("home-s10.0")}</p>
          <h2>{t("home-s10.1")}</h2>
        </div>

        <div className="swip">
          <div className="container h-100">
            <Swiper
              watchSlidesProgress={true}
              loop={true}
              slidesPerView={4}
              spaceBetween={20}
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="mySwiper">

              <SwiperSlide>
                <div className="inside1">
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="inside2">
                  <div className="photo"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="inside3">
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="inside4">
                  <div className="photo"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="inside5">
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="inside6">
                  <div className="photo"></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
      </section>
    </>
  )
}

export default About