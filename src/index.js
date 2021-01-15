import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './home'
import CreateableMultiSelect from './components/createable_multiselect'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <div>
            <Switch>
              <Route path="/createableMultiSelect" component={CreateableMultiSelect} />
              <Route path="/" component={Home} />
            </Switch>
        </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
