import React, { PureComponent } from 'react';
import { GIPHY_IMAGE_JPG, GIPHY_IMAGE_FULL } from 'constants';
import PropsConfig from './LightBox.component.proptypes';

import './LightBox.component.scss';

class LightBox extends PureComponent {
  handleKeyDown = event => {
    if ((event.which || event.keyCode) === 27) this.props.onClose();
  }

  closeLightBox = () => {
    this.props.onClose();
  }

  render() {
    const { isOpen, images, title } = this.props;

    return (
      <div className={`lightbox ${isOpen ? 'show' : ''}`} onClick={this.closeLightBox} onKeyDown={this.handleKeyDown}>
        <div className="lightbox-wrapper">
          <picture className="lightbox-image">
            <source srcSet={images[GIPHY_IMAGE_FULL].url} type="image/gif" />
            <img src={images[GIPHY_IMAGE_JPG].url} alt={title} />
          </picture>
          <span className="btn-close" onClick={this.closeLightBox}>
            <i className="fas fa-times"></i>
          </span>
        </div>
      </div>
    );
  }
}

LightBox.propTypes = PropsConfig.propTypes;
LightBox.defaultProps = PropsConfig.defaultProps;

export default LightBox;