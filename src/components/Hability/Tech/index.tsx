import React from 'react'

interface TechProps {
    tech?: string;
    text: string;
}

export const Tech = ({tech, text}: TechProps) => {
  return (
    <div className='bg-red-700/10 box-content rounded-full flex items-center justify-center gap-2 h-4 w-fit px-3 py-2 sm:px-4 sm:h-5'>
        { tech &&
            <img src={`/tech/${tech}.svg`} alt="" className="h-4 sm:h-5 w-auto cursor-pointer" />
        }
        <span className='font-medium text-red-400 text-[12px] sm:text-base'>
            {text}
        </span>
    </div>
  )
}
