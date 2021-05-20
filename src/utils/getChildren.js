import createTextElement from "../createTextElement";

export default function getChildren(children) {
  return children
    .flat()
    .map(child =>
      typeof child === "object" && child !== null
        ? child
        : createTextElement(child)
    );
}
