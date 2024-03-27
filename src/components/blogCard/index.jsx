import React from 'react'
import '../blogCard/style.scss'
import { NavLink } from 'react-router-dom'

const BlogCard = ({blogInf}) => {
  return (
    <>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-3">
                <div className="out">
                  <div className="inside">
                    <div className="top" style={{backgroundImage: `url(${blogInf.image})`}}></div>
                    <div className="think">
                      <div className="ups">
                        <p>{blogInf.date}</p>
                        <h3>{blogInf.title}</h3>
                      </div>
                      <p>{blogInf.desc}</p>

                      <NavLink to='/blog'>Read More</NavLink>
                    </div>
                  </div>
                </div>

              </div>
    </>
  )
}

export default BlogCard