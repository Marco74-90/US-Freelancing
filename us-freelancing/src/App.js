
import './style/App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './container/Home'
import Navbar from './components/Navbar'
import FreelancerBoard from './container/FreelancerBoard'
import PostJob from './components/PostJob'
import OpenJobs from './components/OpenJobs'
import CompletedJobs from './components/CompletedJobs'
import AboutUs from './components/AboutUs'

function App() {

  return (
    
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path='/Home' component={Home} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/FreelancerBoard"  component={FreelancerBoard} />
          <Route exact path="/PostJob/:id" component={PostJob} />
          <Route exact path="/OpenJobs" component={OpenJobs} />
          <Route exact path="/CompletedJobs" component={CompletedJobs} />
      </Switch>
      
    </div>
  );
}

export default App;
