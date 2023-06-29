import React from 'react'
import { Tech } from './Tech'
import { TechProps } from '@/pages'

interface ITechProps {
  tech: TechProps[]
}

export const Hability = ({tech}: ITechProps) => {
  return (
    <section className='flex flex-col gap-4' id='hability'>
        <h2 className='text-purple-200 font-bold text-xl sm:text-3xl border-b-2 border-purple-800 pb-2 sm:pb-0 sm:border-0'>
            Habilidades Técnicas
        </h2>
        <div className='flex flex-wrap gap-4'>
            {tech.map(tech => (
              <Tech tech={tech.tech} text={tech.text}/>
            ))}
        </div>
    </section>
  )
}
