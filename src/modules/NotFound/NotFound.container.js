import React, { PureComponent } from 'react';
import PropsConfig from 'modules/NotFound/NotFound.container.proptypes';
import { MESSAGES, ROUTES } from 'constants';

export class NotFoundContainer extends PureComponent {
  componentDidMount() {
    const { history } = this.props;
    this.timer = setTimeout(() => {
      history.push(ROUTES.HOME);
    }, 3000);
  }

  render() {
    return (
      <div className="page-not-found">
        {MESSAGES.GENERAL.PAGE_NOT_FOUND}
      </div>
    );
  }
}

NotFoundContainer.propTypes = PropsConfig.propTypes;
NotFoundContainer.defaultProps = PropsConfig.defaultProps;

export default NotFoundContainer;
