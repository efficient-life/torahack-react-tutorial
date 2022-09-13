import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };
  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };
  useEffect(() => {
    console.log("Countレンダリング", count);
  }, []);
  // 引数に渡したcountを変更したときに発火
  useEffect(() => {
    console.log("Countレンダリング", count);
  }, [count]);
  // triger1とtriger2が変更された場合発火
  //   useEffect(() => {
  //     console.log("Countレンダリング", count);
  //   }, [trigger1, trigger2]);
  return (
    <div>
      <p>現在のカウント数{count}</p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </div>
  );
};

export default Counter;
