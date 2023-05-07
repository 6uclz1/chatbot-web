import React from "react";
import "./../../App.css";
import "./Background.css";

// アニメーションCSSを使用したいのでInlineStyleは使用しない。

function Background({ children }: any) {
  return <div className={"background"}>{children}</div>;
}

export default Background;
