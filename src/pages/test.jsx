import React, { useContext, useState } from 'react'
import { globalState } from '../Context/globalContext';
import ShopCard from '../components/ShopCard/ShopCard';


const Test = () => {
    const { state } = useContext(globalState);
 
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(5);
  const [activePg, setActivePg] = useState(1);

  const last = current * count; // 2*5 =10
  const first = last - count; // 10 - 5 = 5

  const values = state.slice(first, last);

  const buttonCount = [];
  for (let i = 1; i <= Math.ceil(state.length / count); i++) {
    buttonCount.push(i);
  }

  const handleClick = (i) => {
    console.log(i);
    setCurrent(i);
    setActivePg(i);
  };

  // Change page

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <h1>Salam</h1>

            <div className="d-flex">
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
            </div>

            {values.map((item, index) => {
              return <ShopCard shopProduct={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Test