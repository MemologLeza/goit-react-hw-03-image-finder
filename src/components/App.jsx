import { Component } from 'react';
import { getImgBySearch } from 'SearchAPI/SearchAPI';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore';
class App extends Component {
  state = {
    searchQuery: '',
    imgs: [],
    isLoading: false,
    page: 1,
    total: null,
    showModal: false,
    selectedImg: null,
    error: '',
  };
  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ imgs: [] });
    }
    if (
      prevState.page !== this.state.page ||
      prevState.searchQuery !== this.state.searchQuery
    ) {
      this.handleSearchImg();
    }
  }
  handleSearch = query => {
    this.setState({ searchQuery: query });
  };
  handleSearchImg = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getImgBySearch(
        this.state.searchQuery,
        this.state.page
      );
      this.setState(prevState => ({
        imgs: [...prevState.imgs, ...data.hits],
        isLoading: false,
        total: data.total,
      }));
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
      console.log(error);
    }
  };
  handleClickLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };
  openModal = image => {
    this.setState({ showModal: true, selectedImg: image });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedImg: null });
  };
  render() {
    const { imgs, error, isLoading, total, showModal, selectedImg } =
      this.state;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
          color: '#010101',
        }}
      >
        <Searchbar handleSearch={this.handleSearch} />
        {error && <h2>{error}</h2>}
        <ImageGallery imgs={imgs} openModal={this.openModal} />
        {this.state.searchQuery && !isLoading && imgs?.length === 0 && (
          <h2>Images not found((</h2>
        )}
        <Loader isLoading={isLoading} />
        {imgs.length !== 0 && imgs.length < total && (
          <ButtonLoadMore handleClickLoadMore={this.handleClickLoadMore} />
        )}
        {showModal && <Modal img={selectedImg} onClose={this.closeModal} />}
        {/*
        <Searchbar>,
         <ImageGallery>,
          <ImageGalleryItem>,
           <Loader>,
            <Button>
             і <Modal> */}
      </div>
    );
  }
}
export default App;
