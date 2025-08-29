import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NoPlayerFound from "./components/NoPlayerFound";
import PlayerInfo from "./components/PlayerInfo";
import { fetchPlayerInfo } from "./utils";

function App() {
  const [playerName, setPlayerName] = useState(
    window.localStorage.getItem("owplayername")
      ? window.localStorage.getItem("owplayername")
      : ""
  );
  const [playerNumbers, setPlayerNumbers] = useState(
    window.localStorage.getItem("owplayernumbers")
      ? window.localStorage.getItem("owplayernumbers")
      : ""
  );
  const [playerInfo, setPlayerInfo] = useState<Object | null>(null);

  useEffect(() => {
    if (
      playerName == null ||
      playerNumbers == null ||
      playerName === "" ||
      playerNumbers === ""
    ) {
      return;
    }
    const fetchInfo = async () => {
      const playerInfo = await fetchPlayerInfo(playerName, playerNumbers);
      setPlayerInfo(playerInfo);
      if (playerInfo != null) {
        window.localStorage.setItem("owplayername", playerName);
        window.localStorage.setItem("owplayernumbers", playerNumbers);
      }
    };
    fetchInfo();
  }, [playerName, playerNumbers]);

  return (
    <div className="App">
      <Header setName={setPlayerName} setNumbers={setPlayerNumbers}></Header>
      {playerInfo == null && <NoPlayerFound />}
      {playerInfo != null && <PlayerInfo playerInfo={playerInfo} />}
    </div>
  );
}

export default App;
