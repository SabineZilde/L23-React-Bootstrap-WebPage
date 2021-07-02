import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Article from './Components/Article';
import Tags from './Components/Tags';
import Footer from './Components/Footer';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <div className="container" style={{width: '80%'}}>
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
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;
