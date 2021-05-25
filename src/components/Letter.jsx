import OwnReact from '..'

export default class Letter extends OwnReact.Component {
  render() {
    return <li>{this.props.children}</li>
  }
}
