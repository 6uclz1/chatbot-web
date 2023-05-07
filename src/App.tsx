import React from "react";
import "./App.css";
import Background from "./atoms/Background/Background";
import Charactor from "./atoms/Charactor/Charactor";
import CharactorVoice from "./atoms/CharactorVoice/CharactorVoice";

function App() {
  return (
    <div className="App">
      <Background>
        <Charactor />
        <CharactorVoice />
      </Background>
    </div>
  );
}

export default App;
