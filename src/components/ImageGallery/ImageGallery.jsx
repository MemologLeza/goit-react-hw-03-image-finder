import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styled from './ImageGallery.module.css';
const ImageGallery = ({ imgs, openModal }) => {
  return (
    <ul className={styled.ImageGallery}>
      {imgs.map(img => (
        <ImageGalleryItem
          key={img.id}
          webformatURL={img.webformatURL}
          largeImageURL={img.largeImageURL}
          onClick={openModal} //on click open modals
        />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
export default ImageGallery;
