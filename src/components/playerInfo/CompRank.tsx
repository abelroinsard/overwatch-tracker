import React from "react";
import "./CompRank.css";

export type RankInfo = {
  roleIcon: string;
  roleRank: string;
  roleTier: string;
};

export type CompRankProps = {
  supportInfo: RankInfo | null;
  damageInfo: RankInfo | null;
  tankInfo: RankInfo | null;
  anyInfo: RankInfo | null;
};

export default function CompRank({
  supportInfo,
  damageInfo,
  tankInfo,
  anyInfo,
}: CompRankProps) {
  return (
    <div className="CompRank">
      {tankInfo == null ? (
        <div className="empty" />
      ) : (
        <div className="role">
          <img src={tankInfo.roleIcon} className="role_icon"></img>
          <div className="role_icons">
            <img src={tankInfo.roleRank} className="role_rank"></img>
            <img src={tankInfo.roleTier} className="role_tier"></img>
          </div>
        </div>
      )}
      {damageInfo == null ? (
        <div className="empty" />
      ) : (
        <div className="role">
          <img src={damageInfo.roleIcon} className="role_icon"></img>
          <div className="role_icons">
            <img src={damageInfo.roleRank} className="role_rank"></img>
            <img src={damageInfo.roleTier} className="role_tier"></img>
          </div>
        </div>
      )}
      {supportInfo == null ? (
        <div className="empty" />
      ) : (
        <div className="role">
          <img src={supportInfo.roleIcon} className="role_icon"></img>
          <div className="role_icons">
            <img src={supportInfo.roleRank} className="role_rank"></img>
            <img src={supportInfo.roleTier} className="role_tier"></img>
          </div>
        </div>
      )}
      {anyInfo == null ? (
        <div className="empty" />
      ) : (
        <div className="role">
          <img src={anyInfo.roleIcon} className="role_icon"></img>
          <div className="role_icons">
            <img src={anyInfo.roleRank} className="role_rank"></img>
            <img src={anyInfo.roleTier} className="role_tier"></img>
          </div>
        </div>
      )}
    </div>
  );
}
