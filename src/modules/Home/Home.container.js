import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsConfig from 'modules/Home/Home.container.proptypes';
import { actions } from 'modules/Home/Home.reducer';
import { ROUTES } from 'constants';
import Card from 'components/Card/Card.component';
import debounce from 'lodash.debounce';
import './Home.container.scss';


export class HomeContainer extends Component {
  componentDidMount() {
    this.handlePagination();
  }

  handlePagination = () => {
    const { getGiphyTrendingData } = this.props
    getGiphyTrendingData().then(() => {
      this.props.history.push({
        pathname: ROUTES.HOME,
        search: `?page=${this.props.page}`
      });
    })
  }

  handleScrollDown = () => {
    const { scrollHeight, scrollTop, clientHeight } = this.page;
    if (scrollHeight - scrollTop === clientHeight) {
      this.handlePagination();
    }
  }

  render() {
    const { data, history, match: { params } } = this.props;

    return (
      <div className="page-home" ref={page => this.page = page} onScroll={debounce(this.handleScrollDown, 100, {
        'leading': true,
        'trailing': true
      })}>
        <div className="container">
          <div className="row">
            {data.map((item, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={`card-${item.id}${index}`}>
                <Card 
                  {...item}
                  isOpenLightBox={params.id && params.id === item.id}
                  openLightBox={({ giphyId }) => history.push(`${ROUTES.GIF}/${giphyId}`)}
                  closeLightBox={() => history.push(ROUTES.HOME)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ home }) => ({
  data: home.data,
  page: home.page
});

const mapDispatchToProps = {
  getGiphyTrendingData: actions.getGiphyTrendingData
}

HomeContainer.propTypes = PropsConfig.propTypes;
HomeContainer.defaultProps = PropsConfig.defaultProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
