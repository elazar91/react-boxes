import React, { useState } from "react";
import Children from "../Children/Children";
import classes from "./Father.module.css";

const Father = () => {
  const [showWord, setShowWord] = useState(false);
  const [word, setWord] = useState(null);

  const addTheWordClickHandler = (e) => {
    setShowWord(!showWord);
    showWord ? setWord("click") : setWord(null);
  };

  return (
    <div className={classes.Box} onClick={addTheWordClickHandler}>
      <Children theWord={word} />
    </div>
  );
};

export default Father;
