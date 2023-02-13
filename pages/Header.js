import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from '../styles/Header.module.css'
import logo from '../public/images/logo.svg'
import Home from '../public/images/home-icon.svg'
import Sea from '../public/images/search-icon.svg'
import Menu from '../public/images/watchlist-icon.svg'
import Mov from '../public/images/movie-icon.svg'
import Str from '../public/images/original-icon.svg'
import ser from '../public/images/series-icon.svg'
import Link from 'next/link'
import { GoogleAuthProvider, signOut,onAuthStateChanged,signInWithPopup } from 'firebase/auth'
import { auth } from './Firebase'
import {  selectUserEmail, selectUserName, selectUserphoto, setSignOUtState, setUserLoginDetails } from './redux/Data'
import { useDispatch,useSelector } from 'react-redux'
import { useRouter } from 'next/router'
const Header = () => {
const google=new GoogleAuthProvider()
const [user,setUser]=useState([])
const dispatch=useDispatch()
const username=useSelector(selectUserName)
const photo=useSelector(selectUserphoto)
const router=useRouter()
const googlefun=()=>{
    if(!username.name){
        signInWithPopup(auth,google)
.then((res)=>setUser(res.user)).then((res)=>SetUser1(res.user))
.catch((err)=>alert(err))
    }
}
const logout=()=>{
    if(username.name){
signOut(auth).then(()=>{dispatch(setSignOUtState())
router.push('/')}).catch((err)=>console.log(err))
    
    }
}
const SetUser1=(user)=>{
dispatch(setUserLoginDetails({
        name:user.displayName,
        email:user.email,
        photo:user.photoURL,
                }))
}

    useEffect(()=>{
        const unsecribe=onAuthStateChanged(auth,authuser=>{
            console.log(authuser)
        if(authuser){
            SetUser1(authuser)
            router.push('./Home')
        }
        })
        return unsecribe;
    },[username])
console.log(username.photo)
return (
    <nav className={style.navbar}>
        <div>
            <Image className={style.logo1} src={logo}  alt='Disney+'/>
        </div>

        {!username.name?
        <div className={style.log} onClick={googlefun}>
            Login
        </div>
        :
        <>
        <div className={style.menu}>
            <Link className={style.lin} href='/Home' >
            <Image className={style.lo} src={Home} alt='Home'/>
            <span>HOME</span>
            </Link>    
            <Link className={style.lin} href='/home' >
            <Image className={style.lo} src={Sea} alt='Home'/>
            <span>SEARCH</span>
            </Link>
            <Link className={style.lin} href='/home' >
            <Image className={style.lo} src={Menu} alt='Home'/>
            <span>WATCHLIST</span>
            </Link>
            <Link className={style.lin} href='/home' >
            <Image className={style.lo} src={Str} alt='Home'/>
            <span>ORIGINALS</span>
            </Link>
            <Link className={style.lin} href='/home' >
            <Image className={style.lo} src={Mov} alt='Home'/>
            <span>MOVIES</span>
            </Link>
            <Link className={style.lin} href='/home' >
            <Image className={style.lo} src={ser} alt='Home'/>
            <span>SERIES</span>
            </Link>
        </div>
        <div className={style.wrapper}>    
                
                <img  className={style.gp} onClick={logout}   src={username?.photo} alt={username?.name}/>
                <span className={style.ho} >Sign out</span>
        </div>
        </>
        }
    </nav>
)
}

export default Header
//2h:15m