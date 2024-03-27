import React, { useContext, useState } from 'react'
import '../Header/style.scss'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { PiHeartStraight } from "react-icons/pi";
import { FiShoppingBag } from "react-icons/fi";
import i18n from '../../i18n/i18next';
import { useTranslation } from 'react-i18next';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import Auth from '../../components/AuthButton';
import { Switch, Space } from 'antd';
import { FaMoon, FaSun } from "react-icons/fa";
import { GlobalThemeContext } from '../../Context/ThemeContext.';
import { Button, Modal } from 'antd';
import { CiMenuFries } from "react-icons/ci";


const Header = () => {
  const { items, totalItems } = useCart();
  const { totalWishlistItems } = useWishlist()
  const { toggleTheme, theme } = useContext(GlobalThemeContext)
  const ChangeMyLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { t } = useTranslation()

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  return (
    <>
      <header>
        <div className="container h-100">
          <div className="row h-100">
            <div className="main">


              <div className="toP">
                <div className="fifty">
                  <button style={{ marginRight: '10px', borderRadius: '5px', backgroundColor: '#ccd9dc', color: '#1d1d1d', border: 'none' }} onClick={() => ChangeMyLanguage("ru")}>
                    It
                  </button>
                  <button style={{ marginRight: '10px', borderRadius: '5px', backgroundColor: '#f8eee4', color: '#1d1d1d', border: 'none' }} onClick={() => ChangeMyLanguage("en")}>
                    En
                  </button>

                  <button className='but1' onClick={toggleTheme} type='button'>
                    {theme == 'dark' ? <FaMoon /> : <FaSun />}
                  </button>
                  {/* <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked /> */}
                </div>
                <div className="cont">
                  <NavLink style={{ lineHeight: '20px', fontSize: '14px', fontWeight: '400' }} className="nav-link" to='/FAQ'>
                    {t("header.5")}
                  </NavLink>
                  <NavLink style={{ lineHeight: '20px', fontSize: '14px', fontWeight: '400' }} className="nav-link" to='/contact'>
                    {t("header.6")}
                  </NavLink>
                </div>
              </div>


              <div className="mid">
                <div className="left">
                  <button style={{ backgroundColor: 'transparent', border: 'none' }} type='submit'><CiSearch style={{ width: '25px', height: 'auto', color: '#1d1d1d', }} /></button>
                  <input type="text" className="qodef-search-form-field" placeholder={t("header.4")} />
                </div>

                <div className="log">
                  <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png" alt="" />
                </div>


                <div className="righT">
                  <div className="icons">
                    <Auth />

                    <NavLink className="nav-link" to='/wishlist'>
                      <PiHeartStraight /> <span>{totalWishlistItems / 2}</span>
                    </NavLink>

                    <NavLink className="nav-link" to='/cart'>
                      <FiShoppingBag /> <span>{totalItems}</span>
                    </NavLink>
                  </div>
                </div>

                  <button className='mnU' type="primary" onClick={showModal}>
                    <CiMenuFries />
                  </button>
                  <Modal
                    title="Menu"
                    open={open}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <ul>
                      <li>
                        <NavLink className="nav-link" to='/'>
                          {t("header.0")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" to='/shop'>
                          {t("header.1")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" to='/about'>
                          {t("header.2")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" to='/blog'>
                          {t("header.3")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink style={{ lineHeight: '20px', fontSize: '14px', fontWeight: '400' }} className="nav-link" to='/FAQ'>
                          {t("header.5")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink style={{ lineHeight: '20px', fontSize: '14px', fontWeight: '400' }} className="nav-link" to='/contact'>
                          {t("header.6")}
                        </NavLink>
                      </li>
                    </ul>
                  </Modal>
              </div>
              <div className="bot">
                <div className="list">
                  <ul>
                    <li>
                      <NavLink className="nav-link" to='/'>
                        {t("header.0")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to='/shop'>
                        {t("header.1")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to='/about'>
                        {t("header.2")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to='/blog'>
                        {t("header.3")}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



        </div>
      </header>



    </>
  )
}

export default Header