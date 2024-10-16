import React from 'react'
import Hero from '../components/Hero'
import DemandServices from '../components/DemandServices'
import Reviews from '../components/Reviews'
import HomeValues from '../components/HomeValues'
import YourReview from '../components/YourReview'
import RecentPosts from '../components/RecentPosts'


const Homepage = () => {
  return (
    <div className='border-t border-mainColor'>
     <Hero />
     <DemandServices />
     <Reviews />
     <HomeValues />
     <RecentPosts />
     <YourReview />
    </div>
  )
}

export default Homepage
