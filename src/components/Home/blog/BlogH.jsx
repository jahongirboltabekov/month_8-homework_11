import React from 'react'
import './BlogH.scss'
import { FaArrowRightLong } from "react-icons/fa6";


function BlogH() {
  return (
    <div>
        <div className="container">
            <div className="theme">
                <h1>Каталог</h1>
                <button><p>Весь каталог</p><FaArrowRightLong /></button>
            </div>
        </div>
    </div>
  )
}

export default BlogH