import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../layout/Header/Header';
import Home from '../pages/Home/index'
import About from '../pages/About/index'
import FAQ from '../pages/FAQ/index'
import Shop from '../pages/Shop/index'
import Contact from '../pages/Contact/index'
import Footer from '../layout/Footer/Footer';
import Wishlist from '../pages/Wishlist';
import Cart from '../pages/Cart/Cart';
import Detail from '../pages/Detail/index';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import TopToBtn from "../components/TopToBtn";
import Test from '../pages/test';
import AddBlog from '../Admin/AddBlog';
import Blogs from '../pages/Blog/index';
import Register from '../pages/register';
import Login from '../pages/Login';
import { useSelector } from 'react-redux';
import Admin from '../Admin';
import EditBlog from '../Admin/EditBlog';
import CheckOut from '../pages/CheckOut';
import { GlobalThemeContext } from '../Context/ThemeContext.';


const AppRouter = () => {
  const { theme } = useContext(GlobalThemeContext);

  const blogs = useSelector((store) => store.AppReducer);

  useEffect(() => {
    localStorage.setItem("Blogs", JSON.stringify(blogs));
  }, [blogs]);

  

  return (
    <>


      <main className={theme}>
        <BrowserRouter>
          <ToastContainer />
          <Header />
          <TopToBtn />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blogs />} />
            <Route path='/about' element={<About />} />
            <Route path='/FAQ' element={<FAQ />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<Detail />} />
            <Route path='/test' element={<Test />} />
            <Route path='/addBlog' element={<AddBlog />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<Admin />} />
            <Route path="/blog/:id" element={<EditBlog />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>

  )
}

export default AppRouter