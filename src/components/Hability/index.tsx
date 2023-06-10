import React from 'react'
import { Tech } from './Tech'

export const Hability = () => {
  return (
    <section className='flex flex-col gap-4' id='hability'>
        <h2 className='text-purple-200 font-bold text-xl sm:text-3xl border-b-2 border-purple-800 pb-2 sm:pb-0 sm:border-0'>
            Habilidades Técnicas
        </h2>
        <div className='flex flex-wrap gap-4'>
            <Tech tech='html' text='HTML'/>
            <Tech tech='css' text='CSS'/>
            <Tech tech='javascript' text='Javascript'/>
            <Tech tech='react' text='React'/>
            <Tech tech='nextjs' text='NextJS'/>
            <Tech tech='styled-components' text='Styled Components'/>
            <Tech tech='bootstrap' text='Bootstrap'/>
            <Tech tech='tailwindcss' text='TailwindCSS'/>
            <Tech tech='sass' text='Sass'/>
            <Tech tech='typescript' text='Typescript'/>
            <Tech tech='nodejs' text='Node'/>
            <Tech tech='express' text='ExpressJS'/>
            <Tech tech='csharp' text='C#'/>
            <Tech tech='python' text='Python'/>
            <Tech tech='sql' text='SQL'/>
            <Tech tech='figma' text='Figma'/>
            <Tech tech='git' text='Git'/>
            <Tech text='API RESTFUL'/>
            <Tech text='Ui Design'/>
            <Tech text='MVC'/>
        </div>
    </section>
  )
}
