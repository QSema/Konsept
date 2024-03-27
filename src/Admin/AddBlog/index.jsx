import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBlogFunction } from "../../redux/actions/index";
import '../AddBlog/style.scss'
import { v4 as uuidv4 } from 'uuid';
const AddBlog = () => {
    const [myBlog, setMyBlog] = useState({
        id: uuidv4(),
        title: "",
        desc: "",
        image: "",
        date: "",
    });

    const dispatch = useDispatch();
    const location = useNavigate();
    const handleChange = (e) => {
        setMyBlog({ ...myBlog, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBlogFunction(myBlog));
        console.log(myBlog);
        location("/blog");
    };
    return (
        <>
            
            <section className="add-s">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Date
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                name="date"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                name="title"
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
                            />
                        </div>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </section>

        </>
    );
};

export default AddBlog;