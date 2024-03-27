import React, { useContext, useEffect, useState } from 'react'
import { globalState } from '../../Context/globalContext'
import '../Shop/style.scss'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";
import { PiEye } from "react-icons/pi";
import WishlistBtn from '../../components/WishBtn';
import ShopCard from '../../components/ShopCard/ShopCard';
import { Select } from "antd";
import { Button, Modal } from 'antd';
import { CiMenuFries } from "react-icons/ci";


{/* <VscHeartFilled /> */ }

const Shop = () => {


  
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

  const { state, setState } = useContext(globalState)

  const [data, setData] = useState(state)

  const [query, setQuery] = useState("")

  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(9);
  const [activePg, setActivePg] = useState(1);

  const last = current * count; // 2*5 =10
  const first = last - count; // 10 - 5 = 5

  const values = data.slice(first, last);

  const buttonCount = [];
  for (let i = 1; i <= Math.ceil(data.length / count); i++) {
    buttonCount.push(i);
  }

  const handleClick = (i) => {
    console.log(i);
    setCurrent(i);
    setActivePg(i);
  };

  const myCategories = [
    'All',
    'Art',
    'Home',
    'Style',
    'Seed Plant',
    'Handmade',
    'Succulents',
    'Chair',
    'Decorative',
    'Inside',
    'Kitchen',
    'Herbs',
    'Creative',
    'Interior',
    'Light',
    'Design',
    'Living Room',
    'Bedroom',
    'Plants',
    'Office Plants',
    'Furniture',
    'Garden',
    'Small Spaces',
    'Palms',
    'Foliage Plants',
    'Houseplant'
  ]

  const filterForCategory = (myCategory) => {
    if (myCategory == 'All') {
      setData(state)
      return
    }

    const filteredState = state.filter((item) => item.category === myCategory)
    setData(filteredState)
    console.log(filteredState);
  }

  const sortProducts = (value) => {
    console.log(value);
    if (value === "all") {
      setData(state);
      return;
    } else if (value === "lowest-price") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => a.price - b.price);
      setData(sortedProducts);
    } else if (value === "highest-price") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => b.price - a.price);
      setData(sortedProducts);
    } else if (value === "a-z") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => a.title.localeCompare(b.title));
      setData(sortedProducts);
    } else if (value === "z-a") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => b.title.localeCompare(a.title));
      setData(sortedProducts);
    }
  };

  return (
    <>
      <section className="lrg">
        <h1>Shop</h1>
      </section>
      <section className='hero-section'>
        <div className="up">
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
              {
                myCategories.map((item, index) => {
                  return <li><button onClick={() => filterForCategory(item)}>{item}</button></li>
                })
              }
            </ul>
          </Modal>
          <div className="inp">
            <button className='but-ser' style={{ backgroundColor: 'transparent', border: 'none' }} type='submit'><CiSearch style={{ width: '25px', height: 'auto', color: '#1d1d1d', }} /></button>
            <input type="search" className="qodef-search-form-field" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <div className="drop">
            <p>Showing {first}–{last} of 81 results</p>
            <Select
              defaultValue="All"
              style={{
                width: 120,
              }}
              onChange={sortProducts}
              options={[
                {
                  value: "all",
                  label: "All",
                },
                {
                  value: "lowest-price",
                  label: "Lowest-price",
                },
                {
                  value: "highest-price",
                  label: "Highest-price",
                },
                {
                  value: "a-z",
                  label: "A-Z",
                },
                {
                  value: "z-a",
                  label: "Z-A",
                },
              ]}
            />
          </div>
        </div>
        <div className="main">
          <div className="list">
            <h4></h4>
            <ul>
              {
                myCategories.map((item, index) => {
                  return <li><button onClick={() => filterForCategory(item)}>{item}</button></li>
                })
              }
            </ul>
          </div>
          <div className="left">
            <div className="container h-100 ">
              <div className="row ">


                {values.filter((word) => word.title.toLowerCase().includes(query.toLocaleLowerCase()))
                  .map((item, index) => {
                    return <ShopCard shopProduct={item} key={item.id} />;
                  })}
                {
                  data.length > 15 ? <div className="d-flex">
                    {buttonCount.map((btn) => (
                      <button
                        key={btn}
                        className={
                          btn == activePg ? "btn btn-success" : "btn btn-default"
                        }
                        onClick={() => handleClick(btn)}
                      >
                        {btn}
                      </button>
                    ))}
                  </div> : ''
                }

              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Shop