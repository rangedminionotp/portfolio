import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#acb5d1]'>Jialin Li</h1>
        <h2 className='text-3xl sm:text-6xl font-bold text-[#6e727e]'>I'm a Full Stack Developer.</h2>
        <p className='py-4 max-w-[800px] text-[#6e727e]'>I'm a full-stack web and mobile app developer. Currently, I'm focusing on building responsive full-stack web applications.</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link to="work" smooth={true} duration={500}>
                        View Work
                    </Link> 
            <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-4'/>
            </span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
