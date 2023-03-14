import React, { useState } from "react";
import { DatePicker } from "../../components/DatePicker/DatePicker";
import { Api } from "../../services/api";

export const PostsDateSearch = () => {
  const [startdate, setStartdate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numberOfPosts, setNumberOfPosts] = useState(null);

  const poststAmountBetweenDates = async () => {
    const res = await Api.post(
      "http://localhost:3000/user/numberOfPostsBetweenDates",
      {
        startDate: startdate,
        endDate: endDate,
      }
    );

    setNumberOfPosts(res.data.count);
  };
  return (
    <div className="datedSearch__Container">
      <p>
        You can search the number of posts added to the website between 2 dates
      </p>

      <DatePicker title="Start date" datePickedCb={setStartdate} />
      <DatePicker title="End date" datePickedCb={setEndDate} />

      <button onClick={poststAmountBetweenDates}>
        Find posts between the dates:
      </button>
      {numberOfPosts && <p>Total posts between the dates : {numberOfPosts}</p>}
    </div>
  );
};
