import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

const defaultProps = {
  isOpen: false,
  onClose: () => {}
};

export default {
  defaultProps,
  propTypes
};
