import PropTypes from 'prop-types';

const cardShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,

});

export default { cardShape };
