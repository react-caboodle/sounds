import { Switch, Route, Router } from 'react-router-dom';
import { Unauthorised } from '../components/unauthorised';
import { App } from '../App';


export function MainRouter() {
  return (
    <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/" component={App} />
      <Route path="/error" component={Unauthorised} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
  );
  
}