import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Header from './layout/Header';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

const Routes = () => (
    <Router>
        <div className="App">
            <Header />
            <main>
                <Route exact path="/" component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/about" component={About}/>
            </main>
        </div>
    </Router>
);

export default Routes