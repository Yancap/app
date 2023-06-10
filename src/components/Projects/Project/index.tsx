import Image from 'next/image';
import {  MouseEvent } from 'react'

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
    function handleRedirect(event: MouseEvent){
        const target = event.target !== event.currentTarget.querySelector('a') && 
        event.target !== event.currentTarget.querySelector('a')?.querySelector('img')
        if (target && src) {
            window.location.assign(src)
        }
    }
  return (
    <div className='flex flex-col sm:grid sm:grid-cols-8 cursor-pointer px-4 py-3 opacity-60 gap-x-6 gap-y-4 rounded-lg transition-all hover:bg-purple-600/5 hover:opacity-100'
        onClick={handleRedirect} data-project
    >
        <div className='grid bg-white place-items-center col-span-3 rounded order-3 h-28 w-48 overflow-hidden sm:h-[initial] sm:min-h-[5.5rem] sm:w-[initial]'>
            <Image src={`/project/${image}`} alt={title} className='h-full w-auto'/>
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
                <div key={tech.text} className='bg-red-700/10 box-content rounded-full flex items-center justify-center gap-2 h-5 w-fit py-1 px-2'>
                    { tech.image &&
                        <Image src={`/tech/${tech.image}.svg`} alt="" className="h-[18px] w-auto cursor-pointer" />
                    }
                    <span className='font-medium text-red-400 text-[14px]'>
                        {tech.text}
                    </span>
                </div>
            ))
            }
        </div>
        <footer className='flex sm:col-span-8 justify-end order-4 '>
            {github &&
            <a href={github} target='_blank' className='cursor-pointer relative z-10 font-medium text-red-400 flex items-center gap-2 transition-all hover:scale-105'>
                <Image src="/icons/github.svg" alt="" className='h-[18px]'/>
                Acessar Github
                <Image src="/utils/arrow-diagonal.svg" alt="" className='h-[8px]'/>
            </a>
            }
        </footer>
    </div>
  )
}
