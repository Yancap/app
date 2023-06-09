import React from 'react'

export const Contact = () => {
  return (
    <footer className='flex flex-col gap-5' id='contact'>
        <h2 className='text-purple-200 font-bold text-3xl'>
            Contatos
        </h2>
        <nav className='flex flex-col gap-4 '>
            <div className='flex items-center gap-2'>
                <a href="https://yangabriel.netlify.app/">
                    <img src='/icons/portfolio.svg' alt="" className=" h-5 w-5 cursor-pointer transition-all hover:scale-110" />
                </a>
                <span className='t text-[14px] font-light text-red-700 underline decoration-red-700 decoration-1'>
                    https://yangabriel.netlify.app/
                </span>
            </div>
            <div className='flex items-center gap-2'>
                <a href="https://www.linkedin.com/in/yangabriel/">
                    <img src='/icons/linkedin.svg' alt="" className=" h-5 w-5 cursor-pointer transition-all hover:scale-110" />
                </a>
                <span className='t text-[14px] font-light text-red-700 underline decoration-red-700 decoration-1'>
                    https://www.linkedin.com/in/yangabriel/
                </span>
            </div>
            <div className='flex items-center gap-2'>
                <a href="https://github.com/Yancap">
                    <img src='/icons/github.svg' alt="" className=" h-5 w-5 cursor-pointer transition-all hover:scale-110" />
                </a>
                <span className='t text-[14px] font-light text-red-700 underline decoration-red-700 decoration-1'>
                    https://github.com/Yancap
                </span>
            </div>
            <div className='flex items-center gap-2'>
                <img src='/icons/whatsapp.svg' alt="" className=" h-5 w-5 cursor-pointer transition-all hover:scale-110" />
                <span className='t text-[14px] font-light text-red-700'>
                    +55 21 99164-2554
                </span>
            </div>
            <div className='flex items-center gap-2'>
                <img src='/icons/local.svg' alt="" className=" h-5 w-5 cursor-pointer transition-all hover:scale-110" />
                <span className='t text-[14px] font-light text-red-700'>
                    Rio de Janeiro, RJ, Brasil
                </span>
            </div>
            
            <div className='flex items-center gap-2'>
                <img src='/icons/email.svg' alt="" className=" h-5 w-5 cursor-pointer transition-all hover:scale-110" />
                <span className='t text-[14px] font-light text-red-700'>
                    yangabriel3001f@gmail.com
                </span>
            </div>
            
        </nav>

    </footer>
  )
}
