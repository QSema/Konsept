import React from 'react'
import { PiEye } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import WishlistBtn from '../../components/WishBtn';
import '../ShopCard/style.scss'
import { useCart } from 'react-use-cart';
import { toast } from "react-toastify";

const ShopCard = ({ shopProduct }) => {

    const { addItem } = useCart()
    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-flex align-items-center p-3">
                <div className="mn">
                    <div className="bor">
                        <img src={shopProduct.img} alt="" />
                        <div className="gmi">
                            <div className="heart">
                                <WishlistBtn klikEtdiyimMehsul={shopProduct} />
                                <NavLink to={`/product/${shopProduct.id}`}><PiEye /></NavLink>
                            </div>
                            <button className='add' onClick={() => {
                                addItem(shopProduct)
                                toast.success('Product succesfully added')
                            }}>Add To Cart</button>
                        </div>


                        <div className="bm">
                            <div className="tp">
                                <div className="right">
                                    <NavLink to={`/product/${shopProduct.id}`}><h5>{shopProduct.title}</h5></NavLink>
                                    <NavLink to="/shop">{shopProduct.category}</NavLink>
                                </div>
                                <p>${shopProduct.price}.00</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ShopCard