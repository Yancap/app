import React from 'react'
import { Project } from './Project'
import styles from './scroll.module.css'

export const Projects = () => {
  return (
    <section className='flex flex-col gap-4' id='project'> 
        <h2 className='text-purple-200 font-bold text-xl sm:text-3xl border-b-2 border-purple-800 pb-2 sm:pb-0 sm:border-0'>
            Meus Projetos
        </h2>
        <div className={'sm:overflow-auto sm:h-[40rem] grid gap-2 overflow-x-hidden' + styles.scrollbar}>
            <Project 
                title='Projeto Pizzascript'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis pellentesque eros at nibh eleifend pellentesque. 
                    Donec tellus ipsum, euismod vitae felis a, rhoncus finibus nisi.'
                techs={[
                    {text: 'React', image: 'react',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Javascript', image: 'javascript',},
                    {text: 'Node', image: 'nodejs',},
                ]}
            />

            <Project 
                title='Projeto Pizzascript'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis pellentesque eros at nibh eleifend pellentesque. 
                    Donec tellus ipsum, euismod vitae felis a, rhoncus finibus nisi.'
                techs={[
                    {text: 'React', image: 'react',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Javascript', image: 'javascript',},
                    {text: 'Node', image: 'nodejs',},
                ]}
            />
            <Project 
                title='Projeto Pizzascript'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis pellentesque eros at nibh eleifend pellentesque. 
                    Donec tellus ipsum, euismod vitae felis a, rhoncus finibus nisi.'
                techs={[
                    {text: 'React', image: 'react',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Javascript', image: 'javascript',},
                    {text: 'Node', image: 'nodejs',},
                ]}
            />
            <Project 
                title='Projeto Pizzascript'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis pellentesque eros at nibh eleifend pellentesque. 
                    Donec tellus ipsum, euismod vitae felis a, rhoncus finibus nisi.'
                techs={[
                    {text: 'React', image: 'react',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Javascript', image: 'javascript',},
                    {text: 'Node', image: 'nodejs',},
                ]}
            />
        </div>
    </section>
  )
}
