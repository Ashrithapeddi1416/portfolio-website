import React from 'react';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import Scrollbar from './Scrollbar'; 

function Menu() {
  const [open, setOpen] = useState(false);


  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
   
    <div className='block md:hidden'>
    
      <Hamburger
        size={24}
        toggled={open}
        toggle={toggleMenu} 
      />

   
      {open && (
       
        <div className='fixed top-0 left-0 w-screen h-screen p-4 text-black bg-white dark:bg-slate-900 z-50 overflow-y-auto'>

          <header className='flex justify-end p-4'>
           
            <Hamburger
              size={24}
              toggled={open}
              toggle={toggleMenu} 
            />
          </header>

        
          <main className='flex flex-col items-center justify-center'>
            <Scrollbar isMobileMenu={true} />
          </main>
        </div>
      )}
    </div>
  );
}

export default Menu;