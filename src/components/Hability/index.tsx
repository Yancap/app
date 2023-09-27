import React from 'react'
import { Tech } from './Tech'
import { TechProps } from '@/pages'

interface ITechProps {
  tech: TechProps[]
}

export const Hability = ({tech}: ITechProps) => {
  return (
    <section className='flex flex-col gap-4 w-full' id='hability'>
        <h2 className='text-purple-200 font-bold text-2xl border-b-2 border-purple-800 pb-2 md:pb-0 md:border-0'>
            Habilidades Técnicas
        </h2>
        <div className='flex flex-col flex-wrap gap-4 pb-2'>
          <header className='border-b-2 border-b-red-800/50'>
            <h2 className='font-bold text-red-500 py-2 '>
              Avançado
            </h2>
          </header>
          <div className='flex flex-wrap gap-4 px-1'>
            {tech.map(tech => (
              tech.level === "advanced" && <Tech tech={tech.tech} text={tech.text} key={tech.tech}/>
            ))}
          </div>
        </div>
        <div className='flex flex-col flex-wrap gap-4 pb-2'>
          <header className='border-b-2 border-b-red-800/50'>
            <h2 className='font-bold text-red-500 py-2 '>
              Intermediário
            </h2>
          </header>
          <div className='flex flex-wrap gap-4 px-1'>
          {tech.map(tech => (
              tech.level === "intermediary" && <Tech tech={tech.tech} text={tech.text} key={tech.tech}/>
            ))}
          </div>
        </div>
        <div className='flex flex-col flex-wrap gap-4 pb-2'>
          <header className='border-b-2 border-b-red-800/50'>
            <h2 className='font-bold text-red-500 py-2 '>
              Básico
            </h2>
          </header>
          <div className='flex flex-wrap gap-4 px-1'>
            {tech.map(tech => (
              tech.level === "basic" && <Tech tech={tech.tech} text={tech.text} key={tech.tech}/>
            ))}
          </div>
        </div>
    </section>
  )
}
