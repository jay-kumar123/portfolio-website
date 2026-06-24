import React from 'react'

const About = () => {
  return (
   <div id="About" className="bg-white text-gray-600 py-24 px-10">

      <h2 className="text-5xl font-bold text-center mb-16">
        About
      </h2>

      <div className="max-w-4xl mx-auto text-center">

        <h3 className="text-3xl font-bold mb-6">
          Who Am I?
        </h3>

        <p className="text-gray-600 leading-8 text-lg">
          I am Jay Kumar, an aspiring Web Developer currently
          learning React, Next.js and modern web technologies.
          I enjoy building websites, solving problems and
          continuously improving my development skills.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">

          <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300 ">
            <h3 className="text-xl font-bold text-blue-400">
              BSc
            </h3>
            <p className='mt-2'>
                Botany Graduate
            </p>            
          </div>
          <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300 ">
            <h3 className="text-xl font-bold text-blue-400">
              5+
            </h3>
            <p className='mt-2'>
                Skills Learned
            </p>            
          </div>
          <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300 ">
            <h3 className="text-xl font-bold text-blue-400">
              3+
            </h3>
            <p className='mt-2'>
                Projects Build
            </p>            
          </div>

        </div>

      </div>

    </div>
  )
}

export default About