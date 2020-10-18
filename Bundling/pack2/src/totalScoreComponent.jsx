import React from "react";
import { getTotalScore } from "./averageService";
import * as classes from './totalScoreComponentStyles.scss';

export const TotalScoreComponent = () => {
  const [totalScore , setTotalScore] = React.useState(0);

  React.useEffect(() => {
    const scores = [10, 20, 30, 40, 50];
    setTotalScore(getTotalScore(scores));
  }, []);

  return (
    <div>
      <span className={classes["result-background"]}>
        Students total Score : {totalScore}
      </span>
      <br/>
      <span className={classes.resultBackground}>
        Esto es con camelCase
      </span>
    </div>
  );
};