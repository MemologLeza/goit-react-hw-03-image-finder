import PropTypes from 'prop-types';
import { FidgetSpinner } from 'react-loader-spinner';
const Loader = ({ isLoading }) => {
  return (
    <FidgetSpinner
      visible={isLoading}
      height="100"
      width="100"
      ariaLabel="dna-loading"
      wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
      wrapperClass="dna-wrapper"
      ballColors={['#ffff00', '#ffff00', '#ffff00']}
      backgroundColor="#0000ff"
    />
  );
};
Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Loader;
