const React = require('react');
const ReactDOM = require('react-dom');

export default class MessageInput extends Component {
  render(
    return(
      <div>
        <input id="input-message" type="text" placeholder="Message" />
        <p>140</p>
        <button id="btn-submit"> Submit </button>
        <button id="btn-clear"> Clear </button>
      </div>
    )
  )
}
