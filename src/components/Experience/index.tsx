import React from 'react'
import { Tech } from '../Hability/Tech'

export const Experience = () => {
  return (
    <section className='flex flex-col gap-4 max-w-full' id='project'> 
        <h2 className='text-purple-200 font-bold text-2xl border-b-2 border-purple-800 pb-2 md:pb-0 md:border-0'>
            Minhas Experiencias
        </h2>
        <div className="flex flex-wrap justify-between flex-col md:flex-row gap-4 rounded-lg cursor-pointer p-4 hover:bg-purple-800/20" 
            onClick={() => { 
                window.location.href = "https://www.ibm.com/br-pt"
            }}>
            <h5 className='text-purple-500 text-[14px] pt-1 md:w-3/12 min-w-fit'>
                Nov 2023 - Atualmente
            </h5>
            <div className='md:w-8/12'>
                <h3 className='text-white text-lg'>
                    Aplication Developer - <strong>IBM</strong>
                </h3>
                <h4 className='text-purple-500 mb-1'>
                    Estágiario Técnico
                </h4>
                <p className='text-purple-100 text-[13px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus urna eleifend mauris lobortis, 
                    non pulvinar magna finibus. Integer ut vestibulum leo. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia curae; Nunc nec est non eros elementum rhoncus dignissim sit amet nunc. 
                    Fusce vulputate.
                </p>
                <div className='flex flex-wrap gap-2 py-4'>
                    <Tech text='Angular' tech='angular'/>
                    <Tech text='Typescript' tech='typescript'/>
                    <Tech text='Java' tech='java'/>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap justify-between flex-col md:flex-row gap-4 rounded-lg cursor-pointer p-4 hover:bg-purple-800/20" 
            onClick={() => { 
                window.location.href = "https://www.ibm.com/br-pt"
            }}>
            <h5 className='text-purple-500 text-[14px] pt-1 md:w-3/12 min-w-fit'>
                Set 2023 - Nov 2023
            </h5>
            <div className='md:w-8/12'>
                <h3 className='text-white text-lg'>
                    Developer - <strong>IBM</strong>
                </h3>
                <h4 className='text-purple-500 mb-1'>
                    Estágiario Técnico
                </h4>
                <p className='text-purple-100 text-[13px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus urna eleifend mauris lobortis, 
                    non pulvinar magna finibus. Integer ut vestibulum leo. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia curae; Nunc nec est non eros elementum rhoncus dignissim sit amet nunc. 
                    Fusce vulputate.
                </p>
                <div className='flex flex-wrap gap-2 py-4'>
                    <Tech text='React' tech='react'/>
                    <Tech text='React Native' tech='react-native'/>
                    <Tech text='Angular' tech='angular'/>
                    <Tech text='Node' tech='nodejs'/>
                    <Tech text='NestJS' tech='nestjs'/>
                    <Tech text='Typescript' tech='typescript'/>
                    <Tech text='Java' tech='java'/>
                    <Tech text='MySQL' tech='mysql'/>
                </div>
            </div>
        </div>
        
    </section>
  )
}
