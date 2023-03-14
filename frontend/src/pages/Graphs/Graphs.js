import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { Api } from "../../services/api";
import { color } from "d3";
import { Search } from "./Search";

import "./Graphs.css";
const Graps = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await Api.get("/recipe/getSumCategory");
    setData(res.data);
  }

  const containerRef = useRef(null);
  useEffect(() => {
    const svg = d3.select(containerRef.current);
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d._id))
      .range([0, 400])
      .padding(0.5);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([0, 150]);
    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => xScale(d._id))
      .attr("y", (d) => 200 - yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => yScale(d.value))
      .attr("fill", "#551a8c");

    svg
      .selectAll("text")
      .data(data)
      .attr("x", (d) => xScale(d._id) + xScale.bandwidth() / 2)
      .attr("y", (d) => 195 - yScale(d.value))
      .text((d) => d._id + " " + d.value)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .join("text");
  }, [data]);

  return (
    <div className="statistics__container">
      <div>
        <p style={{ color: "#551a8c" }}>Category Statistic</p>
        <svg ref={containerRef} width={500} height={300} />
      </div>
      <Search />
    </div>
  );
};

export default Graps;
