import { TEXT } from "./constants";

export default function createTextElement(text) {
  return {
    type: TEXT,
    props: {
      nodeValue: text,
      children: []
    }
  };
}
