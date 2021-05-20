import reconcile from "./reconcile";

let rootInstance = null;

export default function render(element, parentDom) {
  const prevInstance = rootInstance;
  const nextInstance = reconcile(parentDom, prevInstance, element);
  rootInstance = nextInstance;
}
