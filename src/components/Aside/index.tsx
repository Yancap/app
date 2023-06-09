import React from 'react'
import github from '../../../public/icons/github.svg'

export const Aside = () => {
  return (
    <>
        <header>
            <h1 className='text-purple-100 text-6xl font-bold mb-2'>
              Yan Gabriel Ferreira
            </h1>
            <h3 className='text-purple-500 text-3xl'>
              Desenvolvedor Web
            </h3>
        </header>
        <nav>
          <ul>
            <li className='link group'>
              <div className='link-details group-hover:w-20 group-hover:bg-purple-200'></div>
              Sobre mim
            </li>
            <li className='link group'>
              <div className='link-details group-hover:w-20 group-hover:bg-purple-200'></div>
              Minhas habilidades
            </li>
            <li className='link group'>
              <div className='link-details group-hover:w-20 group-hover:bg-purple-200'></div>
              Meus projetos
            </li>
            <li className='link group'>
              <div className='link-details group-hover:w-20 group-hover:bg-purple-200'></div>
              Contatos
            </li>
          </ul>
        </nav>
        <footer className='flex gap-8'>
          <a href="https://github.com/Yancap">
            <img src='/icons/github.svg' alt="" className=" h-10 w-10 cursor-pointer transition-all hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/yangabriel/">
            <img src='/icons/linkedin.svg' alt=""  className=" h-10 w-10 cursor-pointer transition-all hover:scale-110"/>
          </a>
          <a href="https://yangabriel.netlify.app/">
            <img src='/icons/portfolio.svg' alt=""  className=" h-10 w-10 cursor-pointer transition-all hover:scale-110"/>
          </a>
        </footer>
    </>
  )     
}
