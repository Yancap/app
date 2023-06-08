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
            <li className='text-xl text-purple-200 font-bold flex items-center gap-2'>
              <div className='bg-purple-200 font-bold w-20 h-[1.5px] rounded-full'></div>
              Sobre mim
            </li>
            <li className='text-xl text-purple-600 flex items-center gap-2'>
              <div className='bg-purple-600 font-bold w-12 h-[1.5px] rounded-full'></div>
              Minhas habilidades
            </li>
            <li className='text-xl text-purple-600 flex items-center gap-2'>
              <div className='bg-purple-600 font-bold w-12 h-[1.5px] rounded-full'></div>
              Meus projetos
            </li>
            <li className='text-xl text-purple-600 flex items-center gap-2'>
              <div className='bg-purple-600 font-bold w-12 h-[1.5px] rounded-full'></div>
              Contatos
            </li>
          </ul>
        </nav>
        <footer className='flex gap-8'>
          <img src='/icons/github.svg' alt="" className=" text-red-700 h-10 w-10" />
          <img src='/icons/linkedin.svg' alt=""  className=" text-red-700 h-10 w-10"/>
          <img src='/icons/portfolio.svg' alt=""  className=" text-red-700 h-10 w-10"/>

        </footer>
    </>
  )     
}
