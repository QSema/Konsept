import React, { useEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";
import '../TopToBtn/style.scss'

const TopToBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const topToScroll =()=>{
     window.scrollTo({
        top:'0',
        behavior: 'smooth'
     })
  }

  return (
    <>
      <button 
        style={{
          position: "fixed",
          right: "30px",
          bottom: "50px",
          display: visible ? "block" : "none",
          zIndex: 234,
        }}
        classname="Top"
        onClick={topToScroll}
      >
        <SlArrowUp />
      </button>
    </>
  );
};

export default TopToBtn;