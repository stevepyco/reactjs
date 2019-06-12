import React, { PureComponent } from 'react';
import { GIPHY_IMAGE_WEBP, GIPHY_IMAGE_JPG } from 'constants';
import LightBox from 'components/LightBox/LightBox.component';
import PropsConfig from './Card.component.proptypes';
import './Card.component.scss';

class Card extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpenLightBox: props.isOpenLightBox || false
    }
  }

  openLightBox = () => {
    this.props.openLightBox({ giphyId: this.props.id });
    this.setState({ isOpenLightBox: true });
  }

  closeLightBox = () => {
    this.props.closeLightBox();
    this.setState({ isOpenLightBox: false });
  }

  render() {
    const { title, images, user } = this.props;
    
    return (
      <section className="card">
        <div className="card-wrapper">
          <picture className="card-image" onClick={this.openLightBox}>
            <source srcSet={images[GIPHY_IMAGE_WEBP].url} type="image/webp" />
            <source srcSet={images[GIPHY_IMAGE_JPG].url} type="image/jpeg" /> 
            <img src={images[GIPHY_IMAGE_JPG].url} alt={title} />
          </picture>
          <div className="card-bottom d-flex align-items-center justify-content-between">
            <div className="mr-auto">
              <i className="fas fa-paperclip f6"></i>
            </div>
            <div className="ml-auto">
              <span className="ml-2"><i className="fas fa-eye mr-2"></i></span>
              <span className="ml-2"><i className="fas fa-comment mr-2"></i> </span>
              <span className="ml-2"><i className="fas fa-heart mr-2"></i></span>
            </div>
          </div>
        </div>
        {user ? <div className="card-user">
          <span className="card-user__avatar"><img src={user.avatar_url} alt={user.display_name} /></span>
          <span className="card-user__name">{user.username}</span>
        </div> : null}
        <LightBox
          isOpen={this.state.isOpenLightBox}
          onClose={this.closeLightBox}
          {...this.props}
        />
      </section>
    )
  }
}

Card.propTypes = PropsConfig.propTypes;
Card.defaultProps = PropsConfig.defaultProps;

export default Card;
