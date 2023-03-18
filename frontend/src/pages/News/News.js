import React from "react";

import { useState, useEffect } from "react";
import { Api } from "../../services/api";

import "./News.css";

export const News = () => {
  const [news, setNews] = useState([]);

  const getAllNews = async () => {
    const newsArr = await Api.get("http://localhost:3000/news/allNews");
    setNews(newsArr.data);
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <>
      <p className="news__title">Check out news from around the world</p>
      <div className="news__container">
        {news.map((item) => (
          <p>{item.title}</p>
        ))}
      </div>
    </>
  );
};
