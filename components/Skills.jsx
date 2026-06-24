import React from 'react'

const Skills = () => {
  return (
    <div id="Skills" className="bg-white py-20">

      <h1 className="text-5xl font-bold text-center text-gray-800">
        SKILLS
      </h1>

      <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 mb-16"></div>

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Frontend
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <div className="border rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition duration-300">
            <img src="/html.png" alt="HTML" className="w-16 h-16 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-600">HTML</h3>
          </div>

          <div className="border rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition duration-300">
            <img src="/css.png" alt="CSS" className="w-16 h-16 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-600">CSS</h3>
          </div>

          <div className="border rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition duration-300">
            <img src="/js.png" alt="JavaScript" className="w-16 h-16 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-600">JavaScript</h3>
          </div>

          <div className="border rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition duration-300">
            <img src="/react.png" alt="React" className="w-16 h-16 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-600">React</h3>
          </div>

          <div className="border rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition duration-300">
            <img src="/next ja.png" alt="Next.js" className="w-16 h-16 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-600">Next.js</h3>
          </div>

          <div className="border rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition duration-300">
            <img src="/talwind.png" alt="Tailwind" className="w-16 h-16 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-600">Tailwind CSS</h3>
          </div>

        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mt-16 mb-6">
          Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <div className="border rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition duration-300">
            <img src="/git.png" alt="Git" className="w-16 h-16 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-600">Git</h3>
          </div>

          <div className="border rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition duration-300">
            <img src="/github.png" alt="GitHub" className="w-16 h-16 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-600">GitHub</h3>
          </div>

         

        </div>

      </div>

    </div>
  
  )
}

export default Skills