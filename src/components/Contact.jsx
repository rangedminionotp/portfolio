import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action='https://getform.io/f/729663a5-4959-45d4-a394-bcd721dcf743' method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>

            </div>
            <input  className='my-4 p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'/>
            <textarea className='my-4 p-2 bg-[#ccd6f6]' placeholder='Message...' name='message' rows='10'/>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex item-center'>Let's Collaborate</button>
        </form>
      
    </div>
  )
}

export default Contact
