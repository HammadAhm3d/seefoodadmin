import { Switch, Route } from 'react-router-dom';
import Login from './views/Login';
// import Dashboard from './views/Dashboard';
import Authenticated from './components/Authenticated';
import Dashboard from './views/DashboardView/Dashboard'

function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Authenticated>
            <Dashboard />
          </Authenticated>
        </Route>
        <Route exact path="/login">
          <Authenticated nonAuthenticated={true}>
              <Login/>
          </Authenticated>
        </Route>
        <Route path="*" render={() => "404 page not found!"} />
      </Switch>
  );
}

export default App;
