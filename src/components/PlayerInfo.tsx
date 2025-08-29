import React, { useState } from "react";
import Summary from "./playerInfo/Summary";
import "./PlayerInfo.css";
import PlayTimes from "./playerInfo/PlayTimes";

export type PlayerInfoProps = {
  playerInfo: any;
};

export default function PlayerInfo({ playerInfo }: PlayerInfoProps) {
  const getCareerStats = (platform: any, mode: "quickplay" | "competitive") => {
    if (
      !platform ||
      !platform[mode] ||
      !platform[mode].career_stats ||
      !platform[mode].career_stats["all-heroes"]
    ) {
      return 0;
    }

    const statsArr = platform[mode].career_stats["all-heroes"];

    // Trouver la catégorie "game"
    const gameCategory = statsArr.find(
      (category: any) => category.category === "game"
    );
    if (!gameCategory || !gameCategory.stats) {
      return 0;
    }

    // Trouver le stat "time_played"
    const timePlayedStat = gameCategory.stats.find(
      (stat: any) => stat.key === "time_played"
    );
    return timePlayedStat ? timePlayedStat.value : 0;
  };
  const QPPCTime = getCareerStats(playerInfo.stats.pc, "quickplay");
  const QPConsoleTime = getCareerStats(playerInfo.stats.console, "quickplay");
  const CompPCTime = getCareerStats(playerInfo.stats.pc, "competitive");
  const CompConsoleTime = getCareerStats(
    playerInfo.stats.console,
    "competitive"
  );

  return (
    <div className="PlayerInfo">
      <Summary
        avatar={playerInfo.summary.avatar}
        name={playerInfo.summary.username}
        endorsementFrame={playerInfo.summary.endorsement.frame}
        compConsole={playerInfo.summary.competitive.console}
        compPc={playerInfo.summary.competitive.pc}
      />
      <div className="bottomInfo">
        <PlayTimes
          QPTime={QPPCTime + QPConsoleTime}
          CompTime={CompPCTime + CompConsoleTime}
        ></PlayTimes>
      </div>
    </div>
  );
}
