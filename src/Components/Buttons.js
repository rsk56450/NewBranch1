import React from "react";

const data = [
  "data",
  "data",
  "data",
  "data",
  "data",
  "data",
  "data",
  "data",
  "data",
  "data",
  "data",
  "data",
  "data",
  "data",
];

const Buttons = () => {
  return (
    <div>
      {data.map((i) => {
        return (
          <button className=" bg-slate-400 p-5  m-2 rounded-md ">{i}</button>
        );
      })}
    </div>
  );
};

export default Buttons;
