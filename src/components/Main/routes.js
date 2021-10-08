import About from '../about';
import Home from '../home';
import Series from '../../container/series/series.js';
import { Route, Switch } from "react-router-dom";
import Single from '../../container/single.js';

const Main = ()=>{
    return(
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/series" component={Series} />
                <Route  path="/serie/:id" component={Single} />
            </Switch>
        </div>
    )
}
export default Main;