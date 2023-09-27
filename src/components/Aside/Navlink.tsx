import React, { MouseEvent } from 'react'

interface Props {
    handleNav(event: MouseEvent<HTMLAnchorElement>): void;
    target: string;
    children: string;
}

export const Navlink = ({handleNav, target, children}: Props) => {
  return (
    <a className='flex items-center gap-2 cursor-pointer w-max group' data-target={target} onClick={ (event) => handleNav(event)}>
        <div className='link-details link-details-active group-hover:w-20 group-hover:bg-purple-200'></div>
        <span className='link link-active' >
        {children}
        </span>
    </a>
  )
}
