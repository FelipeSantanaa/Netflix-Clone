import React, {useEffect, useState} from 'react';
import './App.css'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow.js'
import FeaturedMovie from './components/FeaturedMovie';


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(()=>{
  const loadAll = async () => {
    //lista total
    let list = await Tmdb.getHomeList();
    setMovieList(list);
  }

  loadAll();
}, []);

  return (
<div className="page">

    {featuredData && 
    <FeaturedMovie item={featuredData} />
    }

  <section className="lists">
    {movieList.map((item, key) => (
      <div>
   <MovieRow key={key} title={item.title} items={item.items} />
    </div>
    ))}
  </section>
  
</div>

  );
}