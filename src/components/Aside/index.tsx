import React, { MouseEvent, useEffect, useState } from 'react'
import github from '../../../public/icons/github.svg'
import SmoothScroll from '@/scripts/SmothScroll'
import Image from 'next/image'

export const Aside = () => {


  function handleNav({currentTarget}: MouseEvent){
    const anchor = currentTarget as HTMLAnchorElement
    const anchors = document.querySelectorAll('a[data-target]')
    for(var i = 0; i < anchors.length; i++){
      anchors[i].querySelector('span')?.classList.remove('link-active')
      anchors[i].querySelector('div')?.classList.remove('link-details-active')
    }
    anchor.querySelector('span')?.classList.add('link-active')
    anchor.querySelector('div')?.classList.add('link-details-active')

    const id = anchor.dataset?.target as string
    anchor.classList.add()
    SmoothScroll.scroll(id)
  }
  useEffect(()=>{
    SmoothScroll.init(["#about", "#hability", "#project", "#contact"])
  }, [])
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
            <a className='flex items-center gap-2 cursor-pointer w-max group' data-target='#about' onClick={handleNav}>
              <div className='link-details link-details-active group-hover:w-20 group-hover:bg-purple-200'></div>
              <span className='link link-active' >
                Sobre mim 
              </span>
              
            </a>
            <a className='flex items-center gap-2 cursor-pointer w-max group' data-target='#hability' onClick={handleNav}>
              <div className='link-details group-hover:w-20 group-hover:bg-purple-200'></div>
              <span className='link'>
                Minhas habilidades
              </span>
            </a>
            <a className='flex items-center gap-2 cursor-pointer w-max group' data-target='#project' onClick={handleNav}>
              <div className='link-details group-hover:w-20 group-hover:bg-purple-200'></div>
              <span className='link'>
                Meus projetos
              </span>
              
            </a>
            <a className='flex items-center gap-2 cursor-pointer w-max group' data-target='#contact' onClick={handleNav}>
              <div className='link-details group-hover:w-20 group-hover:bg-purple-200'></div>
              <span className='link'>
                Contatos
              </span>
            </a>
        </nav>
        <footer className='flex gap-8'>
          <a href="https://github.com/Yancap">
            <Image width={40} height={40} src='/icons/github.svg' alt="" className=" h-10 w-10 cursor-pointer transition-all hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/yangabriel/">
            <Image width={40} height={40} src='/icons/linkedin.svg' alt=""  className=" h-10 w-10 cursor-pointer transition-all hover:scale-110"/>
          </a>
          <a href="https://yangabriel.netlify.app/">
            <Image width={40} height={40} src='/icons/portfolio.svg' alt=""  className=" h-10 w-10 cursor-pointer transition-all hover:scale-110"/>
          </a>
        </footer>
    </>
  )     
}
