import React from 'react'
import '../CheckOut/style.scss'
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { globalState } from '../../Context/globalContext';
import i18n from '../../i18n/i18next';
import { useTranslation } from 'react-i18next';

const CheckOut = () => {
  const { items, cartTotal, totalItems, checkUser, setItems} = useCart();

  const navigate = useNavigate()
 
  const empty = () => {
    setItems([])
    toast.success('Products have been bought successfully')
    navigate('/cart')
  }

  const ChangeMyLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { t } = useTranslation()
  return (
    <>
      <section className="cks">
        <h1>{t("checkout.0")}</h1>
      </section>

      <section className='checkout-s'>
        <div className="fr">
          <div className="container">
            <form>
              <div className="hd">
                <h2>{t("checkout.1")}</h2>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">{t("checkout.3")}</label>
                <input
                  type="text"
                  className="form-control"
                  name='text'
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">{t("checkout.4")}</label>
                <input
                  type="text"
                  className="form-control"
                  name='text'
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">{t("checkout.5")}</label>
                <input
                  type="text"
                  className="form-control"
                  name='text'
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">{t("checkout.5")}</label>
                <input
                  type="text"
                  className="form-control"
                  name='text'
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">{t("checkout.6")}</label>
                <input
                  type="text"
                  className="form-control"
                  name='text'
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">{t("checkout.7")}</label>
                <input
                  type="text"
                  className="form-control"
                  name='text'
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">{t("checkout.8")}</label>
                <input
                  type="text"
                  className="form-control"
                  name='text'
                />
              </div>
            </form>

          </div>
        </div>
        <div className="tota">
          <div className="container h-100" >
            <div className="ins">
            <div className="first">
              <h2>{t("checkout.9")}</h2>
              {items.map((item, index) => {
                return (
                  <>
                   <div className="sub">
                  <div className="to">
                    <p>{item.title}</p>
                  </div>
                  <div className="tal">
                    <p>{item.quantity}</p>
                  </div>
                </div>
                  </>
                )
               
              })}
            </div>
            <div className="second">
              <div className="sub">
                <div className="to">
                  <p className='p' style={{margin: '10'}}>{t("checkout.9")}</p>
                </div>
                <div className="tal">
                  <p>${cartTotal}.00</p>
                </div>
              </div>
            </div>
            <div className="last">
              <button
                className="tn" onClick={empty}>{t("checkout.11")}</button>
            </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default CheckOut