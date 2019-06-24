import React, { useState, useEffect } from "react";

function Hooks() {
  // default value for count is 0
  const [count, setCount] = useState(0);
  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  //default value for fruit is 'banana';
  const [fruit, setFruit] = useState("banana");
  const fruits = [
    { value: "banana", label: "Banana" },
    { value: "apple", label: "Apple" },
    { value: "mango", label: "Mango" }
  ];

  return (
    <div
      style={{
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
        }}
      >
        <p>Your selected fruit is: {fruit.toUpperCase()}</p>
        {fruits.map(({ value, label }) => (
          <div key={value}>
            <input
              type="radio"
              name="fruit"
              value={value}
              onChange={() => setFruit(value)}
            />{" "}
            {label} <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hooks;
