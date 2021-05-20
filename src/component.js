import updateInstance from "./updateInstance";

export default class Component {
  constructor(props) {
    this.props = props;
    this.state = this.state || {};
  }

  setState(partialState) {
    this.state = { ...this.state, ...partialState };
    // eslint-disable-next-line no-underscore-dangle
    updateInstance(this.__internalInstance);
  }

  render() {
    return "";
  }
}
