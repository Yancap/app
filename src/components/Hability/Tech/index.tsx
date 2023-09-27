import Image from 'next/image';
import React from 'react'
import { Icon } from '@/components/Icon';

interface TechProps {
    tech?: string;
    text: string;
}

export const Tech = ({tech, text}: TechProps) => {
  
  return (
    <div className='bg-red-700/10 box-content rounded-full flex items-center justify-between gap-2 h-4.5 w-fit px-3.5 py-2'>
      { tech &&
        <Icon icon={tech}  />
        //<Image height={16} width={16} src={icons.nextjs()} alt="" className="h-4 sm:h-5 w-auto cursor-pointer" />
      }
      <span className='font-medium text-red-400 text-[13px]'>
          {text}
      </span>
    </div>
  )
}
