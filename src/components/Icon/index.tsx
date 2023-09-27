import React from 'react'
import { IconBaseProps, IconBase } from 'react-icons'
import { icons } from './icons';

interface Props extends IconBaseProps{
    icon: string;
    
}

export const Icon = ({icon, ...props}: Props) => {

  const propsIcon: IconBaseProps = {
    size: 18,
    color: "#A31C45",
    ...props
  }
  if (icon in icons) {
    return (
        <figure>
            {icons[icon](propsIcon)}
        </figure>
      )
  }
  return null
}
