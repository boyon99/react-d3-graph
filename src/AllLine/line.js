import React, { useState, useEffect, useRef } from "react";
import { GraphAllAfter } from "./LineChart";

export const AllAfter = () => {
  const [colors, setColors] = useState(["gray", "blue"]);
  const data1 = [
    {
      name: "1",
      value: 329
    },
    {
      name: "2",
      value: 399
    },
    {
      name: "3",
      value: 321
    },
    {
      name: "4",
      value: 316
    },
    {
      name: "5",
      value: 314
    },
    {
      name: "6",
      value: 308
    },
    {
      name: "7",
      value: 329
    },
    {
      name: "8",
      value: 353
    },
    {
      name: "9",
      value: 368
    },
    {
      name: "10",
      value: 290
    },

    {
      name: "11",
      value: 327
    },

    {
      name: "12",
      value: 334
    }
  ];
  const data2 = [
    {
      name: "1",
      value: 331
    },
    {
      name: "2",
      value: 364
    },
    {
      name: "3",
      value: 317
    },
    {
      name: "4",
      value: 325
    },
    {
      name: "5",
      value: 333
    },
    {
      name: "6",
      value: 322
    },
    {
      name: "7",
      value: 328
    },
    {
      name: "8",
      value: 363
    },
    {
      name: "9",
      value: 354
    },
    {
      name: "10",
      value: 314
    },

    {
      name: "11",
      value: 341
    },

    {
      name: "12",
      value: 304
    }
  ];

  const prev = () => {
    setColors(["red", "gray"]);
  };
  const next = () => {
    setColors(["gray", "blue"]);
  };
  return (
    <div className="App">
      <h3>체류시간</h3>
      <button onClick={prev} style={{ color: "#F5A9BC" }}>
        이전
      </button>
      <button onClick={next} style={{ color: "#8181F7" }}>
        이후
      </button>
      <GraphAllAfter colors={colors} data1={data1} data2={data2} />
    </div>
  );
};
