import React from "react";
import "./Summary.css";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import CompRank from "./CompRank";

export type SummaryProps = {
  avatar: string;
  name: string;
  endorsementFrame: string;
  compPc: any;
  compConsole: any;
};

export default function Summary({
  avatar,
  name,
  endorsementFrame,
  compPc,
  compConsole,
}: SummaryProps) {
  return (
    <div className="Summary">
      <img src={avatar}></img>
      <div className="Info">
        <h2>{name.toUpperCase()}</h2>
        <img className="endorsement" src={endorsementFrame}></img>
        {compConsole != null && (
          <>
            <div className="separator" />
            <SportsEsportsIcon
              className="icon"
              sx={{ height: "40px", width: "40px", color: "white" }}
            />
            <CompRank
              supportInfo={
                compConsole.support != null
                  ? {
                      roleIcon: compConsole.support.role_icon,
                      roleRank: compConsole.support.rank_icon,
                      roleTier: compConsole.support.tier_icon,
                    }
                  : null
              }
              damageInfo={
                compConsole.damage != null
                  ? {
                      roleIcon: compConsole.damage.role_icon,
                      roleRank: compConsole.damage.rank_icon,
                      roleTier: compConsole.damage.tier_icon,
                    }
                  : null
              }
              tankInfo={
                compConsole.tank != null
                  ? {
                      roleIcon: compConsole.tank.role_icon,
                      roleRank: compConsole.tank.rank_icon,
                      roleTier: compConsole.tank.tier_icon,
                    }
                  : null
              }
              anyInfo={
                compConsole.open != null
                  ? {
                      roleIcon: compConsole.open.role_icon,
                      roleRank: compConsole.open.rank_icon,
                      roleTier: compConsole.open.tier_icon,
                    }
                  : null
              }
            />
          </>
        )}
        {compPc != null && (
          <>
            <div className="separator" />
            <KeyboardIcon
              className="icon"
              sx={{ height: "40px", width: "40px", color: "white" }}
            />
            <CompRank
              supportInfo={
                compPc.support != null
                  ? {
                      roleIcon: compPc.support.role_icon,
                      roleRank: compPc.support.rank_icon,
                      roleTier: compPc.support.tier_icon,
                    }
                  : null
              }
              damageInfo={
                compPc.damage != null
                  ? {
                      roleIcon: compPc.damage.role_icon,
                      roleRank: compPc.damage.rank_icon,
                      roleTier: compPc.damage.tier_icon,
                    }
                  : null
              }
              tankInfo={
                compPc.tank != null
                  ? {
                      roleIcon: compPc.tank.role_icon,
                      roleRank: compPc.tank.rank_icon,
                      roleTier: compPc.tank.tier_icon,
                    }
                  : null
              }
              anyInfo={
                compPc.open != null
                  ? {
                      roleIcon: compPc.open.role_icon,
                      roleRank: compPc.open.rank_icon,
                      roleTier: compPc.open.tier_icon,
                    }
                  : null
              }
            />
          </>
        )}
      </div>
    </div>
  );
}
