import React, { useState, useEffect } from "react";

export default function App() {
  const [val, setVal] = useState("");
  const [phrase, setPhrase] = useState("exsample phrase");

  const createPhrase = () => {
    setPhrase(val);
    setVal("");
  };

  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val]);

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  }, [phrase]);

  return (
    <>
      <label>Favorite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={e => setVal(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  )
}
