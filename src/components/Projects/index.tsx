import { useEffect, useState } from 'react'
import { Project } from './Project'
import styles from './scroll.module.css'
import Image from 'next/image'


export const Projects = () => {
  const [verifyWidthIsSmall, setVerifyWidthIsSmall] = useState(false)
  const [viewProject, setViewProject] = useState(3)
  const [quantityProjects, setQuantityProjects] = useState(0)
  const [auxSum, setAuxSum] = useState(2)

  
  function viewMore(){
    if (viewProject < quantityProjects) {
        setViewProject(auxSum * 3)
        setAuxSum(auxSum+1)
    } else {
        setViewProject(3)
        setAuxSum(auxSum-1)
    }
  }
  useEffect(() => {
    const width = window.innerWidth
    if (width < 640) {
        let projects = document.querySelectorAll('div[data-project]')?.length
        setQuantityProjects(projects)
        setVerifyWidthIsSmall(true)
    } else {
        setVerifyWidthIsSmall(false)
    }
  }, [])
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
            
            {[
            <Project key={1} image='portfolio.png'
                title='Portfolio Principal'
                text='Meu portfolio principal, com uma UX baseada no Windows 95 e Macintosh Classic.'
                techs={[
                    {text: 'React', image: 'react',},
                    {text: 'SASS', image: 'sass',},
                    {text: 'Javascript', image: 'javascript',}
                ]}
                src='https://yangabriel.netlify.app/'
                github='https://github.com/Yancap/resume-react'
            />,
            <Project key={2} image='artech.png'
                title='Página de Artigos'
                text='Site de artigos sobre tecnologias, com possibilidade de se cadastra, comentar artigos,
                criar artigos com o login de admin, etc.'
                techs={[
                    {text: 'React', image: 'react',},
                    {text: 'Styled Components', image: 'styled-components',},
                    {text: 'Javascript', image: 'javascript',},
                    {text: 'Node', image: 'nodejs',},
                    {text: 'Typescript', image: 'typescript',},
                    {text: 'Express', image: 'express',},
                    {text: 'SQL', image: 'sql',},
                    {text: 'API RESTFUL'},
                    
                ]}
                src='https://artech-blog.netlify.app/'
                github='https://github.com/Yancap/projeto-blog-client'
            />,
            <Project key={3} image='ymoney.png'
                title='Pagina de Controle de Finanças'
                text='Site que permite cadastro de usuário e controle de 
                suas finanças de forma simples'
                techs={[
                    {text: 'React', image: 'react',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Styled Components', image: 'styled-components',},
                    {text: 'Typescript', image: 'typescript',},
                    {text: 'Node', image: 'nodejs',},
                    {text: 'Express', image: 'express',},
                    {text: 'SQL', image: 'sql',},
                    {text: 'API RESTFUL'},
                ]}
                src='https://ymoney.netlify.app/'
                github='https://github.com/Yancap/projeto-blog-client'
            />,
            <Project key={4} image='login.png'
                title='Projeto Login'
                text='Sistema de login básico com NodeJS e React'
                techs={[
                    {text: 'React', image: 'react',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Styled Components', image: 'styled-components',},
                    {text: 'Javascript', image: 'javascript',},
                    {text: 'Node', image: 'nodejs',},
                    {text: 'Express', image: 'express',},
                    {text: 'SQL', image: 'sql',},
                ]}
                src='https://login-node-react.netlify.app/'
                github='https://github.com/Yancap/projeto-login-node-react'
            />,
            <Project key={5} image='pizzascript.png'
                title='Projeto PizzaScript'
                text='Site simples de uma pizzaria fictícia desenvolvida em React'
                techs={[
                    {text: 'React', image: 'react',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Styled Components', image: 'styled-components',},
                    {text: 'Javascript', image: 'javascript',},
                    {text: 'Node', image: 'nodejs',},
                ]}
                src='https://pizzascript.netlify.app/'
                github='https://github.com/Yancap/pizzaria-react'
            />,
            <Project key={6} image='memoria.png'
                title='Jogo da Memoria'
                text='Jogo da Memoria simples com Javascript'
                techs={[
                    {text: 'HTML', image: 'html',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Javascript', image: 'javascript',},
                ]}
                src='https://yan-resume.netlify.app/projects/jogo%20da%20memoria%20js/gamem'
                github='https://github.com/Yancap/Jogo-da-Memoria-com-JavaScript/tree/main'
            />,
            <Project key={7} image='velha.png'
                title='Jogo da Velha com Javascript'
                text='jogo da Velha simples com Javascript'
                techs={[
                    {text: 'HTML', image: 'html',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Javascript', image: 'javascript',},
                ]}
                src='https://yan-resume.netlify.app/projects/jogo%20da%20velha%20com%20js/gamev'
                github='https://github.com/Yancap/Jogo-da-Velha-com-Javascript/tree/main'
            />,
            <Project key={8} image='only-github.png'
                title='Site Animais Fantásticos'
                text='Site simples com objetivo de testar meus conhecimentos em 
                manipulação do DOM'
                techs={[
                    {text: 'HTML', image: 'html',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Javascript', image: 'javascript',},
                ]}
                src='https://github.com/Yancap/site-animais-projeto-origamid'
                github='https://github.com/Yancap/site-animais-projeto-origamid'
            />,
            <Project key={9} image='python.png'
                title='Sistema de Login com Python'
                text='Sistema de login simples, com o objetivo de testar minha lógica
                de programação em python, POO e MVC'
                techs={[
                    {text: 'Python', image: 'python',},
                    {text: 'SQL', image: 'sql',},
                    {text: 'MVC'},
                ]}
                src='https://github.com/Yancap/sistema-de-login-python'
                github='https://github.com/Yancap/sistema-de-login-python'
            />,
            <Project key={10} image='python.png'
                title='Simulador de Banco com Python'
                text='Projeto com o objetivo de praticar minha lógica de 
                programação'
                techs={[
                    {text: 'Python', image: 'python',}
                ]}
                src='https://github.com/Yancap/Simulador-de-Banco-em-Python'
                github='https://github.com/Yancap/Simulador-de-Banco-em-Python'
            />,
            <h4 key={11} className='text-purple-200/20 text-sm border-b-2 pb-2 w-5/6'>
                Projetos do Curso Técnico
            </h4>,
            <Project key={12} image='fbit.png'
                title='Site da Startup FB1T'
                text='Site de uma startup fictícia'
                techs={[
                    {text: 'HTML', image: 'html'},
                    {text: 'CSS', image: 'css'},
                    {text: 'Javascript', image: 'javascript'},
                    {text: 'Bootstrap', image: 'bootstrap'},
                ]}
                src='https://yan-resume.netlify.app/projects/startup_fbit/'
            />,
            <Project key={13} image='fbtech.png'
                title='Site da Incubadora FBTech'
                text='Site da Incubadora de startups fictícia FBTech'
                techs={[
                    {text: 'HTML', image: 'html',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Javascript', image: 'javascript',},
                ]}
                src='https://yan-resume.netlify.app/projects/site%20da%20incubadora%20(rev%2029)/index.html'
            />,
            <Project key={14} image='python.png'
                title='Search Engine com Python'
                text='Esse é o projeto final do modulo de analise de dados do curso técnico, por conta de limitações do servidor, realizamos a integração Python e Javascript sem a 
                utilização de biblicotecas externas ou framework.'
                techs={[
                    {text: 'HTML', image: 'html',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Javascript', image: 'javascript',},
                    {text: 'Python', image: 'python',}
                ]}
                src='https://github.com/Yancap/Trabalho-Final-do-Modulo-de-Analise-de-Dados/tree/main'
                github='https://github.com/Yancap/Trabalho-Final-do-Modulo-de-Analise-de-Dados/tree/main'
            />,
            <Project key={15} image='c.png'
                title='Show do Milhão em C'
                text='Trabalho do modulo de Lógica de Programação em C'
                techs={[
                    {text: 'C', image: 'c',},
                ]}
                src='https://github.com/Yancap/site-animais-projeto-origamid'
                github='https://github.com/Yancap/site-animais-projeto-origamid'
            />
            ].map((element, index) => {
                if (index < viewProject) {
                    return element
                }
                return null
            })}
        </div>
        :
        <div className={'sm:overflow-auto sm:h-[40rem] grid gap-2 overflow-x-hidden ' + styles.scrollbar}>
            <h4 className='text-purple-200/20 text-sm border-b-2 pb-2 w-5/6'>
                Projetos Pessoais
            </h4>
            <Project 
                image='portfolio.png'
                title='Portfolio Principal'
                text='Meu portfolio principal, com uma UX baseada no Windows 95 e Macintosh Classic.'
                techs={[
                    {text: 'React', image: 'react',},
                    {text: 'SASS', image: 'sass',},
                    {text: 'Javascript', image: 'javascript',}
                ]}
                src='https://yangabriel.netlify.app/'
                github='https://github.com/Yancap/resume-react'
            />
            <Project 
                image='artech.png'
                title='Página de Artigos'
                text='Site de artigos sobre tecnologias, com possibilidade de se cadastra, comentar artigos,
                criar artigos com o login de admin, etc.'
                techs={[
                    {text: 'React', image: 'react',},
                    {text: 'Styled Components', image: 'styled-components',},
                    {text: 'Javascript', image: 'javascript',},
                    {text: 'Node', image: 'nodejs',},
                    {text: 'Typescript', image: 'typescript',},
                    {text: 'Express', image: 'express',},
                    {text: 'SQL', image: 'sql',},
                    {text: 'API RESTFUL'},
                    
                ]}
                src='https://artech-blog.netlify.app/'
                github='https://github.com/Yancap/projeto-blog-client'
            />
            <Project 
                image='ymoney.png'
                title='Pagina de Controle de Finanças'
                text='Site que permite cadastro de usuário e controle de 
                suas finanças de forma simples'
                techs={[
                    {text: 'React', image: 'react',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Styled Components', image: 'styled-components',},
                    {text: 'Typescript', image: 'typescript',},
                    {text: 'Node', image: 'nodejs',},
                    {text: 'Express', image: 'express',},
                    {text: 'SQL', image: 'sql',},
                    {text: 'API RESTFUL'},
                ]}
                src='https://ymoney.netlify.app/'
                github='https://github.com/Yancap/projeto-blog-client'
            />
            <Project 
                image='login.png'
                title='Projeto Login'
                text='Sistema de login básico com NodeJS e React'
                techs={[
                    {text: 'React', image: 'react',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Styled Components', image: 'styled-components',},
                    {text: 'Javascript', image: 'javascript',},
                    {text: 'Node', image: 'nodejs',},
                    {text: 'Express', image: 'express',},
                    {text: 'SQL', image: 'sql',},
                ]}
                src='https://login-node-react.netlify.app/'
                github='https://github.com/Yancap/projeto-login-node-react'
            />
            <Project 
                image='pizzascript.png'
                title='Projeto PizzaScript'
                text='Site simples de uma pizzaria fictícia desenvolvida em React'
                techs={[
                    {text: 'React', image: 'react',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Styled Components', image: 'styled-components',},
                    {text: 'Javascript', image: 'javascript',},
                    {text: 'Node', image: 'nodejs',},
                ]}
                src='https://pizzascript.netlify.app/'
                github='https://github.com/Yancap/pizzaria-react'
            />
            <Project 
                image='memoria.png'
                title='Jogo da Memoria'
                text='Jogo da Memoria simples com Javascript'
                techs={[
                    {text: 'HTML', image: 'html',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Javascript', image: 'javascript',},
                ]}
                src='https://yan-resume.netlify.app/projects/jogo%20da%20memoria%20js/gamem'
                github='https://github.com/Yancap/Jogo-da-Memoria-com-JavaScript/tree/main'
            />
            <Project 
                image='velha.png'
                title='Jogo da Velha com Javascript'
                text='jogo da Velha simples com Javascript'
                techs={[
                    {text: 'HTML', image: 'html',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Javascript', image: 'javascript',},
                ]}
                src='https://yan-resume.netlify.app/projects/jogo%20da%20velha%20com%20js/gamev'
                github='https://github.com/Yancap/Jogo-da-Velha-com-Javascript/tree/main'
            />
            <Project 
                image='only-github.png'
                title='Site Animais Fantásticos'
                text='Site simples com objetivo de testar meus conhecimentos em 
                manipulação do DOM'
                techs={[
                    {text: 'HTML', image: 'html',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Javascript', image: 'javascript',},
                ]}
                src='https://github.com/Yancap/site-animais-projeto-origamid'
                github='https://github.com/Yancap/site-animais-projeto-origamid'
            />
            <Project 
                image='python.png'
                title='Sistema de Login com Python'
                text='Sistema de login simples, com o objetivo de testar minha lógica
                de programação em python, POO e MVC'
                techs={[
                    {text: 'Python', image: 'python',},
                    {text: 'SQL', image: 'sql',},
                    {text: 'MVC'},
                ]}
                src='https://github.com/Yancap/sistema-de-login-python'
                github='https://github.com/Yancap/sistema-de-login-python'
            />
            <Project 
                image='python.png'
                title='Simulador de Banco com Python'
                text='Projeto com o objetivo de praticar minha lógica de 
                programação'
                techs={[
                    {text: 'Python', image: 'python',}
                ]}
                src='https://github.com/Yancap/Simulador-de-Banco-em-Python'
                github='https://github.com/Yancap/Simulador-de-Banco-em-Python'
            />
            <h4 className='text-purple-200/20 text-sm border-b-2 pb-2 w-5/6'>
                Projetos do Curso Técnico
            </h4>
            <Project 
                image='fbit.png'
                title='Site da Startup FB1T'
                text='Site de uma startup fictícia'
                techs={[
                    {text: 'HTML', image: 'html'},
                    {text: 'CSS', image: 'css'},
                    {text: 'Javascript', image: 'javascript'},
                    {text: 'Bootstrap', image: 'bootstrap'},
                ]}
                src='https://yan-resume.netlify.app/projects/startup_fbit/'
                
            />
            <Project 
                image='fbtech.png'
                title='Site da Incubadora FBTech'
                text='Site da Incubadora de startups fictícia FBTech'
                techs={[
                    {text: 'HTML', image: 'html',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Javascript', image: 'javascript',},
                ]}
                src='https://yan-resume.netlify.app/projects/site%20da%20incubadora%20(rev%2029)/index.html'
            />
            <Project 
                image='python.png'
                title='Search Engine com Python'
                text='Esse é o projeto final do modulo de analise de dados do curso técnico, por conta de limitações do servidor, realizamos a integração Python e Javascript sem a 
                utilização de biblicotecas externas ou framework.'
                techs={[
                    {text: 'HTML', image: 'html',},
                    {text: 'CSS', image: 'css',},
                    {text: 'Javascript', image: 'javascript',},
                    {text: 'Python', image: 'python',}
                ]}
                src='https://github.com/Yancap/Trabalho-Final-do-Modulo-de-Analise-de-Dados/tree/main'
                github='https://github.com/Yancap/Trabalho-Final-do-Modulo-de-Analise-de-Dados/tree/main'
            />
            <Project 
                image='c.png'
                title='Show do Milhão em C'
                text='Trabalho do modulo de Lógica de Programação em C'
                techs={[
                    {text: 'C', image: 'c',},
                ]}
                src='https://github.com/Yancap/site-animais-projeto-origamid'
                github='https://github.com/Yancap/site-animais-projeto-origamid'
            />
        </div>
        }
        

        <button className='flex items-center gap-2 self-start text-purple-500 font-medium border-purple-700 border-b-[1px] border-solid pb-2 transition-all hover:text-purple-300 sm:hidden'
            onClick={viewMore}>
            {viewProject < quantityProjects ? "Ver Mais": "Ver Menos"}
            <Image src="/utils/arrow-down.svg" alt="" className='h-[14px] w-[14px]'/>
        </button>
    </section>
  )
}
