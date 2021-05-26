/* eslint-disable jsx-a11y/label-has-associated-control */
import OwnReact from "..";

export default class Form extends OwnReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    const { onSubmit } = this.props;

    onSubmit(value);
    this.setState({ value: "" });
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      value
    });
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Введите только русские буквы:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
