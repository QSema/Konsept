import React from 'react'
import '../Admin/style.scss'
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeBlogFunction } from "../redux/actions";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Admin = () => {

  const blogs = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();

  return (
    <>
      <section className='admin-s'>
        <div className="container">
          <div className="mable1">
            <div className="mhead1">
              <div className="mh1">
                <h2>ID</h2>
              </div>
              <div className="mh1">
                <h2>DATE</h2>
              </div>
              <div className="mh1">
                <h2>TITLE</h2>
              </div>
              <div className="mh1">
                <h2>DESCRIPTION</h2>
              </div>
              <div className="mh1">
                <h2>IMAGE</h2>
              </div>
              <div className="mh1">
              </div>
            </div>
            <div className="mbody1">
              {blogs.map((item, index) => {
                return (
                  <>
                    <div className="mr1">
                      <div className="md1">
                        <h5 style={{color: '#1d1d1d'}}>{item.id}</h5>
                      </div>

                      <div className="md1">
                        <h5>{item.date}</h5>
                      </div>

                      <div className="md1">
                        <h5>{item.title}</h5>
                      </div>

                      <div className="md1">
                        <h5><p>{item.desc}</p></h5>
                      </div>

                      <div className="md1">
                        <h5><p><img src={item.image} alt="" style={{ width: "80px", height: 'auto' }} /></p></h5>
                      </div>

                      <div className="md1">
                        <NavLink
                          className="btn btn-warning"
                          to={`/blog/${item.id}`}
                        >
                          <FaEdit />
                        </NavLink>
                        <NavLink
                          style={{
                            marginLeft: '5px'
                          }}
                          className="btn btn-danger"
                          onClick={() => dispatch(removeBlogFunction(item.id))}
                        >
                          <MdDelete />
                        </NavLink>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>

          <div className="tp">
            <NavLink to="/addBlog" className="btn btn-success">
              Add new blog
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Admin