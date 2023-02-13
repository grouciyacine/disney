import { collection, onSnapshot } from 'firebase/firestore'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../public/images/logo.svg'
import styles from '../styles/home.module.css'
import db from './Firebase'
import Header from './Header'
import NewDisney from './NewDisney'
import Original from './Original'
import Recommends from './Recommends'
import { setMovies } from './redux/features/movies/moviesSlice'
import { selectUserName } from './redux/features/user'
import Slide from './Slide'
import Trending from './Trending'
import Viewers from './viewers'
const Home = () => {
const dispatche=useDispatch()
const userName=useSelector(selectUserName)
let recommends=[]
let newDisney=[]
let original=[]
let trending=[]
const colRef=collection(db,'movies')
useEffect(()=>{
  onSnapshot(colRef,(data)=>{
      data.docs.map((item)=>{

        switch(item.data().type){
          case 'recommend':
            recommends=[...recommends,{id:item.id,...item.data()}];break;
          case 'new':
            newDisney=[...newDisney,{id:item.id,...item.data()}];break;
          case 'original':
            original=[...original,{id:item.id,...item.data()}];break;
          case 'trending':
            trending=[...trending,{id:item.id,...item.data()}];break;

        }
      })
    dispatche(setMovies({
  recommend:recommends,
  newDisney:newDisney,
  original:original,
  trending:trending,

}))
  })

},[recommends])



  return (
    <>
    <div>
      <Header/>
            <div className={styles.body}>
<Slide/>
<Viewers/>
<Recommends/>
<NewDisney/>
<Original />
<Trending/>
            </div>
        </div>
    </>
  )
}

export default Home
//3h:35