import PropTypes from 'prop-types';

const propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  images: PropTypes.shape({
    url: PropTypes.string,
  })
};

const defaultProps = {
  url: '',
  title: '',
  images: {}
};

export default {
  defaultProps,
  propTypes
};
