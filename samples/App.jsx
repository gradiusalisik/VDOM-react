import OwnReact from "../src";
import { getRussianAlphabethLetters } from "../src/utils/helpers";

const letters = getRussianAlphabethLetters();

const getItem = letter => <li>{letter}</li>;

const App = (
  <div>
    <ul>{letters.map(letter => getItem(letter))}</ul>
  </div>
);

export default App;
