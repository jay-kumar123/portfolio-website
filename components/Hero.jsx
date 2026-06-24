import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-between items-center  bg-white  w-full px-10 py-20 min-h-[80vh]' >

      <div className='max-w-md'>

        <p className='text-gray-600'>Hello Welcome</p>

        <h1 className='text-6xl font-bold mt-2 text-gray-900'>Im Jay Kumar</h1>

        <h2 className='text-4xl font-bold text-blue-600 mt-4'>Aspiring Web Developer</h2>

        <div className=' flex gap-4 mt-6 '>
        <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:scale-110 transition duration-200'>Hire Me</button>

        <button className=' border px-6 py-6 rounded-lg text-black hover:scale-110 transition duration-200' >See Portofolio </button>
        </div>

        <p className='mt-6 text-gray-600'> Passionate artist and MERN stack IOS, Android and Web developer. Creating captivating interfaces and robust applications, blending aesthetics and functionality. Committed to delivering beautiful web experiences.</p>
      </div>

      <div className='bg-gray-100 p-4 rounded-3xl shadow-2xl'>
        <img src="/profile-image.jpeg" alt="Profile" className='w-90 rounded-2xl' />
      </div>

      <div>
        
        <div>
         <h1 className='text-4xl font-bold text-gray-500'>1+ </h1>
         <p className='text-blue-400'>Learning Experience</p>
          </div>

          <div> 
           <h1 className='text-4xl font-bold  text-gray-500'>5+</h1> 
           <p className='text-blue-400'>Projects Build</p>
            </div>

            <div>
            <h1 className='text-4xl font-bold  text-gray-500'> 100%</h1> 
            <p className='text-blue-400'>Dedication</p>
            </div>
        </div>


        
    </div>
  )
}

export default Hero