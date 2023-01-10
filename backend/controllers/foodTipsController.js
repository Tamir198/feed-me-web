import { Api } from "../services/api.js";

export const getFoodTips = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/tips/list",
    params: { id: "3562", from: "0", size: "30" },
    headers: {
      "X-RapidAPI-Key": process.env.TASTY_API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const response = await Api.request(options);
  const arr = response.data.results.map((foodTip) => {
    return { authorName: foodTip.author_name, foodTip: foodTip.tip_body };
  });
  res.send({ itemCount: response.data.count, allTips: arr });
};
