import React from 'react'
import './BlogH.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from '../../../assets/blog_img1.png'
import img2 from '../../../assets/blog_img2.png'
import img3 from '../../../assets/blog_img3.png'
import arrow from '../../../assets/arrow.svg'


function BlogH() {
  return (
    <div>
        <div className="container">
            <div className="theme">
                <h1>Каталог</h1>
                <button><p>Весь каталог</p><FaArrowRightLong /></button>
            </div>
            <div className="blog_cards">
                <div className="blog_card">
                    <img src={img3} alt="" />
                    <h4>Как правильно освещать дом снаружи? <img src={arrow} alt="" /></h4>
                    <p>01.01.2024</p>
                </div>
                <div className="blog_card">
                    <img src={img2} alt="" />
                    <h4>Как правильно освещать дом снаружи? <img src={arrow} alt="" /></h4>
                    <p>01.01.2024</p>
                </div>
                <div className="blog_card">
                    <img src={img1} alt="" />
                    <h4>Как правильно освещать дом снаружи? <img src={arrow} alt="" /></h4>
                    <p>01.01.2024</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogH