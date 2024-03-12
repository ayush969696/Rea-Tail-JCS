import React from "react";
import { useState } from "react";

function Header() {
    const[toggle, setToggle] = useState(false);

  return (
    <div className="bg-orange-600 p-4">
      <div className="flex justify-between items-center mt-4 max-w-[1240px]  mx-auto">
        <div className="text-3xl font-bold">Tech-Z</div>
          <div className="md:hidden flex justify-center h-[50px] w-8" >
                {
                  toggle ?
                    <a href="#" className="text-3xl text-white" onClick={() => {setToggle(!toggle)}}>
                        ✕
                    </a>
                    :
                    <a href="#" className="text-4xl text-whiteborder text-white" onClick={() => {setToggle(!toggle)}}>
                        &#8801;
                    </a>
                }
          </div>
        

        <ul className={`duration-500 md:hidden fixed bg-black top-[98px] w-full h-screen text-lg font-bold text-white cursor-pointer
          ${ toggle ? 'left-[0]' : 'left-[-100%]' }  
        `}>
          <li className="p-5">Home</li>
          <li className="p-5">About</li>
          <li className="p-5">Course</li>
          <li className="p-5">Blog</li>
          <li className="p-5">Contact</li>
        </ul>

        {/* Responsive Menu Bar */}
        <ul className="hidden md:flex gap-10 text-lg font-bold text-white cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
