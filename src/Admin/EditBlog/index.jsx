import React, { useState } from 'react'
import '../EditBlog/style.scss'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editBlogFunction } from "../../redux/actions";

const EditBlog = () => {
    const { id } = useParams();
    const blogs = useSelector((store) => store.AppReducer);
    let myDetailedBlog = blogs.find((item) => item.id == id);
    console.log(myDetailedBlog);
  
    const [blog, setBlog] = useState(myDetailedBlog);
  
    const location = useNavigate();
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      setBlog({ ...blog, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(editBlogFunction(blog));
      location("/admin");
      console.log(blog);
    };
  return (
    <>
         <section className="add-s">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Id
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={blog.id}
                                disabled
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Date
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                name="date"
                                value={blog.date}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Ttile
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                name="title"
                                value={blog.title}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Description
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                name="desc"
                                value={blog.desc}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Image
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                name="image"
                                value={blog.image}
                            />
                        </div>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
    </>
  )
}

export default EditBlog