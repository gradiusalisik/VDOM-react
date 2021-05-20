import OwnReact from "..";
import Letter from "./Letter";

// eslint-disable-next-line react/prefer-stateless-function
export default class ListLetter extends OwnReact.Component {
  render() {
    const { letters } = this.props;

    return (
      <ul>
        {letters.map(letter => (
          <Letter>{letter}</Letter>
        ))}
      </ul>
    );
  }
}
