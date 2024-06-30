import React, { useEffect, useState } from 'react'
import './KatalogH.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import crad1 from '../../../assets/card1.svg'
import crad4 from '../../../assets/card4.svg'
import img_card from '../../../assets/img_card.svg'
import img_card2 from '../../../assets/img_card2.svg'
import img_card3 from '../../../assets/img_card3.svg'
import { HiOutlineArrowLongLeft,HiOutlineArrowLongRight } from "react-icons/hi2";




import axios from 'axios';




function KatalogH() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products?limit=6`)
            .then(res => {setData(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    let product = data.map((el) =>
        <div className="card" key={el.id}>
            <div className="img">
                <img src={el.image} alt="" />
            </div>
            <div className="card_text">
                <h3>{el.title.slice(0, 20)}</h3>
                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p> <del>${el.price * 2}</del>${el.price}</p>
            </div>
        </div>
    );

  return (
    <div>
        <div className="container">
            <div className="theme">
                <h1>Каталог</h1>
                <button><p>Весь каталог</p><FaArrowRightLong /></button>
            </div>
            <div className="products">
                {product}
            </div>
            <div className="theme">
                <h1>Почему NORNLIGHT?</h1>
                <button><p>О компании</p><FaArrowRightLong /></button>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={crad1} alt="" />
                    <h3>Только проверенные бренды</h3>       
                    <p>Бренды, проверенные временем и качеством</p>        
                </div>
                <div className="card">
                    <img src={crad1} alt="" />
                    <h3>Самые низкие цены</h3>       
                    <p>Ниже не будет нигде</p>        
                </div>
                <div className="card">
                    <img src={crad4} alt="" />
                    <h3>Быстрая доствка</h3>       
                    <p>Доставляем по всей РФза 1-10 дней</p>        
                </div>
                <div className="card">
                    <img src={crad4} alt="" />
                    <h3>Большой ассортимент</h3>       
                    <p>Более 1000 товаров</p>        
                </div>
            </div>
            <div className="theme">
                <h1>Только проверенные бренды</h1>
                <div className="buttons">
                    <button><HiOutlineArrowLongLeft className=''/></button>
                    <button><HiOutlineArrowLongRight className=''/></button>
                </div>
            </div>
            <div className="img_card">
                <img src={img_card} alt="" />
                <img src={img_card2} alt="" />
                <img src={img_card3} alt="" />
                <img src={img_card} alt="" />
            </div>
        </div>
    </div>
  )
}

export default KatalogH