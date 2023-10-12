import { Icon } from '@/components/Icon';
import { ProjectProps } from '@/pages';
import Image from 'next/image';
import {  MouseEvent } from 'react'


interface P {
    project: ProjectProps
}



export const Project = ({project}: P) => {
    const {image, github, src, title, text, techs} = project
    function handleRedirect(event: MouseEvent){
        const target = event.target !== event.currentTarget.querySelector('a') && 
        event.target !== event.currentTarget.querySelector('a')?.querySelector('img')
        if (target && src) {
            window.open(src, "_blank")
        }
    }
  return (
    <div className='flex flex-col sm:grid sm:grid-cols-8 cursor-pointer px-4 py-3 opacity-60 gap-x-6 gap-y-4 rounded-lg transition-all hover:bg-purple-600/5 hover:opacity-100'
        onClick={handleRedirect} data-project
    >
        <div className='grid bg-white place-items-center col-span-3 rounded order-3 h-28 w-48 overflow-hidden sm:h-[initial] sm:min-h-[5.5rem] sm:w-[initial]'>
            <img  src={image.src} alt={image.alt} className='h-full w-auto'/>
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
                <div key={tech.tech} className='bg-red-700/10 box-content rounded-full flex items-center justify-center gap-2 h-5 w-fit py-1 px-2'>
                    { tech.image &&
                        <Icon icon={tech.image} className="h-[1.15rem] w-auto cursor-pointer" />
                    }
                    <span className='font-medium text-red-400 text-[14px]'>
                        {tech.tech}
                    </span>
                </div>
            ))
            }
        </div>
        <footer className='flex sm:col-span-8 justify-end order-4 '>
            {github &&
            <a href={github} target='_blank' className='cursor-pointer relative z-10 font-medium text-red-400 flex items-center gap-2 transition-all hover:scale-105'>
                <Image width={18} height={18} src="/icons/github.svg" alt="" className='h-[18px]'/>
                Acessar Github
                <Image width={18} height={18} src="/utils/arrow-diagonal.svg" alt="" className='h-[8px]'/>
            </a>
            }
        </footer>
    </div>
  )
}
