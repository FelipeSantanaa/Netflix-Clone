import React, {useEffect,useState} from 'react';
import Tmdb from './Tmdb';

export default () => {

  const [movieList, setMovieList] = useState([]);

useEffect(()=>{
  const loadAll = async () => {
    //lista total
    let list = await Tmdb.getHomeList();
    console.log(list);
    setMovieList(list);
  }
  loadAll();
}, []);

  return (
<div className="page">
  
</div>

  );
}