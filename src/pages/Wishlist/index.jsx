import React from "react";
import { useWishlist } from "react-use-wishlist";
import ShopCard from "../../components/ShopCard/ShopCard";
import '../Wishlist/style.scss'
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { NavLink } from 'react-router-dom'
import Recommended from "../../components/Recommended";
import { VscHeartFilled } from "react-icons/vsc";

import { globalState } from '../../Context/globalContext';
import i18n from '../../i18n/i18next';
import { useTranslation } from 'react-i18next';

const Wishlist = () => {
  const { items } = useWishlist()
  const { removeWishlistItem } = useWishlist();
  const {addItem} = useCart()

  const toggleFunc = (myProduct) => {
    removeWishlistItem(myProduct);
  };
  const myArray = [...new Map(items.map((item) => [item.id, item])).values()];

  const ChangeMyLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { t } = useTranslation()

  return (
    <>
      {/* {myArray.map((item) => {
        return <ShopCard shopProduct={item}/>
      })} */}
      <section className="grl-s">
        <h1>{t("wishlist.0")}</h1>
      </section>
      <section className="wish-s">
        <div className="container h-100">
          {myArray.length == 0 ? (
            <>
            <section className="empty">
            <VscHeartFilled className="svg"/>
            <p>{t("cart.12")}</p>
            <button className="tn"><NavLink to="/shop">{t("cart.13")}</NavLink></button>
            </section>
            <section className="eb">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-12">
                    <div className="hbr">
                      <h1>{t("wishlist.5")}</h1>
                    </div>
                    
                  </div>
                  <Recommended/>
                </div>
              </div>
            </section>
            </>
          ) : (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">{t("wishlist.1")}</th>
                  <th scope="col">{t("wishlist.2")}</th>
                  <th scope="col">{t("wishlist.3")}</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {myArray.map((item, index) => {
                  return (
                    <tr style={{ height: '200px', width: '100%' }}>
                      <td>
                        <div className="in" style={{ justifyContent: 'space-between' }}>
                          <button className="btn"
                          onClick={() => {
                            toggleFunc(item.id);
                          }}
                          >
                            X
                          </button>
                          <img src={item.img} alt="" style={{ width: "110px", height: 'auto' }} />
                          <h5>{item.title}</h5>

                        </div>

                      </td>

                      <td>
                        <div className="in">
                          <p>${item.price}.00</p>
                        </div></td>

                      <td>
                        <div className="in">
                          <p style={{color: '#8b8b8b'}}>In Stock</p>
                        </div>

                      </td>

                      <td>
                        <div className="in">
                        <button className="tn"
                        onClick={() => {
                          addItem(item)
                          toast.success('Product succesfully added')
                        }}>{t("wishlist.4")}</button>
                        </div>
                      </td>

                    </tr>
                  );
                })}
              </tbody>


            </table>
          )}
        </div>
      </section>
    </>
  );
};

export default Wishlist;

// {items.map((item) => {
//   return <ShopCard shopProduct={item} />;
// })}