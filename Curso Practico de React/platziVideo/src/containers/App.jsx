import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import './App.scss';

const App = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return (
    <div className='App'>
      <Header />
      <div className='main_container'>
        <Search />
        {videos.mylist.length > 0 && (
          <Categories title='Mi lista'>
            <Carousel>
              {videos.mylist.map((item) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <CarouselItem key={item.id} {...item} />
              ))}
            </Carousel>
          </Categories>
        )}
        <Categories title='Tendencias'>
          <Carousel>
            {videos.trends.map((item) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
        <Categories title='Originales de Platfix'>
          <Carousel>
            {videos.originals.map((item) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      </div>
      <Footer />
    </div>
  );
};
export default App;
