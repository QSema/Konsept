import React from "react";
import { useCart } from "react-use-cart";
import '../Cart/style.scss'
import { Checkbox } from 'antd';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from 'react-router-dom'
import Recommended from "../../components/Recommended";

import { globalState } from '../../Context/globalContext';
import i18n from '../../i18n/i18next';
import { useTranslation } from 'react-i18next';


const Cart = () => {
  const { items, removeItem, updateItemQuantity, cartTotal, totalItems } = useCart();
  const navigate = useNavigate()
  console.log(items);
  const checkUser = () => {
    let user = localStorage.getItem('newUser') || localStorage.getItem('admin')
    if (user !== null) {
      navigate('/checkout')
    }
    else {
      alert('Zehmet olmasa giris edin')
    }
  }

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const ChangeMyLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { t } = useTranslation()
  return (
    <>
    <section className="lrg-s">
      <h1>{t("cart.0")}</h1>
    </section>
      <section className="Cart-s">
        <div className="container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
          {items.length == 0 ? (
            <>
            <section className="empty">
            <FiShoppingBag className="svg"/>
            <p>{t("cart.12")}</p>
            <button className="tn"><NavLink to="/shop">{t("cart.13")}</NavLink></button>
            </section>
            <section className="eb">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-12">
                    <div className="hbr">
                      <h1>{t("cart.14")}</h1>
                    </div>
                    
                  </div>
                  <Recommended/>
                </div>
              </div>
            </section>
            </>
          ) : (
            <>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">{t("cart.1")}</th>
                  <th scope="col">{t("cart.2")}</th>
                  <th scope="col">{t("cart.3")}</th>
                  <th scope="col">{t("cart.4")}</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr style={{ height: '200px' }}>
                      <td>
                        <div className="in" style={{ justifyContent: 'space-between' }}>
                          <button className="btn"
                            onClick={() => {
                              removeItem(item.id);
                              toast.error("Product succesfully removed");
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
                          <div className="grey">
                            <button
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                            {item.quantity}
                            <button
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                            </div>

                        </div>

                      </td>

                      <td>
                        <div className="in">
                          <p>${item.price * item.quantity}.00</p>
                        </div>
                      </td>

                    </tr>
                  );
                })}
              </tbody>


            </table>
            <div className="tOut">
            <div className="cupon">
              <div className="apply">
                <input type="text" placeholder={t("cart.5")} />
                <button className="tn">{t("cart.6")}</button>
              </div>
              <div className="update">
                {/* <button className="tn">Update Cart</button> */}
              </div>
            </div>
            <div className="total">
              <div className="first">
                <h2>{t("cart.7")}</h2>
                <div className="sub">
                  <div className="to">
                    <p>{t("cart.8")}</p>
                  </div>
                  <div className="tal">
                    <p>{totalItems}</p>
                  </div>
                </div>
              </div>
              <div className="second">
                <div className="sub">
                  <div className="to">
                    <p>{t("cart.9")}</p>
                  </div>
                  <div className="tal">
                    <p>Shipping to <strong>CA</strong></p>
                    <p>Change address</p>
                  </div>
                </div>
              </div>
              <div className="thirth">
              <div className="sub">
                  <div className="to">
                    <p>{t("cart.10")}</p>
                  </div>
                  <div className="tal">
                    <p>${cartTotal}.00</p>
                  </div>
                </div>
              </div>
              <div className="last">
              <button onClick={checkUser}
              className="tn">{t("cart.11")}</button>
              </div>
            </div>
            </div>
            </>
          )}
          
          {/* <h1>Cart Total : {cartTotal}$</h1>
              <h1>Total Items : {totalItems}</h1> */}
        </div>
      </section>

    </>
  );
};

export default Cart;