import PropTypes from 'prop-types';

import styled from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  return (
    <li
      className={styled.ImageGalleryItem}
      onClick={() => onClick(largeImageURL)}
    >
      <img src={webformatURL} alt="" className={styled.ImageGalleryItemImage} />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
