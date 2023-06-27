import { useEffect, useState } from 'react'
import { Project } from './Project'
import styles from './scroll.module.css'
import Image from 'next/image'
import { getPrismicClient } from '@/services/prismic'
import { GetStaticProps } from 'next'
import { ProjectsProps } from '@/pages'

interface IProjectsProps {
    projects: ProjectsProps
}

export const Projects = ({projects}: IProjectsProps) => {
  const [verifyWidthIsSmall, setVerifyWidthIsSmall] = useState(false)
  const [viewProject, setViewProject] = useState(3)
  const [quantityProjects, setQuantityProjects] = useState(0)
  const [auxSum, setAuxSum] = useState(2)
  const { projectsPersonal, projectsGroup } = projects
  function viewMore(){
    if (viewProject < quantityProjects) {
        const aux = auxSum * 3
        setViewProject(auxSum * 3)
        setAuxSum(auxSum+1)
        document.querySelectorAll(`[data-project]:nth-child(-n+${aux+1})`)?.forEach(element => {
            element.classList.remove('hidden')
            element.classList.add('flex')
        })
    } else {
        setViewProject(3)
        setAuxSum(auxSum-1)
        document.querySelectorAll(`[data-project]:nth-child(n+5)`)?.forEach(element => {
            element.classList.remove('flex')
            element.classList.add('hidden')
        })  
    }
  }
  useEffect(() => {
    const width = window.innerWidth
    if (width < 640) {
        let projects = document.querySelectorAll('div[data-project]')?.length
        setQuantityProjects(projects)
        setVerifyWidthIsSmall(true)
        document.querySelectorAll(`[data-project]:nth-child(n+5)`)?.forEach(element => {
            element.classList.remove('flex')
            element.classList.add('hidden')
        })  
    } else {
        setVerifyWidthIsSmall(false)
    }
  }, [verifyWidthIsSmall])
  return (
    <section className='flex flex-col gap-4' id='project'> 
        <h2 className='text-purple-200 font-bold text-xl sm:text-3xl border-b-2 border-purple-800 pb-2 sm:pb-0 sm:border-0'>
            Meus Projetos
        </h2>
        {verifyWidthIsSmall ? 
        <div className={'sm:overflow-auto sm:h-[40rem] grid gap-2 overflow-x-hidden ' + styles.scrollbar}>
            <h4 className='text-purple-200/20 text-sm border-b-2 pb-2 w-5/6'>
                Projetos Pessoais
            </h4>
            {projectsPersonal?.map((project) => (
                <Project project={project} key={project.id}/>
            ))}
            <h4  data-project className='text-purple-200/20 text-sm border-b-2 pb-2 w-5/6'>
                Projetos do Curso Técnico
            </h4>
            {projectsGroup?.map((project) => (
                <Project project={project} key={project.id}/>
            ))}
        </div>
        :
        <div className={'sm:overflow-auto sm:h-[40rem] grid gap-2 overflow-x-hidden ' + styles.scrollbar}>
            <h4 className='text-purple-200/20 text-sm border-b-2 pb-2 w-5/6'>
                Projetos Pessoais
            </h4>
            {projectsPersonal?.map((project) => (
                <Project project={project} key={project.id}/>
            ))}
            <h4  className='text-purple-200/20 text-sm border-b-2 pb-2 w-5/6'>
                Projetos do Curso Técnico
            </h4>
            {projectsGroup?.map((project) => (
                <Project project={project} key={project.id}/>
            ))}
        </div>
        }
        

        <button className='flex items-center gap-2 self-start text-purple-500 font-medium border-purple-700 border-b-[1px] border-solid pb-2 transition-all hover:text-purple-300 sm:hidden'
            onClick={viewMore}>
            {viewProject < quantityProjects ? "Ver Mais": "Ver Menos"}
            <Image width={0} height={0} src="/utils/arrow-down.svg" alt="" className='h-[14px] w-[14px]'/>
        </button>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()
    const response = await prismic.getAllByType("project",
    {
        fetch: [], 
        pageSize: 50
    })
    console.log(response);
    
    return {
            props: {}
    }
}
