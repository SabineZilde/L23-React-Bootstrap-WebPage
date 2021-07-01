import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Article from './Components/Article';
import Tags from './Components/Tags';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/article">
                        <Article />
                    </Route>
                    <Route path="/tags">
                        <Tags />
                    </Route>
                </Switch>

            </Router>
        </div>
    );
}

export default App;
