import React from 'react'
import { Project } from './Project'
import styles from './scroll.module.css'

export const Projects = () => {
  return (
    <section className='flex flex-col gap-4' id='project'> 
        <h2 className='text-purple-200 font-bold text-3xl'>
            Meus Projetos
        </h2>
        <div className={'overflow-auto h-[40rem] grid gap-2 ' + styles.scrollbar}>
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
