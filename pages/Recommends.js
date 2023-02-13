import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Styles from '../styles/rec.module.scss'
import { selectRecommend } from './redux/features/movies/moviesSlice'
const Recommends = () => {
  const movies=useSelector(selectRecommend)
  return (
    <div className={Styles.container}>
        <h4>Recommended For You</h4>
        <div className={Styles.content}>
          {movies?.map((movie,key)=>(
            <Link className={Styles.wrap} key={key} href={{pathname:'/page/[Detail]',query:{Detail:movie.id}}}> 
            <img src={movie.cardImg} alt={movie.title}/>
            </Link>
            
          ))}
        </div>
      </div>
  )
}

export default Recommends