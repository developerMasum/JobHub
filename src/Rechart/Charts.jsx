import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {
  const marksArray = [
    {
      id: 1,
      name: "Assignment 1",
      marks: 52,
    },
    {
      id: 2,
      name: "Assignment 2",
      marks: 45,
    },
    {
      id: 3,
      name: "Assignment 3",
      marks: 60,
    },
    {
      id: 4,
      name: "Assignment 4",
      marks: 35,
    },
    {
      id: 5,
      name: "Assignment 5",
      marks: 58,
    },
    {
      id: 6,
      name: "Assignment 6",
      marks: 42,
    },
  ];
  return (
    <div>
      <h3 className=" my-container text-2xl font-bold mt-12 ">
        {" "}
        Assignment Analytics:
      </h3>
      <div className="my-container">
        <AreaChart width={1000} height={300} data={marksArray}>
          <Area dataKey="marks"></Area>
          <XAxis dataKey="name"></XAxis>
          <YAxis />
        </AreaChart>
      </div>
    </div>
  );
};

export default Charts;
