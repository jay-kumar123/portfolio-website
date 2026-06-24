import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-5  bg-white">
      <div className="text-2xl font-bold text-blue-700">LOGO</div>

      <div className=" flex gap-10 items-center text-black">
        <a href="#About"
          className="hover:scale-110 transition duration-200"> About
        </a>
         <a href="#Experience"
         className="hover:scale-110 transition duration-200"> Experience</a>

          <a href="#Skills"
         className="hover:scale-110 transition duration-200"> Skills</a>

         <a href="#Projects"
        className="hover:scale-110 transition duration-200"> Portfolio </a>

        <p className="hover:scale-110 transition duration-200"> Contact</p>
      </div>
      <div>
        <button className="bg-blue-100 text-blue-900 px-5 py-2 rounded-lg hover:scale-110 transition duration-200">
          Lets Talk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
