import React, { useState } from "react";
import "./Header.css";
import { fetchPlayerInfo } from "../utils";

export type HeaderProps = {
  setName: (value: string) => void;
  setNumbers: (value: string) => void;
};

export default function Header({ setName, setNumbers }: HeaderProps) {
  const [inputName, setInputName] = useState("");
  const [inputNumbers, setInputNumbers] = useState("");
  const buttonClicked = async () => {
    setName(inputName);
    setNumbers(inputNumbers);
  };
  return (
    <div className="Header">
      <h1>Tiny tracker</h1>
      <div>
        <input
          placeholder="Name"
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        ></input>
        <span>#</span>
        <input
          placeholder="00000"
          onChange={(e) => {
            setInputNumbers(e.target.value);
          }}
        ></input>
        <button onClick={buttonClicked}>Fetch info</button>
      </div>
    </div>
  );
}
