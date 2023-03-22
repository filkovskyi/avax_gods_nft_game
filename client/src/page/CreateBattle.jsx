import React from "react";
import { PageHOC } from "../components";

const CreateBattle = () => {
  return (
    <div>
      <h1 className="text-5xl p-3">Avax Gods</h1>
      <h2 className="text-3xl p-3">Web3 NFT Battle-style Card Game</h2>
    </div>
  );
};

export default PageHOC(
  CreateBattle,
  <>
    Create battle <br /> with your friends
  </>,
  <>
    Connect your wallet to start playing <br /> the ultimate Web3 Battle Card
    Game
  </>
);
