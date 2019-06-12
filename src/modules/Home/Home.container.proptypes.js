import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array,
  history: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
}

const defaultProps = {
  data: []
}

export default {
  defaultProps,
  propTypes
}