import React, { useState } from "react";
import Summary from "./playerInfo/Summary";
import "./PlayerInfo.css";
import PlayTimes from "./playerInfo/PlayTimes";
import { findHeroWinrates, getCareerStats, HeroWinrate } from "../utils";

export type PlayerInfoProps = {
  playerInfo: any;
};

export default function PlayerInfo({ playerInfo }: PlayerInfoProps) {
  const QPPCTime = getCareerStats(playerInfo.stats.pc, "quickplay");
  const QPConsoleTime = getCareerStats(playerInfo.stats.console, "quickplay");
  const CompPCTime = getCareerStats(playerInfo.stats.pc, "competitive");
  const CompConsoleTime = getCareerStats(
    playerInfo.stats.console,
    "competitive"
  );

  const QPPCWinrates: HeroWinrate[] = findHeroWinrates(playerInfo.stats.pc, "quickplay");
  const QPConsoleWinrates: HeroWinrate[] = findHeroWinrates(playerInfo.stats.console, "quickplay");
  const CompPCWinrates: HeroWinrate[] = findHeroWinrates(playerInfo.stats.pc, "competitive");
  const CompConsoleWinrates: HeroWinrate[] = findHeroWinrates(playerInfo.stats.console, "competitive");

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
