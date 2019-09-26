import React from "react";
import PinInput from "react-pin-input";
import { Redirect } from 'react-router-dom';
import "./App.css";

//components
import { Withdrawal } from './components/withdrawal';

//services
import { login } from './services/authenticationService';



class App extends React.Component {

  state = {
    value: "",
    currentBalance:0,
    error: false
  };

  results;

  onWithdraw = amount => {
    this.setState({currentBalance: this.state.currentBalance - amount});
  }

  onChange = value => {
    this.setState({ value });
    if (value.length === 4) {      
      login(value).then(data => {
        if (typeof data ==='number') {
          this.setState({currentBalance: data});
        } else {           
          this.setState({error: true});
        }
      });
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

    if (this.state.error) {
      console.log('meol redirecting');
      return (<Redirect to='/error' />);
    }

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
