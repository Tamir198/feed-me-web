import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.js";
import recipeRoutes from "./routes/recipe.js";
import foodTipsRoutes from "./routes/foodTips.js";
import newsRoutes from "./routes/news.js";
import { connectToMongo } from "./db.js";
import { initFirebase } from "./services/firebase.js";
import { openSocket } from "./services/socket.js";

import axios from "axios";
import cheerio from "cheerio";
import { NewsModel } from "./models/newsModel.js";

const loadExtensions = async function (app) {
  openSocket();
  app.use(cors("*"));
  app.use(express.json());
  connectToMongo();
  initFirebase();
};

const loadRoutes = function (app) {
  app.use(usersRoutes);
  app.use("/recipe", recipeRoutes);
  app.use("/foodTips", foodTipsRoutes);
  app.use("/news", newsRoutes);

  app.post("/scrapNews", async (req, res) => {
    const itemsToScrape = 100;
    let itemsScraped = 0;

    const articles = [];

    axios
      .get("https://www.bbc.com/news")
      .then((response) => {
        const $ = cheerio.load(response.data);

        $("div.gs-c-promo").each((i, el) => {
          if (itemsScraped >= itemsToScrape) {
            return false; // break out of the loop if we've scraped enough items
          }

          const title = $(el)
            .find("h3.gs-c-promo-heading__title")
            .text()
            .trim();
          const description = $(el).find("p.gs-c-promo-summary").text().trim();
          const image = $(el).find("div.gs-c-promo-image img").attr("src");
          const link = $(el).find("a.gs-c-promo-heading").attr("href");

          articles.push({
            title,
            description,
            image,
            link,
          });

          const recipe = new NewsModel({
            title,
          });
          recipe.save();

          itemsScraped++;
        });

        console.log(articles);
        res.send(articles);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const createApp = () => {
  const app = express();
  loadExtensions(app);
  loadRoutes(app);

  return app;
};

export default createApp;
