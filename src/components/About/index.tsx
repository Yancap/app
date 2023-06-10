import React from 'react'

export const About = () => {
  return (
    <article className='flex flex-col gap-4'>
        <h2 className='text-purple-200 font-bold text-xl sm:text-3xl sm:hidden border-b-2 border-purple-800 pb-2'>
            Sobre mim
        </h2>
        <p className='text-base text-white' id='about'>
        Olá, me chamo Yan Gabriel Ferreira e busco minha inserção no mercado de trabalho 
        na área de tecnologia, com o objetivo de desenvolver minhas competências técnicas 
        e comportamentais. 
        <br /> <br />
        Tenho uma paixão enorme por tecnologia e em manter meu aprendizado 
        contínuo, me destaco pela habilidades comportamentais, como <strong className='text-red-600 font-medium'>autodidata</strong>, 
        <strong className='text-red-600 font-medium'> proatividade</strong>, 
        <strong className='text-red-600 font-medium'> adaptabilidade</strong>, 
        <strong className='text-red-600 font-medium'> boa capacidade analítica</strong> e 
        <strong className='text-red-600 font-medium'> liderança</strong>. 
        Busco sempre me atualizar nas tecnologias que me interessam, sou empenhado em 
        aprimorar meus conhecimentos técnicos e contribuir para o crescimento das empresas 
        em que atuar.
        </p>
    </article>
  )
}
