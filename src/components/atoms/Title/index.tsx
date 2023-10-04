import React from 'react'
import { ITitleProps } from './type'

const Title = ({ children }: ITitleProps): JSX.Element => {
  return (
    <h2 className='text-38 md:text-55 uppercase font-bold'>{children}</h2>
  )
}

export default Title 