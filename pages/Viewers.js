import React from "react";
import Styles from "../styles/viewers.module.scss";
import I1 from "../public/images/viewers-disney.png";
import I2 from "../public/images/viewers-pixar.png";
import I3 from "../public/images/viewers-marvel.png";
import I4 from "../public/images/viewers-starwars.png";
import I5 from "../public/images/viewers-national.png";
import Image from "next/image";
const Viewers = () => {
return (
    <div className={Styles.container}>
        <div className={Styles.img}>
            <Image className={Styles.i}  src={I1} alt="1" />
            <video  autoPlay loop playsInline>
                <source src='/videos/1564674844-disney.mp4' type='video/mp4' />
            </video>
        </div>
        <div className={Styles.img}>
            <Image className={Styles.i}  src={I2} alt="2" />
            <video autoPlay loop playsInline>
                <source src='/videos/1564676714-pixar.mp4 ' type='video/mp4' />
            </video>
        </div>
        <div className={Styles.img}>
            <Image className={Styles.i}  src={I3} alt="3" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='videos/1564676115-marvel.mp4 ' type='video/mp4' />
            </video>
        </div>
        <div className={Styles.img}>
            <Image className={Styles.i}  src={I4} alt="4" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='videos/1608229455-star-wars.mp4' type='video/mp4' />
            </video>
        </div>
        <div className={Styles.img}>
            <Image className={Styles.i}  src={I5} alt="5" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='videos/1564676296-national-geographic.mp4' type='video/mp4' />
            </video>
        </div>
</div>
);
};

export default Viewers;
//2h:57