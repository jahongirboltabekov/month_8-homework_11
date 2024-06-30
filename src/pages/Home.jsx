import React from 'react'
import Banner from '../components/Home/banner/Banner'
import BlogH from '../components/Home/blog/BlogH'
import KatalogH from '../components/Home/home_katalog/KatalogH'

function Home() {
  return (
    <div>
      <Banner/>
      <KatalogH/>
      <BlogH/>
    </div>
  )
}

export default Home