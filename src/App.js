import React, {useEffect, useState} from 'react';
import './App.css'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow.js'
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
  const loadAll = async () => {
    //lista total
    let list = await Tmdb.getHomeList();
    setMovieList(list);

    //featured
    let originals = list.filter(i=>i.slug === 'originals');
    let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length - 1));
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);

  }

  loadAll();
}, []);

useEffect(()=>{
  const scrollListener = () => {
    if(window.scrollY > 500){
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }

  }

  window.addEventListener('scroll', scrollListener);

  return () => {
    window.removeEventListener('scroll', scrollListener);
  }
}, []);

  return (
<div className="page">

  <Header black={blackHeader}/>

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

   <footer>
     Feito por <b>Felipe Alves </b> <span role="img" aria-label="lingua">😛</span><br/>
     Direitos de imagem exclusivos da Netflix<br/>
     Dados fornecidos pela API do site Themoviedb.org
  </footer>
  
</div>

  );
}