import {Fragment, Suspense} from 'react'
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom'
import LandingStartup from "./components/web/LandingStartup";
import LandingInsurance from "./components/web/LandingInsurance";
import Loader from "./components/common-components/Loader";
import GlobalStyle from "./styles/GlobalStyle";


function App() {
  return (
        <Fragment>
            <GlobalStyle/>
            <Switch>
                <Suspense fallback={<Loader/>}>
                <Route path="/startup-template" component={LandingStartup}/>
                <Route path="/insurance-template" component={LandingInsurance}/>
                <Route path="/">
                    <Home/>
                </Route>
                </Suspense>

            </Switch>
        </Fragment>

  );
}


export default App;
