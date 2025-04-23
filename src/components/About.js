import React from 'react';
import img from '../assets/mid.png';

const About = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh]' id='about'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center'>
        <div className='flex-1 text-center lg:text-left'>
          <img 
            className='ml-0 w-full max-w-[450px] mx-auto lg:mx-0 opacity-70'
            src={img}
            alt='About Me'
          />
        </div>
        <div className='flex-1 text-center lg:text-left mt-8 lg:mt-0'>
          <h2 className='text-[36px] font-bold mb-4'>About Me</h2>
          <p className='text-lg mb-8 max-w-lg mx-auto lg:mx-0'>
          I’m Hardeepak Singh, a passionate B.Tech student at Lovely Professional University, specializing in Computer Science and Engineering. With a strong foundation in the MERN stack and programming languages like C++, JavaScript, and Java, I love building practical, user-centric solutions. I’ve developed full-stack projects like Jmbm Trader and I Discuss Chat App, showcasing my ability to merge backend logic with intuitive frontend experiences. I’ve been a finalist in the HackThrone 2024 by GeeksforGeeks, and proudly secured the 2nd rank in a college-wide essay competition. My journey in tech is fueled by curiosity, creativity, and a drive to make an impact
          </p>
          <a href='https://www.linkedin.com/in/hardeepak-singh-ab41282b6/' target='_blank' rel='noopener noreferrer'>
            <button className='btn btn-lg'>View My LinkedIn Profile</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
