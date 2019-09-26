import { Switch, Route } from 'react-router-dom';

function MainRouter() {
  return (
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/withdrawal' component={Withdrawal}/>
    </Switch>
  );
  
}