import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../components/blogCard";
import '../Blog/style.scss'
import { globalState } from '../../Context/globalContext';
import i18n from '../../i18n/i18next';
import { useTranslation } from 'react-i18next';

const Blogs = () => {
  const ChangeMyLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { t } = useTranslation()
  const blogS = useSelector((store) => store.AppReducer);
  return (
    <>
      <section className="blog-s">
        <div className="tp">
        <div className="inner">
            <span>{t("home-s8.0")}</span>
            <h2>{t("home-s8.1")}</h2>
          </div>
        </div>
        <div className="container h-100">
          <div className="row h-100">
            {blogS.map((item) => {
              return (
                <>
                  <BlogCard blogInf={item} />
                </>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
};

export default Blogs;