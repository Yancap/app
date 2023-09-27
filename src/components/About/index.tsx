import { AboutProps } from '@/pages'
import React from 'react'

interface IAboutProps {
  about: AboutProps
}

export const About = ({about}: IAboutProps) => {
  return (
    <article className='flex flex-col gap-4'>
        <h2 className='text-purple-200 font-bold text-2xl sm:hidden border-b-2 border-purple-800 pb-2'>
            Sobre mim
        </h2>
        <div dangerouslySetInnerHTML={{__html: about.text}} />
        
    </article>
  )
}
