import updateDomProperties from "./updateDomProperties";
import { TEXT } from "./constants";
import createPublicInstance from "./createPublicInstance";

export default function instantiate(element) {
  const { type, props } = element;
  const isDomElement = typeof type === "string";

  if (isDomElement) {
    // Создаём инстанс Dom-элемента
    const isTextElement = type === TEXT;

    const dom = isTextElement
      ? document.createTextNode("")
      : document.createElement(type);

    updateDomProperties(dom, [], props);

    // Добавляем инстанцы потомков
    const childElements = props?.children || [];
    const childInstances = childElements.map(instantiate);
    const childDoms = childInstances.map(childInstance => childInstance.dom);
    childDoms.forEach(childDom => dom.appendChild(childDom));

    const instance = { dom, element, childInstances };

    return instance;
  }
  // Создаём инстанс компонента
  const instance = {};
  const publicInstance = createPublicInstance(element, instance);
  const childElement = publicInstance.render();
  const childInstance = instantiate(childElement);
  const { dom } = childInstance;

  Object.assign(instance, { dom, element, childInstance, publicInstance });

  return instance;
}
