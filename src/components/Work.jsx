import React from 'react'
import dhmenu from '../assets/dhmenupreview.png'

const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] text-gray-300 w-full md:h-screen'>
      <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
        </div>

        {/* container */}
        <div  
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* grid item */}
            <div style={{backgroundImage: `url(${dhmenu})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center max-auto content-div'>
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-80 bg-[#0a192f]'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        UC Santa Cruz Dining Menu - cross platform mobile app with React Native
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work
