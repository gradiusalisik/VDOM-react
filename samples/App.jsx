import OwnReact from "../src";
import { getRussianAlphabethLetters, shuffle } from "../src/utils/helpers";
import ListLetter from "../src/components/ListLetter";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends OwnReact.Component {
  constructor() {
    super();
    this.state = {
      letters: getRussianAlphabethLetters()
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { letters } = this.state;
    this.setState({
      letters: shuffle(letters)
    });
  }

  render() {
    const { letters } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Mix letters
        </button>
        <ListLetter letters={letters} />
      </div>
    );
  }
}
