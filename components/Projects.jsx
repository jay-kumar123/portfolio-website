import React from "react";

const Project_Data = [
  {
    id: 1,
    project_Name: "calculator",
    image_link: "/project-images/cla.png",
    Project_link: "https://calculaor-swart.vercel.app/",
  },
   
];

const Projects = () => {
  return (
    <div id="Projects" className="py-20 bg-white ">
      <h1 className="font-bold text-center text-5xl text-gray-800">Projects</h1>

      <div className=" grid grid-cols-3 ">

      {
        Project_Data.map((data)=> {
          return(
            <a href={data.Project_link}
            target="_blank"
            rel="noopener noreferrer"
            key={data.id}
            >
        <div className="rounded-xl p-6 m-20 shadow-lg hover:scale-105 transition duration-300 bg-gray-600" >
          <img src={data.image_link} className="p-4" />
        </div>
        </a>
          )
        })
      }
        
      </div>
    </div>
  );
};

export default Projects;
