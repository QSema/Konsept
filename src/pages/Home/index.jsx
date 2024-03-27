import React, { useContext, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import '../Home/style.scss'

import { NavLink } from 'react-router-dom'

import s1 from './img/s31.png'
import s2 from './img/s32.png'
import s3 from './img/s33.png'
import s4 from './img/s34.jpg'
import s5 from './img/s35.jpg'
import s6 from './img/s36.png'
import s7 from './img/s37.png'

import icon1 from './img/Home1_icons-2.png'
import icon2 from './img/Home1_icons-3.png'
import icon3 from './img/Home1_icons-4.png'
import icon4 from './img/Home1_icons-1.png'


import client1 from './img/Clients-1.png'
import client2 from './img/Clients-2.png'
import client3 from './img/Clients-3.png'
import client4 from './img/Clients-4.png'
import client5 from './img/home2-clients.png'


import home1 from './img/Home1_section1-3.jpg'
import home2 from './img/Home1_section1.jpg'

import { globalState } from '../../Context/globalContext';
import i18n from '../../i18n/i18next';
import { useTranslation } from 'react-i18next';


import { PiEye } from "react-icons/pi";
import WishlistBtn from '../../components/WishBtn';
import { useCart } from 'react-use-cart';
import { toast } from "react-toastify";

const Home = () => {
  const { addItem } = useCart()
  const [swiperRef, setSwiperRef] = useState(null);
  const { state } = useContext(globalState)
  const [visible, setVisible] = useState(false)
  const ChangeMyLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { t } = useTranslation()
  // let categoryChair = state.filter((item) => item.category == "Chair")

  // console.log(categoryChair);
  return (
    <>
      <section className='s1'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide1">
              <div className="inside">
                <p className='p1'>{t("home-s1.0")}</p>
                <p className='p2'>{t("home-s1.1")}</p>
                <div className="btns">
                  <button>{t("home-s1.2")}</button>
                  <button>{t("home-s1.3")}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide2">
              <div className="inside">
                <p className='p1'>{t("home-s1.4")}</p>
                <p className='p2'>{t("home-s1.5")}</p>
                <div className="btns">
                  <button>{t("home-s1.2")}</button>
                  <button>{t("home-s1.3")}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide3">
              <div className="inside">
                <p className='p1'>{t("home-s1.6")}</p>
                <p className='p2'>{t("home-s1.7")}</p>
                <div className="btns">
                  <button>{t("home-s1.2")}</button>
                  <button>{t("home-s1.3")}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>


      <section className='s2'>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bowl">
                <div className="bg">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                  >
                    {
                      state.slice(0, 3).map((item, index) => {
                        return (
                          <SwiperSlide>
                            <div className="bor" style={{ backgroundImage: `url(${item.img})` }}>
                              <div className="bm">
                                <div className="tp">
                                  <div className="right">
                                    <h5>{item.title}</h5>
                                    <NavLink to="/shop">{item.category}</NavLink>
                                  </div>
                                  <p>${item.price}.00</p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </div>

              </div>

            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="cera">
                <div className="mic">
                  <img src={home2} alt="" />
                  <div className="off">
                    <div className="up">
                      <h3>{t("home-s2.0")}</h3>
                      <NavLink className="nav-link" to='/shop'>
                        <span className='span1'>{t("home-s2.1")}</span>
                      </NavLink>
                    </div>
                    <div className="down">
                      <span className='span2'>{t("home-s2.2")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='s3'>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="cera">
                <div className="mic">
                  <img src={home1} alt="" />
                  <div className="off">
                    <div className="up">
                      <h3>{t("home-s2.0")}</h3>
                      <NavLink className="nav-link" to='/shop'>
                        <span className='span1'>{t("home-s2.1")}</span>
                      </NavLink>
                    </div>
                    <div className="down">
                      <span className='span2'>{t("home-s2.2")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bowl">
                <div className="bg">
                  <Swiper slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                  >
                    {
                      state.slice(3, 6).map((item, index) => {
                        return (
                          <SwiperSlide>
                            <div className="bor" style={{ backgroundImage: `url(${item.img})` }}>
                              <div className="bm">
                                <div className="tp">
                                  <div className="right">
                                    <h5>{item.title}</h5>
                                    <NavLink to="/shop">{item.category}</NavLink>
                                  </div>
                                  <p>${item.price}.00</p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </div>

              </div>

            </div>


          </div>
        </div>

      </section>


      <section className='s4'>
        <div className="different">
          <div className="up">
            <p>{t("home-s3.0")}</p>
            <h1>{t("home-s3.1")}</h1>
          </div>
          <div className="down">
            <div className="inner">
              <p>Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
              <button>{t("home-s3.2")}</button>
            </div>
          </div>
        </div>

        <img className='img1' src={s1} alt="" />
        <img className='img2' src={s2} alt="" />
        <img className='img3' src={s3} alt="" />
        <img className='img4' src={s4} alt="" />
        <img className='img5' src={s5} alt="" />
        <img className='img6' src={s6} alt="" />
        <img className='img7' src={s7} alt="" />


      </section>


      <section className='shh'>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-lg-12">
              <div className="summer">
                <span>{t("home-s4.0")}</span>
                <h2>{t("home-s4.1")}</h2>
              </div>
            </div>
            {
              state.slice(0, 12).map((item, index) => {
                return (
                  <div className="col-lg-2 col-md-4 col-sm-12 col-12 d-flex align-items-center p-3">
                    <div className="mn">
                      <div className="bor">
                        <img src={item.img} alt="" />
                        <div className="gmi">
                          <div className="heart">
                            <WishlistBtn klikEtdiyimMehsul={item} />
                            <NavLink to={`/product/${item.id}`}><PiEye /></NavLink>
                          </div>
                          <button className='add' onClick={() => {
                            addItem(item)
                            toast.success('Product succesfully added')
                          }}>Add To Cart</button>
                        </div>


                        <div className="bm">
                          <div className="tp">
                            <div className="right">
                              <NavLink to={`/product/${item.id}`}><h5>{item.title}</h5></NavLink>
                              <NavLink to="/shop">{item.category}</NavLink>
                            </div>
                            <p>${item.price}.00</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                )
              })
            }
          </div>
        </div>
      </section>


      <section className='s5'>
        <div className="container-fluid h-100">
          <div className="play">
            <div className="video">
              <div className="pl">
                <button onClick={() => {
                  setVisible(true)
                }}>{t("home-s5.0")}</button>
              </div>
              <iframe style={{ display: visible ? 'block' : 'none' }} title="vimeo-player" src="https://player.vimeo.com/video/117179035?h=f6963fde18" width="100%" height="50vh" frameborder="0" allowfullscreen></iframe>
            </div>

          </div>
        </div>
      </section>

      <section className='s6'>
        <div className="White">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-0">
                <div className="MAin">
                  <div className="MN">
                  <img className='img7' src={s7} alt="" />
                  <div className="circle"></div>
                  </div>
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

        </div>
        <div className="green">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <div className="ins">
                  <div className="ide">
                    <img src={icon1} alt="" />
                    <div className="more">
                      <h4>{t("home-s7.0")}</h4>
                      <span>{t("home-s7.4")}</span>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <div className="ins">
                  <div className="ide">
                    <img src={icon2} alt="" />
                    <div className="more">
                      <h4>{t("home-s7.1")}</h4>
                      <span>{t("home-s7.4")}</span>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <div className="ins">
                  <div className="ide">
                    <img src={icon3} alt="" />
                    <div className="more">
                      <h4>{t("home-s7.2")}</h4>
                      <span>{t("home-s7.4")}</span>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <div className="ins">
                  <div className="ide">
                    <img src={icon4} alt="" />
                    <div className="more">
                      <h4>{t("home-s7.3")}</h4>
                      <span>{t("home-s7.4")}</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='s7'>
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

      <section className='ons'>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="qd">
              <div className="prem">
                <div className="iu">
                  <span>{t("home-s9.0")}</span>
                  <h2>{t("home-s9.1")}</h2>
                </div>
                <div className="um">
                  <div className="in">
                    <div className="container-fluid h-100">
                      <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        autoplay={{
                          delay: 5000,
                          disableOnInteraction: false,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                      >
                        {
                          state.slice(20, 29).map((item, index) => {
                            return (
                              <SwiperSlide>
                                <div className="ici" style={{ backgroundImage: `url(${item.img})` }}>
                                  <div className="bft">
                                    <div className="name">
                                      <NavLink to={`/product/${item.id}`}><h5>{item.title}</h5></NavLink>
                                      <NavLink to="/shop">{item.category}</NavLink>
                                    </div>
                                    <div className="price">
                                      <div className="yan"><p>${item.price}.00</p></div>
                                      <div className="esas">
                                        <button className='add' onClick={() => {
                                          addItem(item)
                                          toast.success('Product succesfully added')
                                        }}>{t("home-s9.3")}</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            )
                          })
                        }
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fso">

                <div className="nik">
                  <p>{t("home-s9.2")}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='s8'>
        <div className="top">
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
        </div>

        <div className="bot">
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
        </div>
      </section >
    </>
  )
}

export default Home