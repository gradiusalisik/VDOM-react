import OwnReact from "../src";
import { getRussianAlphabethLetters, shuffle } from "../src/utils/helpers";
import ListLetter from "../src/components/ListLetter";
import Form from "../src/components/Form";
import mixLetters from "../src/utils/mixLetters";
import { REGEX_ONLY_RUSSIAN } from "../src/constants";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends OwnReact.Component {
  constructor() {
    super();
    this.state = {
      letters: getRussianAlphabethLetters()
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    const { letters } = this.state;
    this.setState({
      letters: shuffle(letters)
    });
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(value) {
    const arr = value.match(REGEX_ONLY_RUSSIAN);
    const { letters } = this.state;

    this.setState({
      letters: mixLetters(arr, letters)
    });
  }

  render() {
    const { letters } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />
        <button type="button" onClick={this.handleClick}>
          Mix letters
        </button>
        <ListLetter letters={letters} />
      </div>
    );
  }
}
