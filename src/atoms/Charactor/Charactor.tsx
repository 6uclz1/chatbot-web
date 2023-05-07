import React, { useState, useEffect } from 'react';
import charactor from "./charactor.png";
import charactor2 from "./charactor2.png";
import "../../App.css";

/** モデルの画像サイズによって適宜変更してください */
const style: React.CSSProperties = {
  height: "100%",
};

function Charactor() {
  const images = [
    { src: charactor, displayTime: 6000 },
    { src: charactor2, displayTime: 400 },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, images[currentImageIndex].displayTime*Math.random());
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentImageIndex]);

  return (
    <img style={style} src={images[currentImageIndex].src} alt="" />
  );
}

export default Charactor;
