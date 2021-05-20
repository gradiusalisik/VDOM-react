import getChildren from "./utils/getChildren";

export default function createElement(type, attrs, ...children) {
  console.log(type, attrs, "CHILDREN", children);
  return {
    type,
    props: {
      ...attrs,
      children: getChildren(children)
    }
  };
}
