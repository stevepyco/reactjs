import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { ROUTES } from 'constants';

import Home from 'modules/Home/Home.container';
import NotFound from 'modules/NotFound/NotFound.container';

function RootRouter(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.GIF} component={Home} />
        <Route exact path={ROUTES.GIF_ID} component={Home} />
        <Route exact path="**" component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
}

RootRouter.propTypes = {
  history: PropTypes.object.isRequired
};


export default React.memo(RootRouter);
