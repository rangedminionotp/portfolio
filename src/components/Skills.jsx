import React from 'react'
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { DiPostgresql } from "react-icons/di"; 
import { SiKotlin } from "react-icons/si";
import { DiSwift } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";

const Skills = () => {
    const iconSize = 50;
  
    const logos = [
      <FaHtml5 size={iconSize} />,
      <IoLogoCss3 size={iconSize} />,
      <IoLogoJavascript size={iconSize} />,
      <SiTypescript size={iconSize} />,
      <FaReact size={iconSize} />,
      <FaNodeJs size={iconSize} />,
      <SiExpress size={iconSize} />,
      <SiTailwindcss size={iconSize} />,
      <DiPostgresql size={iconSize} />,
      <SiKotlin size={iconSize} />,
      <DiSwift size={iconSize} />,
      <TbBrandReactNative size={iconSize} />,
      <FaPython size={iconSize} />,
      <SiCplusplus size={iconSize}/>
    ];
  
    const captions = [
      
      'HTML5',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Node',
      'Express',
      'Tailwindcss',
      'PostgreSQL',
      'Kotlin',
      'Swift',
      'React Native',
      'Python',
      'C/C++'
    ];
  
    return (
      <div name='skills' className='bg-[#0a192f] text-gray-300 w-full'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            {/* <p className='py-4'>// These are the tech stacks I've worked with</p> */}
          </div>  
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            {logos.map((logo, index) => (
              <div key={index} className="m-4 shadow-md shadow-[#666e76] hover:scale-110 duration-500">
                {logo}
                <p>{captions[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Skills;