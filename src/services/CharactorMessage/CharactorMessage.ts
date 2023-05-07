import { loremIpsum } from "lorem-ipsum";

export const generateDummyText = (): any =>
  loremIpsum({
    count: 1, // 生成する段落数
    units: "paragraphs", // 段落数を指定
    format: "plain", // テキストの形式（'html'または'plain'）
  });
