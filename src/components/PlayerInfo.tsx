import React, { useState } from "react";
import Summary from "./playerInfo/Summary";
import "./PlayerInfo.css";

export type PlayerInfoProps = {
  playerInfo: any;
};

export default function PlayerInfo({ playerInfo }: PlayerInfoProps) {
  return (
    <div className="PlayerInfo">
      <Summary
        avatar={playerInfo.summary.avatar}
        name={playerInfo.summary.username}
        endorsementFrame={playerInfo.summary.endorsement.frame}
        compConsole={playerInfo.summary.competitive.console}
        compPc={playerInfo.summary.competitive.pc}
      />
    </div>
  );
}
