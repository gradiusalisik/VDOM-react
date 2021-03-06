import getChildren from "./utils/getChildren";

export default function createElement(type, attrs, ...children) {
  return {
    type,
    props: {
      ...attrs,
      children: getChildren(children)
    }
  };
}
