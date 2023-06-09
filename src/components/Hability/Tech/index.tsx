import React from 'react'

interface TechProps {
    tech?: string;
    text: string;
}

export const Tech = ({tech, text}: TechProps) => {
  return (
    <div className='bg-red-700/10 box-content rounded-full flex items-center justify-center gap-2 h-5 w-fit py-2 px-4'>
        { tech &&
            <img src={`/tech/${tech}.svg`} alt="" className="h-5 w-auto cursor-pointer" />
        }
        <span className='font-medium text-red-400 text-base'>
            {text}
        </span>
    </div>
  )
}
