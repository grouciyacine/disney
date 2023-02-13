import React from 'react'
import Styles from '../styles/rec.module.scss'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectOriginal } from './redux/features/movies/moviesSlice'
const Original = () => {
  const movies=useSelector(selectOriginal)
  return (
    <div className={Styles.container}>
        <h4>Originals Movies</h4>
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

export default Original