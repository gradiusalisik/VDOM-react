import { ALPHABET } from "../constants";

export const isEvent = name => name.startsWith("on");
export const isAttribute = name => !isEvent(name) && name !== "children";
export const eventType = name => name.toLowerCase().substring(2);

export const shuffle = array => array.sort(() => Math.random() - 0.5);

export const getRussianAlphabethLetters = () => ALPHABET.split("");
