import './App.css';
import './index.css';
import Login from './components/adminlogin';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminHome from './components/AdminBars';
import Home from'./components/home';
import PrivacyPolicy from './components/privacy';
import TermsAndConditions from './components/terms';
import FAQ from './components/faq';
import UserLogin from './components/userlogin';
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/adminDash" component={AdminHome}/>
      <Route path="/home" component={Home}/>
      <Route path="/privacy" component={PrivacyPolicy}/>
      <Route path="/terms" component={TermsAndConditions}/>
      <Route path="/faq" component={FAQ}/>
      <Route path="/" component={UserLogin}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
