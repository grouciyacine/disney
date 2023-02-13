import styled from 'styled-components'
import Header from './Header'
import Login from './Login'
import style from '../styles/index.module.css'
export default function Home() {
return (
    <div className={style.html}>
<div className={style.body}> 
<Header/>
<Login/>    
</div>



</div>

)
}
