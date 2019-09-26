import React from "react";
import PinInput from "react-pin-input";
import "./App.css";

//components
import { Withdrawal } from './components/withdrawal';

//services
import { login } from './services/authenticationService';

class App extends React.PureComponent {

  state = {
    value: "",
    currentBalance:0
  };

  results;

  onWithdraw = amount => {
    this.setState({currentBalance: this.state.currentBalance - amount});
  }

  onChange = value => {
    this.setState({ value });
    if (value.length === 4) {      
      login(value).then(data=>
        this.setState({currentBalance:data.data.currentBalance }));
      
    }
  };

  onClear = () => {
    this.setState({
      value: "",
      currentBalance:0
    });
    this.pin.clear();
  };

  render() {
    return (
      <div className="app">
        <PinInput
          length={4}
          focus
          ref={p => (this.pin = p)}
          type="numeric"
          onChange={this.onChange}
        />
        <button onClick={this.onClear}>Clear</button>
          <Withdrawal onWithdraw={this.onWithdraw} currentBalance={this.state.currentBalance}></Withdrawal>
        </div>
    );
  }
}

export default App;
