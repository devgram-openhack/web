import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';

/**
 * Creates the routes element.
 *
 * @returns {React.ReactElement} The routes element.
 */
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export { Routes };