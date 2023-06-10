import React, { Component } from 'react'

interface Tech{
    text: string;
    image?: string;
}

interface ProjectProps{
    image?: string;
    github?: string;
    src?: string;
    title: string;
    text: string;
    techs?: Tech[];
}

export const Project = ({image, github, src, title, text, techs}: ProjectProps) => {
  return (
    <div className='flex flex-col sm:grid sm:grid-cols-8 cursor-pointer px-4 py-3 opacity-60 gap-x-6 gap-y-4 rounded-lg transition-all hover:bg-purple-600/5 hover:opacity-100'>
        <div className='bg-white col-span-3 rounded order-3 h-24 w-36 sm:h-[initial] sm:2-[initial]'>
            <img src={image} alt={title} />
        </div>
        <article className='col-span-5 flex flex-col justify-start order-2'>
            <h3 className='text-lg font-medium text-purple-100 line-clamp-2'>
                {title}
            </h3>
            <p className='text-sm text-purple-300 font-light line-clamp-3'>
                {text}
            </p>
        </article>
        <div className='flex col-span-8 gap-2 flex-wrap order-3'>
            {techs?.map(tech => (
                <div className='bg-red-700/10 box-content rounded-full flex items-center justify-center gap-2 h-5 w-fit py-1 px-2'>
                    { tech.image &&
                        <img src={`/tech/${tech.image}.svg`} alt="" className="h-[18px] w-auto cursor-pointer" />
                    }
                    <span className='font-medium text-red-400 text-[14px]'>
                        {tech.text}
                    </span>
                </div>
            ))
            }
        </div>
        <footer className='flex sm:col-span-8 justify-end order-4'>
            <a href={github} className='cursor-pointer relative z-10 font-medium text-red-400 flex items-center gap-2 transition-all hover:scale-105'>
                <img src="/icons/github.svg" alt="" className='h-[18px]'/>
                Acessar Github
                <img src="/utils/arrow-diagonal.svg" alt="" className='h-[8px]'/>
            </a>
        </footer>
    </div>
  )
}
