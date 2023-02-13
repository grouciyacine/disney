import React from 'react'
import Link from 'next/link'
import Styles from '../styles/rec.module.scss'
import { useSelector } from 'react-redux'
import { selectNewDisney } from './redux/features/movies/moviesSlice'

const NewDisney = () => {
  const movies=useSelector(selectNewDisney)
  return (
    <div className={Styles.container}>
        <h4>NewDisney +</h4>
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
//3H:14
export default NewDisney