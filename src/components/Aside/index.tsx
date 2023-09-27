import React, { MouseEvent, useEffect, useState } from 'react'
import github from '../../../public/icons/github.svg'
import SmoothScroll from '@/scripts/SmothScroll'
import Image from 'next/image'
import { Navlink } from './Navlink'

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
    <aside //className="flex flex-col gap-12 sm:sticky top-0 pt-20 pl-0 sm:h-screen sm:py-20 xl:pl-20 lg:pl-10"
      className="flex flex-col justify-evenly gap-16 sm:sticky top-0 sm:h-screen py-16 sm:py-0"
    >
        <header>
          <div className='mb-6'>
            <h1 className='text-purple-100 text-5xl font-bold mb-2'>
              Yan Gabriel Ferreira
            </h1>
            <h3 className='text-purple-200 text-xl'>
              Desenvolvedor Web Fullstack
            </h3>
          </div>
          <p className='text-purple-500 mb-16'>
            Aprimoramento é meu lema diário
          </p>
          <nav>
            <Navlink handleNav={handleNav} target='#about'>
              Sobre min
            </Navlink>
            <Navlink handleNav={handleNav} target='#hability'>
              Minhas habilidades
            </Navlink>
            <Navlink handleNav={handleNav} target='#project'>
              Meus projetos
            </Navlink>
            <Navlink handleNav={handleNav} target='#contact'>
              Contatos
            </Navlink>
          </nav>
        </header>
        
        <footer className='flex gap-4'>
          <a href="https://github.com/Yancap" target='_blank'>
            <Image width={32} height={32} src='/icons/github.svg' alt="" className=" h-8 w-8 cursor-pointer transition-all hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/yangabriel/" target='_blank'>
            <Image width={32} height={32} src='/icons/linkedin.svg' alt=""  className=" h-8 w-8 cursor-pointer transition-all hover:scale-110"/>
          </a>
          {/* 
          <a href="https://yangabriel.netlify.app/" target='_blank' >
            <Image width={36} height={36} src='/icons/portfolio.svg' alt=""  className=" h-10 w-10 cursor-pointer transition-all hover:scale-110"/>
          </a> 
          */}
        </footer>
    </aside>
  )     
}
