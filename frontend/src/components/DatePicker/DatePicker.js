import React from "react";

export const DatePicker = ({ title, datePickedCb }) => {
  return (
    <div>
      <p>{title}</p>
      <input
        type="date"
        format="yyyy-mm-dd"
        onChange={(e) => datePickedCb(e.target.value)}
      />
    </div>
  );
};
