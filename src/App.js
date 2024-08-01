import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageWithForm from './components/page-with-form';
import PageWithoutForm from './components/page-without-form';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/form" component={PageWithForm} />
        <Route path="/participants" component={PageWithoutForm} />
        <Route path="/" component={PageWithForm} />
      </Switch>
    </Router>
  );
}

export default App;
