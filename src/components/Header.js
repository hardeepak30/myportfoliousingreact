import React from 'react';


const Header = () => {
  const handle=()=>{
    window.location.hash='contact'
  }
  return (
    <header id='home' className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-bold text-white'>Hardeepak<span className='text-accent'>Singh</span> </h1>
          <button className='btn btn-sm' onClick={handle}>Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
