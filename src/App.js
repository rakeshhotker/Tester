import Login from "./Login";
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { auth } from './firebase';
import {useStateValue} from './StateProvider';
import { useEffect } from 'react';
function App() {
  const [{},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('the user is', authUser);
      if (authUser) {
        //logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/'>
          <Header/>
          <Home/>
        </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
