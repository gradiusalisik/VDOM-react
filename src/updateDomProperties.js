import { isEvent, isAttribute, eventType } from "./utils/helpers";

export default function updateDomProperties(dom, prevProps, nextProps) {
  // Удаляем прослушку событий
  Object.keys(prevProps)
    .filter(isEvent)
    .forEach(name => {
      dom.removeEventListener(eventType(name), prevProps[name]);
    });

  // Удаляем пропсы
  Object.keys(prevProps)
    .filter(isAttribute)
    .forEach(name => {
      dom[name] = null;
    });

  // Задаём пропсы
  Object.keys(nextProps)
    .filter(isAttribute)
    .forEach(name => {
      dom[name] = nextProps[name];
    });

  // Добавляем прослушку событий
  Object.keys(prevProps)
    .filter(isEvent)
    .forEach(name => {
      dom.addEventListener(eventType(name), nextProps[name]);
    });
}
