import React, { useContext } from 'react'
import { globalState } from '../../Context/globalContext';
import { NavLink, useParams } from 'react-router-dom';
import '../Detail/style.scss'
import { CiStar } from "react-icons/ci";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import WishlistBtn from '../../components/WishBtn';
import Recommended from '../../components/Recommended';
import { useWishlist } from 'react-use-wishlist';
// import { globalState } from '../../Context/globalContext';
import i18n from '../../i18n/i18next';
import { useTranslation } from 'react-i18next';

const Detail = () => {

    const { updateItemQuantity, addItem } = useCart();
    const { inWishlist } = useWishlist()

    const { id } = useParams()
    const { state } = useContext(globalState)
    console.log(state);

    let detailedProducts = state.find((item) => item.id == id)

    const ChangeMyLanguage = (lang) => {
        i18n.changeLanguage(lang)
      }
      const { t } = useTranslation()
    return (
        <>
            <section className='detail-s'>
                <div className="det">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="mn">
                                    <div className="images">
                                        <div className="right">
                                            <div className="d1">
                                                <img src={detailedProducts.img} alt="" />
                                            </div>
                                            <div className="d2">
                                                <img src={detailedProducts.img} alt="" />
                                            </div>
                                            <div className="d3">
                                                <img src={detailedProducts.img} alt="" />
                                            </div>
                                            <div className="d4">
                                                <img src={detailedProducts.img} alt="" />
                                            </div>
                                        </div>
                                        <div className="center" style={{ backgroundImage: `url(${detailedProducts.img})` }}>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="mn">
                                    <div className="about">
                                        <div className="dv1">
                                            <h2>{detailedProducts.title}</h2>
                                            <p>${detailedProducts.price}.00</p>
                                            <div className="rew">
                                                <ul>
                                                    <li><CiStar /></li>
                                                    <li><CiStar /></li>
                                                    <li><CiStar /></li>
                                                    <li><CiStar /></li>
                                                    <li><CiStar style={{ color: '#8b8b8b' }} /></li>
                                                </ul>
                                                <p>(2 costumer rewiews)</p>
                                            </div>

                                        </div>
                                        <div className="dv2">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                        </div>


                                        <div className="dv3">
                                            <div className="ort">

                                                <button className="tn"
                                                    onClick={() => {
                                                        addItem(detailedProducts)
                                                        toast.success('Product succesfully added')
                                                    }}>{t("wishlist.4")}</button>
                                            </div>
                                        </div>
                                        <div className="dv4">
                                            <div className="lis">
                                                <p className='p'>SKU:</p>
                                                <span>0124</span>
                                            </div>
                                            <div className="lis">
                                                <p className='p'>CATEGORIES:</p>
                                                <NavLink>{detailedProducts.category}</NavLink>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12">
                                    <div className="hbr">
                                        <h1>{t("wishlist.5")}</h1>
                                    </div>

                                </div>
                                <Recommended />
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Detail