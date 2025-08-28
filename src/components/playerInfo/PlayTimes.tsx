import React from "react";
import "./PlayTimes.css";
import ProgressBar from "@ramonak/react-progress-bar";

export type PlayTimesProps = {
  QPTime: number;
  CompTime: number;
};

export default function PlayTimes({ QPTime, CompTime }: PlayTimesProps) {
  const QPPercentage = QPTime > CompTime ? 100 : (QPTime / CompTime) * 100;
  const CompPercentage = CompTime > QPTime ? 100 : (CompTime / QPTime) * 100;
  const QPHours = (QPTime / 3600).toString().split(".")[0] + " HOURS";
  const CompHours = (CompTime / 3600).toString().split(".")[0] + " HOURS";
  console.log(QPTime);

  return (
    <div className="PlayTimes">
      <h3>Play Times:</h3>
      <div className="playtimecontainers">
        <div className="labels">
          <div>QUICKPLAY</div>
          <div>COMPETITIVE</div>
        </div>
        <div className="charts">
          <ProgressBar
            completed={QPPercentage}
            customLabel={QPHours}
          ></ProgressBar>
          <ProgressBar
            completed={CompPercentage}
            customLabel={CompHours}
          ></ProgressBar>
        </div>
      </div>
    </div>
  );
}
