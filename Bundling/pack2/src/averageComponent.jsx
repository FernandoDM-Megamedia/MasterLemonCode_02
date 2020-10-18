import React from "react";
import { getAvg } from "./averageService";
import * as classes from './averageComponentStyles.scss';

export const AverageComponent = () => {
  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30];
    setAverage(getAvg(scores));
  }, []);

  return (
    <div>
      <span className={classes["result-background"]}>
        Students average -react- : {average}
      </span>
      <br/>
      <span className={` ${classes.resultBackground} ${classes.colorText}` }>
        Esto es con camelCase
      </span>
      <div className={`jumbotron ${classes.resultBackground}`}>
        <h1>Jumbotron students average: {average}</h1>
      </div>
    </div>
  );
};