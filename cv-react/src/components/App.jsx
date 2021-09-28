import React from 'react';
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Knowledges from "../pages/Knowledges";
import Portfolio from "../pages/Portfolio";
import NotFound from "../pages/NotFound";
import { BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/competences" component={Knowledges} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;