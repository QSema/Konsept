import React, { useContext, useEffect, useState } from 'react'
import { globalState } from '../../Context/globalContext'
import ShopCard from '../ShopCard/ShopCard';
import { PiEye } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import WishlistBtn from '../../components/WishBtn';
import '../ShopCard/style.scss'
import { useCart } from 'react-use-cart';
import { toast } from "react-toastify";
import '../Recommended/style.scss'

const Recommended = () => {
    const { state } = useContext(globalState)
    const [data, setData] = useState(state)
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        shuffle(data);
    });

    const { addItem } = useCart()
    return (
        <>
            {data.slice(0, 4).map((item, index) => {
                return (
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12 d-flex align-items-center p-2">
                    <div className="nm2">
                        <div className="br2">
                            <img src={item.img} alt="" />
                            <div className="gi2">
                                <div className="hert2">
                                    <WishlistBtn klikEtdiyimMehsul={item} />
                                    <NavLink to={`/product/${item.id}`}><PiEye /></NavLink>
                                </div>
                                <button className='ad2' onClick={() => {
                                    addItem(item)
                                    toast.success('Product succesfully added')
                                }}>Add To Cart</button>
                            </div>
    
    
                            <div className="mb2">
                                <div className="pt2">
                                    <div className="riht2">
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
            })}
        </>
    )
}

export default Recommended