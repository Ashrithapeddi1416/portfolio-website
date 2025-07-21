import React from 'react';
import { Link } from 'react-router-dom';

function Scrollbar({ isMobileMenu = false }) { 
 
  const visibilityClasses = isMobileMenu ? 'block'  : 'hidden md:block'; 
   
   

  return (
    <div className={`${visibilityClasses} md:col-span-3 h-screen bg-neutral-600 overflow-y-scroll p-4 font-sans text-xl text-white`}>
      <div
        className="w-20 h-20 mx-auto rounded-full border-white border-4 bg-cover m-2"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Tv9m-2pBhE-YbZUmiRRAr42L0unrl3pKbg&s)",
        }}
      ></div>
      <div className="text-center text-2xl font-mono">Hermione Granger</div>
      <ul className="flex flex-col h-screen justify-evenly">
        <li className="flex">
          <div
            className="w-8 h-8 border-black border-4 bg-cover rounded-full bg-center"
            style={{
              backgroundImage:
                "url(https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTExL3YxMTgxLXR1LWVsZW1lbnQtMjUwLXAtbTN3cXR3dTEucG5n.png)",
            }}
          ></div>
          <Link className="mx-6 hover:text-blue-500" to="/">
            Home
          </Link>
        </li>
        <li className="flex">
          <div
            className="w-8 h-8 border-black border-4 bg-cover rounded-full bg-center"
            style={{
              backgroundImage:
                "url(https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png)",
            }}
          ></div>
          <Link className="mx-6 hover:text-blue-500" to="/About">
            About
          </Link>
        </li>
        <li className="flex">
          <div
            className="w-8 h-8 border-black border-4 bg-cover rounded-full bg-center"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0dwAqYZnoKXmVdG3YH6Sb_hoMp_XenzFfQ&s)",
            }}
          ></div>
          <Link className="mx-6 hover:text-blue-500" to="/Skills">
            Skills
          </Link>
        </li>
        <li className="flex">
          <div
            className="w-8 h-8 border-black border-4 bg-cover rounded-full bg-center"
            style={{
              backgroundImage:
                "url(https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA1L3NyLWltYWdlLTI5MDQyNS1qZWExOC1zLTQzMF8xLnBuZw.png)",
            }}
          ></div>
          <Link className="mx-6 hover:text-blue-500" to="/Achievements">
            Achievements
          </Link>
        </li>
        <li className="flex">
          <div
            className="w-8 h-8 border-black border-4 bg-cover rounded-full bg-center"
            style={{
              backgroundImage:
                "url(https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTExL3Jhd3BpeGVsX29mZmljZV8zNl9zaW1wbGVfbWluaW1hbF9saW5lX3ZlY3Rvcl9pbGx1c3RyYXRpb25fb2ZfYV80ZjVhYTk4NC1iYTNkLTQxYjctODgyZS1hOGM0YTY5OWQ4MWUucG5n.png)",
            }}
          ></div>
          <Link className="mx-6 hover:text-blue-500" to="/Timeline">
            Timeline
          </Link>
        </li>

        <li className="flex">
          <div
            className="w-8 h-8 border-black border-4 bg-cover rounded-full bg-center"
            style={{
              backgroundImage:
                "url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTMzLWljb24tMjIuanBn.jpg)",
            }}
          ></div>
          <Link className="mx-6 hover:text-blue-500" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Scrollbar;