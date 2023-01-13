/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import BestSellers from '../components/carousel/Carousel';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import './frontpage.css';
import '@reach/menu-button/styles.css';

const FrontPage = () => {
  return (
    <div className="front-page-wrap">
      <Header />
      <div className="search-wrap">
        <Search />
      </div>
      <div className="carousel-wrap">
        <div className="carousel-inner">
          <BestSellers />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
