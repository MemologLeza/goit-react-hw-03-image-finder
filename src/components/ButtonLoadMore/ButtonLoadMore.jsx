import PropTypes from 'prop-types';
import styled from './ButtonLoadMore.module.css';
const ButtonLoadMore = ({ handleClickLoadMore }) => {
  return (
    <button className={styled.Button} onClick={handleClickLoadMore}>
      Load more
    </button>
  );
};
ButtonLoadMore.propTypes = {
  handleClickLoadMore: PropTypes.func.isRequired,
};
export default ButtonLoadMore;
