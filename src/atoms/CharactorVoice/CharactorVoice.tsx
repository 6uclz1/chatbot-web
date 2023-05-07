import React, { useEffect, useState } from "react";
import { generateRandomWords } from "../../services/GenerateRandomWords/GenerateRandomWords";
import CharactorVoiceSub from "../CharactorVoiceSub/CharactorVoiceSub";

const CharactorVoice: any = () => {
  const [sub, setSub] = useState('');

  useEffect(() => {

    const intervalId = setInterval(() => {
      // TODO: APIを使用した取得方法に変更する
      const words = generateRandomWords();
      setSub(words)
      const speechSynthesisUtterance = new SpeechSynthesisUtterance(words)
      speechSynthesis.speak(speechSynthesisUtterance);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <CharactorVoiceSub sub={sub}/>
  );
}

export default CharactorVoice;  
