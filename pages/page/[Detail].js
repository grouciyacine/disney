import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Styles from '../../styles/detail.module.scss'
import img1 from '../../public/images/play-icon-black.png' 
import Image from 'next/image'
import img2 from '../../public/images/play-icon-white.png'
import img3 from '../../public/images/group-icon.png'
import db from '../Firebase'
import { useRouter } from 'next/router'
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore'
const Detail = () => {
const router=useRouter()
const id=router.query.Detail
console.log(typeof id)
const [detail,setDetails]=useState({})
const colRef=collection(db,'movies')
useEffect(()=>{
    const docRef = doc(db, "movies", `${id}`);
    const docSnap = getDoc(docRef).then(res=>setDetails( res.data())).catch((err)=>console.log(err));

},[])
console.log(detail)
return(
<>
<Header />
<div className={Styles.container}>
    
        
        <div className={Styles.img}>
        <img  src={detail?.backgroundImg}  />
    </div>
<div className={Styles.titleImg}>
    <img  src={detail?.titleImg}/>
</div>
<div className={Styles.cont}>

    <button className={Styles.play}>
        <Image   src={img1} alt='dd'/>
        <span>Play</span> 
    </button>
    <button className={Styles.tr}>
        <Image src={img2} alt='ss'/>
        <span>Trailer</span>
    </button>
    <div className={Styles.addlist}>
        <span />
        <span/>
    </div>
    <div className={Styles.groupe}>
      
            <Image  src={img3} alt='dde'/>

    </div>

</div>
<div className={Styles.sub}>
   {detail?.subTitle}
</div>
 <div className={Styles.desc}>
    {detail?.description}
    </div>
    
</div>
</>
    

)
}

export default Detail